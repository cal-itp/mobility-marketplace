$(function () {
  let table;

  const buildDataTable = (data, dictionary) => {
    const col = (dict) => Object.assign({}, {
      title: dict.label,
      headerTooltip: dict.definition,
      field: dict.column
    });

    const textCol = (dict) => Object.assign({}, col(dict), {
      formatter: "textarea"
    });

    const numCol = (dict) => Object.assign({}, col(dict), {
      sorter: "number",
      sorterParams: {
        alignEmptyValues: "bottom"
      },
      formatter: "money",
      formatterParams: {
        precision: false
      }
    });

    const moneyCol = (dict) => Object.assign({}, numCol(dict), {
      formatterParams: {
        symbol: "$"
      }
    });

    const urlCol = (dict, label, textKey) => Object.assign({}, col(dict), {
      formatter: "link",
      title: label || dict.label,
      formatterParams: {
        labelField: textKey || dict.column,
        target: "_blank"
      }
    });

    const provider = dictionary.find(dict => dict.column === "provider");
    const cols = dictionary.map(dict => {
      switch (dict.type) {
        case "text":
          return textCol(dict)
        case "integer":
          return numCol(dict)
        case "money":
          return moneyCol(dict)
        case "url":
          return dict.column === "url" ? urlCol(dict, provider.label, provider.column) : urlCol(dict)
        default:
          console.log(`Unknown column type: ${dict}`);
      }
    });

    // hide the provider name column (duplicate, we have the link from url)
    // kept in the table to be used for sorting
    cols.find(c => c.field === "provider").visible = false;

    // freeze the url column on the left (for scrolling)
    cols.find(c => c.field === "url").frozen = true;

    // sort the url column by provider name, not url
    cols.find(c => c.field === "url").sorter = (a,b,aRow,bRow) => {
      a = String(aRow.getData().provider);
      b = String(bRow.getData().provider);
      return a.localeCompare(b, "en");
    };

    // set a width on the main text columns to constrain stretching
    cols.filter(c => ["service_county", "contact_city", "interconnected_providers"].indexOf(c.field) > -1)
        .forEach(c => c.width = 175);

    // create the tabulator data table
    table = new Tabulator(`#${data_table.data_id}`, {
      layout: "fitData",
      data: data,
      columns: cols,
      headerSortElement:"<i></i>",
      height: "560px",
      pagination: false,
      selectable: false
    });

    return [data, dictionary];
  };

  const buildDictTable = (dictionary) => {
    // create the dict table (don't keep a reference)
    new Tabulator(`#${data_table.dict_id}`, {
      layout: "fitColumns",
      data: dictionary,
      autoColumns: true,
      autoColumnsDefinitions: (definitions) => {
        // remove type column
        definitions = definitions.filter((column) => column.field !== "type");
        // wrap column name in code tag
        definitions.find((column) => column.field === "column").formatter = (cell) => `<code>${cell.getValue()}</code>`;
        // fix up column widths
        definitions.find((column) => column.field === "column").width = "20%";
        definitions.find((column) => column.field === "label").width = "21%";
        definitions.find((column) => column.field === "definition").width = "40%";
        definitions.find((column) => column.field === "source").width = "20%";
        definitions.find((column) => column.field === "notes").minWidth = "400px";

        return definitions;
      },
      headerSort: false,
      pagination: false,
      selectable: false
    });

    return dictionary;
  };

  const refresh = (county) => {
    if (county && county !== "") {
      // filter where service_county column contains county
      table.setFilter("service_county", "like", county);
    }
    else {
      // clear programmatic filters
      table.clearFilter(true);
    }

    // although not intuitive, this sorts by service_county and then provider
    table.setSort([
      { column: "provider", dir: "asc" },
      { column: "service_county", dir: "asc" }
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

  $pill.find('.pill__close').on('click', clearCountyFilter);

  const handleCountyClick = (e) => {
    if (e && e.detail) {
      const data = e.detail;
      refresh(data.properties.county);

      $pill.find('.county').text(data.properties.county);
      $pill.find('.count').text(data.properties.num_providers);

      $filterSection.prepend($pill);
    }
    else {
      clearCountyFilter();
    }
  };

  document.addEventListener("mapClick", handleCountyClick);

  const dataFiles = [data_table.data_file, data_table.dict_file];
  const jobs = dataFiles.map((dataFile) => $.get(dataFile, (data) => data));

  Promise.all(jobs)
    .then(([data, dictionary]) => buildDataTable(data, dictionary))
    .then(([_, dictionary]) => buildDictTable(dictionary))
    .then(() => refresh());
});
