mapboxgl.accessToken = data_map.token;

const sendClickEvent = (feature) => {
  const ev = new CustomEvent('mapClick',{ bubbles: true, detail: feature });
  document.dispatchEvent(ev);
};

var map = new mapboxgl.Map({
  container: data_map.target_id,
  style: "mapbox://styles/calitp-transit-store/ckew28dsq0c3n19qwlrozi3ts",
  maxBounds: [
    [-129.409591, 31.134156], // Southwest coordinates
    [-110.131211, 42.900518] // Northeast coordinates
  ],
  bounds: [
    [-125.409591, 31.534156], // Southwest coordinates
    [-114.131211, 42.509518] // Northeast coordinates
  ],
  dragRotate: false,
  pitchWithRotate: false
});

map.on("load", function () {
  map.addSource("counties", {
    type: "geojson",
    data: data_map.data_file
  });

  map.addLayer({
    id: "counties",
    type: "fill",
    source: "counties",
    paint: {
      "fill-color": [
        "interpolate", ["linear"],
        ["get", "num_providers"],
        1,
        "hsl(208, 36%, 78%)",
        20,
        "hsl(260, 53%, 36%)"
      ]
    }
  }, "place-label");

  map.addLayer({
    id: "county-lines",
    type: "line",
    source: "counties",
    paint: {
      "line-color": "#ffffff",
      "line-width": 1
    },
    layout: {
      "line-cap": "butt",
      "line-join": "round"
    }
  }, "place-label");

  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  var currentCounty;

  map.on("mousemove", "counties", function (e) {
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

  map.on("mouseleave", "counties", function () {
    map.getCanvas().style.cursor = "default";
    currentCounty = null;
    popup.remove();
  });

  var clickCounty;

  map.on("click", "counties", function (e) {
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
});
