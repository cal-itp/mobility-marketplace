$(function () {
  let table;

  const buildDataTable = (data, dictionary) => {
    const col = (dict) =>
      Object.assign(
        {},
        {
          title: dict.label,
          headerTooltip: dict.definition,
          field: dict.column,
        }
      );

    const textCol = (dict) =>
      Object.assign({}, col(dict), {
        formatter: "textarea",
      });

    const numCol = (dict) =>
      Object.assign({}, col(dict), {
        sorter: "number",
        sorterParams: {
          alignEmptyValues: "bottom",
        },
        formatter: "money",
        formatterParams: {
          precision: false,
        },
      });

    const moneyCol = (dict) =>
      Object.assign({}, numCol(dict), {
        formatterParams: {
          symbol: "$",
        },
      });

    const urlCol = (dict, label, textKey) =>
      Object.assign({}, col(dict), {
        formatter: "link",
        title: label || dict.label,
        formatterParams: {
          labelField: textKey || dict.column,
          target: "_blank",
        },
      });

    const provider = dictionary.find((dict) => dict.column === "provider");
    const cols = dictionary.map((dict) => {
      switch (dict.type) {
        case "bool":
        case "string":
        case "text":
          return textCol(dict);
        case "float64":
        case "integer":
        case "int64":
          return numCol(dict);
        case "money":
          return moneyCol(dict);
        case "url":
          return dict.column === "url"
            ? urlCol(dict, provider.label, provider.column)
            : urlCol(dict);
        default:
          console.log(`Unknown column type: ${dict}`);
      }
    });

    // create the tabulator data table
    table = new Tabulator(`#${data_table.data_id}`, {
      layout: "fitData",
      data: data,
      columns: cols,
      headerSortElement: "<i></i>",
      height: "560px",
      pagination: false,
      selectable: false,
    });

    return [data, dictionary];
  };

  const refresh = (county) => {
    if (county && county !== "") {
      // filter where service_county column contains county
      table.setFilter("counties_served", "like", county);
    } else {
      // clear programmatic filters
      table.clearFilter(true);
    }

    // although not intuitive, this sorts by service_county and then provider
    table.setSort([
      { column: "counties_served", dir: "asc" },
      { column: "agency_name", dir: "asc" },
    ]);
  };

  const $filterSection = $("#filter-pills");
  const $pill = $(`
    <div class="pill">
      <span class="sr-only">Filtered by:</span>
      <span class="county"></span>
      (<span class="count"></span>)

      <button class="pill__close">
        <span class="sr-only">Clear filter</span>
      </button>
    </div>
  `);
  const clearCountyFilter = () => {
    $pill.detach();
    refresh();
  };

  $pill.find(".pill__close").on("click", clearCountyFilter);

  const handleCountyClick = (e) => {
    if (e && e.detail) {
      const data = e.detail;
      refresh(data.properties.county);

      $pill.find(".county").text(data.properties.county);
      $pill.find(".count").text(data.properties.num_providers);

      $filterSection.prepend($pill);
    } else {
      clearCountyFilter();
    }
  };

  document.addEventListener("mapClick", handleCountyClick);

  const dataFiles = [data_table.data_file, data_table.dict_file];
  const jobs = dataFiles.map((dataFile) => $.get(dataFile, (data) => data));

  Promise.all(jobs)
    .then(([data, dictionary]) => buildDataTable(data, dictionary))
    .then(() => refresh());
});
