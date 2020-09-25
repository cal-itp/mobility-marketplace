$(function () {
  mapboxgl.accessToken = data_map.token;
  const scriptsDir = "/scripts/providers/";

  const sendClickEvent = (feature) => {
    const ev = new CustomEvent('mapClick', { bubbles: true, detail: feature });
    document.dispatchEvent(ev);
  };

  const map = new mapboxgl.Map({
    container: data_map.target_id,
    style: `${scriptsDir}/style.json`,
    maxBounds: [
      [-129.409591, 31.134156], // Southwest coordinates
      [-110.131211, 42.900518] // Northeast coordinates
    ],
    dragRotate: false,
    pitchWithRotate: false
  });

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  let currentCounty;

  map.on("mousemove", "counties", (e) => {
    map.getCanvas().style.cursor = "pointer";

    popup.setLngLat(e.lngLat);

    var county = e.features[0].properties.county;
    var numProviders = e.features[0].properties.num_providers;
    var numProvidersString = numProviders + " transit provider";
    numProvidersString += (numProviders == 1) ? "" : "s";

    if (currentCounty != county) {
      popup.setHTML("<strong>" + county + "</strong><br />" + numProvidersString);
      if (!currentCounty && county) {
        popup.addTo(map);
      }
      currentCounty = county;
    }
  });

  map.on("mouseleave", "counties", () => {
    map.getCanvas().style.cursor = "default";
    currentCounty = null;
    popup.remove();
  });

  let clickCounty;

  map.on("click", "counties", (e) => {
    const feature = e.features[0];
    const county = feature.properties.county;

    if (clickCounty !== county) {
      clickCounty = county;
      sendClickEvent(feature);
    }
    else {
      clickCounty = null;
      sendClickEvent(null);
    }
  });

  map.on("load", () => {
    map.addSource("counties", {
      type: "geojson",
      data: data_map.data_file
    });

    map.fitBounds([
      [-125.409591, 31.534156], // Southwest coordinates
      [-114.131211, 42.509518] // Northeast coordinates
    ], {
      linear: true
    });

    // add additional style layers for the county data
    $.get(`${scriptsDir}/layers.json`, (data) => {
      data.forEach((element) => {
        element.layers.forEach((layer) => map.addLayer(layer, element.beforeId));
      });
    });
  });
});