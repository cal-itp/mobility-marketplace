$(function () {
  let table;

  const buildDataTable = (data, dictionary) => {
    const col = (dict) => ({
      title: dict.label,
      headerTooltip: dict.definition,
      field: dict.column,
    });

    const textCol = (dict) => ({
      ...col(dict),
      formatter: "textarea",
    });

    const numCol = (dict) => ({
      ...col(dict),
      sorter: "number",
      sorterParams: {
        alignEmptyValues: "bottom",
      },
      formatter: "money",
      formatterParams: {
        precision: false,
      },
    });

    const moneyCol = (dict) => ({
      ...numCol(dict),
      formatterParams: {
        symbol: "$",
      }
    });

    const urlCol = (dict, label, textKey) => ({
      ...col(dict),
      formatter: "link",
      title: label || dict.label,
      formatterParams: {
        labelField: textKey || dict.column,
        target: "_blank",
      }
    });

    const columnOverrides = {
      agency_name: {
        field: 'agency_website',
        formatter: "link",
        formatterParams: {
          labelField: "agency_name",
          target: "_blank",
        },
        frozen: true,
        sorter: (a, b, aRow, bRow) => {
          a = String(aRow.getData().agency_name);
          b = String(bRow.getData().agency_name);

          return a.localeCompare(b, "en");
        },
        width: '50px',
      },
      agency_website: {
        visible: false,
      },
      gtfs_schedule_uris: {
        title: "GTFS Schedule URLs",
        formatter: (cell) => {
          const data = cell.getValue();

          if (!data) {
            return "";
          }

          return data
            .split(";")
            .map((url) => `<a href="${url}" target="_blank">${url}</a>`)
            .join("<br />");
        },
      },
    };

    const provider = dictionary.find((dict) => dict.column === "provider");
    const cols = dictionary.map((dict) => {
      let colDef;

      switch (dict.type) {
        case "bool":
        case "string":
        case "text":
          colDef = textCol(dict);
          break;

        case "float64":
        case "integer":
        case "int64":
          colDef = numCol(dict);
          break;

        case "money":
          colDef = moneyCol(dict);
          break;

        case "url":
          colDef = dict.column === "url"
            ? urlCol(dict, provider.label, provider.column)
            : urlCol(dict);
          break;

        default:
          console.error(`Unknown column type: ${dict}`);
      }

      if (columnOverrides[dict.column]) {
        colDef = {
          ...colDef,
          ...columnOverrides[dict.column],
        };
      }

      return colDef;
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

  const filterTableBy = (county) => {
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
    filterTableBy();
  };

  $pill.find(".pill__close").on("click", clearCountyFilter);

  const handleCountyClick = (e) => {
    if (e && e.detail) {
      const data = e.detail;
      filterTableBy(data.properties.county);

      $pill.find(".county").text(data.properties.county);
      $pill.find(".count").text(data.properties.num_providers);

      $filterSection.prepend($pill);
    } else {
      clearCountyFilter();
    }
  };

  document.addEventListener("mapClick", handleCountyClick);

  const jobs = [
    data_table.data_file,
    data_table.dict_file,
  ].map((dataFile) => $.get(dataFile, (data) => data));

  Promise.all(jobs)
    .then(([data, dictionary]) => buildDataTable(data, dictionary))
    .then(() => filterTableBy());
});
