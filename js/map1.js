mapboxgl.accessToken =
  "pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v10",
  zoom: 11,
  center: [-122.33278737553199, 47.60548243054508],
  parallels: [47.5, 48.7333], // Source: https://kingcounty.gov/services/gis/GISData/DataStandards.aspx
  projection: "lambertConformalConic",
});
const grades = [0, 40, 70, 120];
const colors = [
  "rgb(255,255,178)",
  "rgb(254,204,92)",
  "rgb(253,141,60)",
  "rgb(227,26,28)",
];

map.on("load", function loadingData() {
  map.addSource("crimes", {
    type: "geojson",
    data: "assets/crime4.geojson",
  });

  map.addLayer(
    {
      id: "crimes-layer",
      type: "heatmap",
      source: "crimes",
      maxzoom: 10,
      paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        "heatmap-weight": {
          property: "dbh",
          type: "exponential",
          stops: [
            [1, 0],
            [62, 1],
          ],
        },
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        // "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, 9, 3],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        "heatmap-color": [
          "interpolate",
          ["linear"],
          ["heatmap-density"],
          0,
          "rgba(0, 0, 255, 0)",
          0.1,
          "#ffffb2",
          0.3,
          "#feb24c",
          0.5,
          "#fd8d3c",
          0.7,
          "#fc4e2a",
          1,
          "#e31a1c",
        ],
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 20],
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, 9, 0],
      },
    },
    "waterway-label"
  );
});

// legend

// const legend = document.getElementById("legend");
// legend.innerHTML = "<b>COVID Rates<br>(cases/population)</b><br><br>";

// grades.forEach((grade, i) => {
//   const color = colors[i];
//   const item = document.createElement("div");
//   const key = document.createElement("span");
//   key.className = "legend-key";
//   key.style.backgroundColor = color;

//   const value = document.createElement("span");
//   value.innerHTML = `${grade} - ${grades[i + 1] || 1000}`;
//   item.appendChild(key);
//   item.appendChild(value);
//   legend.appendChild(item);
// });

// dynamic

// map.on("mousemove", ({ point }) => {
//   const state = map.queryRenderedFeatures(point, {
//     layers: ["rates-layer"],
//   });
//   document.getElementById("text-description").innerHTML = state.length
//     ? `<h3>County: ${state[0].properties.county}</h3><h3>State: ${state[0].properties.state}</h3><p><strong><em>${state[0].properties.rates}</strong> cases per 1000 residents</em></p>`
//     : `<p>Hover over a county!</p>`;
// });
