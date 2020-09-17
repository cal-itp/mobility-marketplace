$(function() {
  const target_id = "#" + data_table.target_id;

  const numberMutator = (value) => value ? parseInt(value) : null;

  let table = new Tabulator(target_id, {
    reactiveData: true,
    layout: "fitColumns",
    columns: [
      {title:"Provider", field:"provider", formatter:"textarea", widthGrow:2},
      {title:"Service County", field:"service_county", formatter:"textarea", widthGrow:3},
      {title:"City", field:"contact_city", formatter:"textarea", widthGrow:2},
      {title:"NTD ID", field:"ntd_id"},
      {title:"VOMS", field:"voms", mutator:numberMutator, formatter:"money", formatterParams:{
        precision:false
      }},
      {title:"UPT", field:"upt", mutator:numberMutator, formatter:"money", formatterParams:{
        precision:false
      }},
      {title:"Fares", field:"fares", mutator:numberMutator, formatter:"money", formatterParams:{
        precision:false,
        symbol:"$"
      }},
    ],
    height: "560px",
    pagination:"local"
  });

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
      {column:"provider", dir:"asc"},
      {column:"service_county", dir:"asc"}
    ]);
  }

  document.addEventListener("mapClick", (e) => refresh(e.detail));

  $.get(data_table.data_file, function(data) {
    table.setData(data);
    refresh();
  });
});
