$(function() {
  let providers = [];
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

  function refresh(county) {
    if (county && county !== "") {
      table.setFilter("service_county", "=", county);
    }
    else {
      table.setData(providers);
    }
  }

  $.get(data_table.data_file, function(data) {
    providers = data;
    refresh();
  });
});
