mapboxgl.accessToken =
  "pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v10",
  zoom: 10.5,
  center: [-122.33278737553199, 47.60548243054508],
  //  parallels: [47.5, 48.7333], // Source: https://kingcounty.gov/services/gis/GISData/DataStandards.aspx
  //  projection: "lambertConformalConic",
});

map.addControl(new mapboxgl.NavigationControl());

const filterGroup = document.getElementById('filter-group');
const types_of_crime = [
  "DESTRUCTION/DAMAGE/VANDALISM OF PROPERTY",
  "DRIVING UNDER THE INFLUENCE",
  "LARCENY-THEFT",
  "DRUG/NARCOTIC OFFENSES",
  "ASSAULT OFFENSES"
];

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
  const mcpp = {
    "ALASKA JUNCTION": 321,
    ALKI: 322,
    "BALLARD NORTH": 323,
    "BALLARD SOUTH": 324,
    BELLTOWN: 325,
    BITTERLAKE: 326,
    "BRIGHTON/DUNLAP": 327,
    "CENTRAL AREA/SQUIRE PARK": 328,
    "CLAREMONT/RAINIER VISTA": 329,
    "COLUMBIA CITY": 330,
    "EASTLAKE - EAST": 331,
    "EASTLAKE - WEST": 332,
    "COMMERCIAL DUWAMISH": 333,
    "COMMERCIAL HARBOR ISLAND": 334,
    "DOWNTOWN COMMERCIAL": 335,
    "HILLMAN CITY": 336,
    "FAUNTLEROY SW": 337,
    "FIRST HILL": 338,
    FREMONT: 339,
    GENESEE: 340,
    "HIGH POINT": 341,
    MORGAN: 342,
    GEORGETOWN: 343,
    GREENWOOD: 344,
    "HIGHLAND PARK": 345,
    LAKECITY: 346,
    "LAKEWOOD/SEWARD PARK": 347,
    "MOUNT BAKER": 348,
    "MADISON PARK": 349,
    MAGNOLIA: 350,
    "MONTLAKE/PORTAGE BAY": 351,
    "MID BEACON HILL": 352,
    "MILLER PARK": 353,
    "NEW HOLLY": 354,
    "NORTH ADMIRAL": 355,
    "QUEEN ANNE": 356,
    "NORTH BEACON HILL": 357,
    "RAINIER BEACH": 358,
    "NORTH DELRIDGE": 359,
    UNIVERSITY: 360,
    NORTHGATE: 361,
    SODO: 362,
    "PHINNEY RIDGE": 363,
    "PIGEON POINT": 364,
    "PIONEER SQUARE": 365,
    "RAINIER VIEW": 366,
    "ROOSEVELT/RAVENNA": 367,
    "ROXHILL/WESTWOOD/ARBOR HEIGHTS": 368,
    SANDPOINT: 369,
    "SLU/CASCADE": 370,
    "SOUTH BEACON HILL": 371,
    "SOUTH PARK": 372,
    WALLINGFORD: 373,
    "SOUTH DELRIDGE": 374,
    "CAPITOL HILL": 375,
    "LESCHI/MADRONA": 376,
    "JUDKINS PARK/NORTH BEACON HILL": 377,
    "INTERNATIONAL DISTRICT": 378,
  };
  map.addSource(`mcpp`, {
    type: "geojson",
    data: `assets/mcpp.geojson`,
  });

  for (const [m, i] of Object.entries(mcpp)) {
    // Add a layer for this symbol type if it hasn't been added already.
    map.addLayer({
      id: `mcpp-${i}`,
      type: "fill",
      source: "mcpp", // reference the data source
      layout: { visibility: "none" },
      paint: {
        "fill-color": `#07BBBB`, // blue color fill
        "fill-opacity": 0.5,
      },
      filter: ["==", "NEIGHBORHOOD", m],
    });

    map.addLayer({
      id: `mcpp-${i}-outline`,
      type: "line",
      source: "mcpp",
      layout: { visibility: "none" },
      paint: {
        "line-color": "#000",
        "line-width": 3,
      },
      filter: ["==", "NEIGHBORHOOD", m],
    });
  }
  const filterInput = document.getElementById("filter-input");
  const filterInputFly = document.getElementById("filter-input-fly");
  filterInput.addEventListener("input", (e) => {
    // If the input value matches a layerID set
    // it's visibility to 'visible' or else hide it.
    for (const [m, i] of Object.entries(mcpp)) {
      map.setLayoutProperty(
        `mcpp-${i}`,
        "visibility",
        e.target.value == m ? "visible" : "none"
      );

      map.setLayoutProperty(
        `mcpp-${i}-outline`,
        "visibility",
        e.target.value == m ? "visible" : "none"
      );
    }
  });

  filterInputFly.addEventListener("input", (e) => {
    // If the input value matches a layerID set
    // it's visibility to 'visible' or else hide it.
    a = map.querySourceFeatures('mcpp', {
      sourceLayer: `mcpp-${mcpp[e.target.value]}`,
      filter: ["==", "NEIGHBORHOOD", e.target.value]
    });
    console.log(a[0].geometry.coordinates[0][0])
    map.flyTo({
      center: a[0].geometry.coordinates[0][0],
      zoom: 12,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  for (const i of Array(24).keys()) {
    // Make the 4AM layer visible by default.
    const visibility = i == 4 ? "visible" : "none";
    map.addSource(`crimes_${i}`, {
      type: "geojson",
      data: `assets/crime${i}.geojson`,
      buffer: 0,
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
        maxzoom: 14.5,
        paint: {
          "heatmap-intensity": intensity_heatmap,
          "heatmap-color": colors,
          "heatmap-radius": radius_heatmap,
          "heatmap-opacity": opacity_heatmap,
        },
      },
      "waterway-label"
    );
  };

  // Add switcher for type of crimes
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'radio_crime_type'
  input.id = 'radio_all';
  input.checked = 'checked';
  input.value = 'all';
  filterGroup.appendChild(input);

  const label = document.createElement('label');
  label.setAttribute('for', 'radio_all');
  label.textContent = "ALL";
  filterGroup.appendChild(label);



  for (crime_type of types_of_crime) {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'radio_crime_type';
    input.id = `radio_${crime_type}`;

    input.value = crime_type;
    filterGroup.appendChild(input);

    const label = document.createElement('label');
    label.setAttribute('for', `radio_${crime_type}`);
    if (crime_type == "DESTRUCTION/DAMAGE/VANDALISM OF PROPERTY") { label.textContent = "DESTRUCTION/ DAMAGE/ VANDALISM OF PROPERTY" } else {
      label.textContent = crime_type
    };
    filterGroup.appendChild(label);
  };



});

// Add popup to each crime poi
for (const i of Array(24).keys()) {
  map.on("click", `crimes-circle-layer-${i}`, (event) => {
    new mapboxgl.Popup()
      .setLngLat(event.features[0].geometry.coordinates)
      .setHTML(
        `<strong>Crime Type:</strong> ${event.features[0].properties.offense_type} <br> <strong>Precinct:</strong>${event.features[0].properties.mcpp}`
      )
      .addTo(map);
  });
}

document.getElementById("filter-group").addEventListener('change', (event) => {
  h_ampm = document.getElementById('active-hour').innerText;
  hrs = h_ampm.slice(0, -3);
  ampm = h_ampm.slice(-2);
  if (ampm == "AM") { if (hrs == "12") { h_24hr = '0' } else { h_24hr = hrs } } else { if (hrs == "12") { h_24hr = '12' } else { h_24hr = (12 + Number(hrs)).toString() } }

  const tp = event.target.value;
  if (tp == 'all') { map.setFilter('crimes-circle-layer-' + h_24hr, null) };
  for (crime_type of types_of_crime) {
    if (tp == crime_type) {
      map.setFilter(`crimes-circle-layer-${h_24hr}`, null);
      map.setFilter(`crimes-circle-layer-${h_24hr}`, ["==", 'offense_type', crime_type]);
    }
  }
})

map.on("idle", () => {
  document.getElementById("slider").addEventListener("mouseup", (e) => {
    document.getElementById('radio_all').checked = true;
    for (const i of Array(24).keys()) {
      const v = i == e.target.value ? "visible" : "none";
      map.setLayoutProperty(`crimes-circle-layer-${i}`, "visibility", v);
      map.setLayoutProperty(`crimes-heat-layer-${i}`, "visibility", v);
    }
    const date = new Date();
    date.setHours(e.target.value);
    document.getElementById("active-hour").innerText = date.toLocaleString(
      "en-US",
      { hour: "numeric", hour12: true }
    );
  });
  document.getElementById("enlarge-text").addEventListener("click", (e) => {
    map.setZoom(16)
  })
});
