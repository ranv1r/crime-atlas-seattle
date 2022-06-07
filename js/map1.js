mapboxgl.accessToken =
  "pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v10",
  zoom: 11,
  center: [-122.33278737553199, 47.60548243054508],
  //  parallels: [47.5, 48.7333], // Source: https://kingcounty.gov/services/gis/GISData/DataStandards.aspx
  //  projection: "lambertConformalConic",
});

const colors = [
  "interpolate",
  ["linear"],
  ["heatmap-density"],
  0,
  "rgba(0,104,55,0)",
  0.1,
  "rgb(26,152,80)",
  0.2,
  "rgb(102,189,99)",
  0.3,
  "rgb(166,217,106)",
  0.4,
  "rgb(217,239,139)",
  0.5,
  "rgb(254,224,139)",
  0.6,
  "rgb(253,174,97)",
  0.7,
  "rgb(244,109,67)",
  0.8,
  "rgb(215,48,39)",
  0.9,
  "rgb(165,0,38)",
];

const legend_color = [
  "rgba(0,104,55,0)",
  "rgb(26,152,80)",
  "rgb(102,189,99)",
  "rgb(166,217,106)",
  "rgb(217,239,139)",
  "rgb(254,224,139)",
  "rgb(253,174,97)",
  "rgb(244,109,67)",
  "rgb(215,48,39)",
  "rgb(165,0,38)",
];

const legend = document.getElementById("legend");
legend.innerHTML = "<b>Crime Heat Intensity</b><br>";

const item = document.createElement("span");
item.innerHTML = "Low";
legend.appendChild(item);

legend_color.forEach((c, i) => {
  const item = document.createElement("span");
  item.className = "legend-key";
  item.style.backgroundColor = c;
  legend.appendChild(item);
});

const item_last = document.createElement("span");
item_last.innerHTML = "High";
legend.appendChild(item_last);

const opacity_circle = {
  stops: [
    [14, 0],
    [15, 1],
  ],
};

const opacity_heatmap = {
  default: 1,
  stops: [
    [14, 1],
    [15, 0],
  ],
};

const radius_heatmap = {
  stops: [
    [10, 11],
    [15, 20],
  ],
};

const intensity_heatmap = {
  stops: [
    [11, 0.03],
    [15, 0.2],
  ],
};

map.on("load", function loadingData() {
  for (const i of Array(24).keys()) {
    // Make the 4AM layer visible by default.
    const visibility = i == 4 ? "visible" : "none";
    map.addSource(`crimes_${i}`, {
      type: "geojson",
      data: `assets/crime${i}.geojson`,
    });

    map.addLayer({
      id: `crimes-circle-layer-${i}`,
      type: "circle",
      source: `crimes_${i}`,
      minzoom: 14,
      layout: {
        visibility: visibility,
      },
      paint: {
        "circle-radius": 5,
        "circle-color": "green",
        "circle-opacity": opacity_circle,
      },
    });

    map.addLayer(
      {
        id: `crimes-heat-layer-${i}`,
        type: "heatmap",
        source: `crimes_${i}`,
        layout: {
          visibility: visibility,
        },
        minzoom: 10,
        maxzoom: 15,
        paint: {
          "heatmap-intensity": intensity_heatmap,
          "heatmap-color": colors,
          "heatmap-radius": radius_heatmap,
          "heatmap-opacity": opacity_heatmap,
        },
      },
      "waterway-label"
    );
  }
});

// Add popup to each crime
for (const i of Array(24).keys()) {
  map.on("click", `crimes-circle-layer-${i}`, (event) => {
    new mapboxgl.Popup()
      .setLngLat(event.features[0].geometry.coordinates)
      .setHTML(
        `<strong>Crime Type:</strong> ${event.features[0].properties.offense_type}`
      )
      .addTo(map);
  });
}

map.on("idle", () => {
  document.getElementById("slider").addEventListener("input", (e) => {
    for (const i of Array(24).keys()) {
      const v = i == e.target.value ? "visible" : "none";
      map.setLayoutProperty(`crimes-circle-layer-${i}`, "visibility", v);
      map.setLayoutProperty(`crimes-heat-layer-${i}`, "visibility", v);
    }
    const hour_12hrformat = format_hour(e.target.value);
    const date = new Date();
    date.setHours(e.target.value);

    document.getElementById("active-hour").innerText = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  });
});
