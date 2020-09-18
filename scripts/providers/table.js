$(function() {
  const target_id = "#" + data_table.target_id;

  let table = new Tabulator(target_id, {
    layout: "fitColumns",
    columns: [
      {
        title:"Provider Name",
        headerTooltip:"Link to transit service provider's website.",
        field:"url",
        formatter:"link",
        formatterParams:{
          labelField:"provider",
          target:"_blank",
        }
      },
      {
        title:"City HQ",
        headerTooltip:"City included in provider's contact address.",
        field:"contact_city",
        formatter:"textarea"
      },
      {
        title:"Counties Serviced",
        headerTooltip:"County (or counties) with mapped services.",
        field:"service_county",
        formatter:"textarea"
      },
      {
        title:"2018 Passenger Volume",
        headerTooltip:"2018 Unlinked Passenger Trips from the National Transit Database (NTD). Includes NTD mode categories Motorbus (MB), Bus Rapid Transit (RB), Cable Car (CC), Commuter Bus (CB), Commuter Rail (CR), Heavy Rail (HR), Hybrid Rail (YR), Inclined Plane (IP), Jitney (JT), Light Rail (LR), Monorail/Automated  Guideway (MG), Streetcar Rail (SR), Trolleybus (TB), Demand Response (DR) and Demand Response Taxi (DT).",
        field:"upt",
        sorter:"number",
        sorterParams:{
          alignEmptyValues:"bottom"
        },
        formatter:"money",
        formatterParams:{
          precision:false
        },
      }
    ],
    height: "560px",
    pagination:false
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

  const handleClick = (e) => {
    const data = e.detail;
    refresh(data);
  };

  document.addEventListener("mapClick", handleClick);

  $.get(data_table.data_file, function(data) {
    table.setData(data);
    refresh();
  });
});
