$(function() {
  const providers = [];
  const target_id = "#" + data_table.target_id;

  let table = new Tabulator(target_id, {
    reactiveData: true,
    layout: "fitColumns",
    columns: [
      {title:"Agency", field:"provider"},
      {title:"Service County", field:"service_county"},
      {title:"VOMS", field:"voms"},
      {title:"UPT", field:"upt"},
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
