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
  'interpolate',
  ['linear'],
  ['heatmap-density'],
  0,
  'rgba(0,104,55,0)',
  0.1,
  'rgb(26,152,80)',
  0.2,
  'rgb(102,189,99)',
  0.3,
  'rgb(166,217,106)',
  0.4,
  'rgb(217,239,139)',
  0.5,
  'rgb(254,224,139)',
  0.6,
  'rgb(253,174,97)',
  0.7,
  'rgb(244,109,67)',
  0.8,
  'rgb(215,48,39)',
  0.9,
  'rgb(165,0,38)',
];


const opacity_circle = {stops:[
  [14,0],
  [15,1]
     ]};

const opacity_heatmap = {default:1, stops:[
  [14,1],
  [15,0]
]};

const radius_heatmap = {
  stops:[
    [10,11],
    [15,20]
    ]};

const intensity_heatmap = {
  stops:[
    [11,0.03],
    [15,0.2]
  ]
};

map.on("load", function loadingData() {
  map.addSource("crimes_4", {
    type: "geojson",
    data: "assets/crime4.geojson",
  });

  map.addSource("crimes_0", {
    type: "geojson",
    data: "assets/crime0.geojson",
  });

  map.addSource("crimes_1", {
    type: "geojson",
    data: "assets/crime1.geojson",
  });

  map.addSource("crimes_2", {
    type: "geojson",
    data: "assets/crime2.geojson",
  });

  map.addSource("crimes_3", {
    type: "geojson",
    data: "assets/crime3.geojson",
  });

  map.addSource("crimes_5", {
    type: "geojson",
    data: "assets/crime5.geojson",
  });

  map.addSource("crimes_6", {
    type: "geojson",
    data: "assets/crime6.geojson",
  });

  map.addSource("crimes_7", {
    type: "geojson",
    data: "assets/crime7.geojson",
  });

  map.addSource("crimes_8", {
    type: "geojson",
    data: "assets/crime8.geojson",
  });

  map.addSource("crimes_9", {
    type: "geojson",
    data: "assets/crime9.geojson",
  });

  map.addSource("crimes_10", {
    type: "geojson",
    data: "assets/crime10.geojson",
  });

  map.addSource("crimes_11", {
    type: "geojson",
    data: "assets/crime11.geojson",
  });

  map.addSource("crimes_12", {
    type: "geojson",
    data: "assets/crime12.geojson",
  });

  map.addSource("crimes_13", {
    type: "geojson",
    data: "assets/crime13.geojson",
  });

  map.addSource("crimes_14", {
    type: "geojson",
    data: "assets/crime14.geojson",
  });

  map.addSource("crimes_15", {
    type: "geojson",
    data: "assets/crime15.geojson",
  });

  map.addSource("crimes_16", {
    type: "geojson",
    data: "assets/crime16.geojson",
  });

  map.addSource("crimes_17", {
    type: "geojson",
    data: "assets/crime17.geojson",
  });
  
  map.addSource("crimes_18", {
    type: "geojson",
    data: "assets/crime18.geojson",
  });

  map.addSource("crimes_19", {
    type: "geojson",
    data: "assets/crime19.geojson",
  });

  map.addSource("crimes_20", {
    type: "geojson",
    data: "assets/crime20.geojson",
  });

  map.addSource("crimes_21", {
    type: "geojson",
    data: "assets/crime21.geojson",
  });

  map.addSource("crimes_22", {
    type: "geojson",
    data: "assets/crime22.geojson",
  });

  map.addSource("crimes_23", {
    type: "geojson",
    data: "assets/crime23.geojson",
  });

  map.addLayer(
    {
      id: "crimes-circle-layer-4",
      type:"circle",
      source:"crimes_4",
      minzoom:14,
      'layout': {
        // Make the 4AM layer visible by default.
        'visibility': 'visible'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-0",
      type:"circle",
      source:"crimes_0",
      minzoom:14,
      'layout': {
        // Make the layer'none, and subject to change.
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-1",
      type:"circle",
      source:"crimes_1",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-2",
      type:"circle",
      source:"crimes_2",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-3",
      type:"circle",
      source:"crimes_3",
      minzoom:14,
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-5",
      type:"circle",
      source:"crimes_5",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-6",
      type:"circle",
      source:"crimes_6",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-7",
      type:"circle",
      source:"crimes_7",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-8",
      type:"circle",
      source:"crimes_8",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-9",
      type:"circle",
      source:"crimes_9",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-10",
      type:"circle",
      source:"crimes_10",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-11",
      type:"circle",
      source:"crimes_11",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-12",
      type:"circle",
      source:"crimes_12",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-13",
      type:"circle",
      source:"crimes_13",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-14",
      type:"circle",
      source:"crimes_14",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-15",
      type:"circle",
      source:"crimes_15",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-16",
      type:"circle",
      source:"crimes_16",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-17",
      type:"circle",
      source:"crimes_17",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-18",
      type:"circle",
      source:"crimes_18",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-19",
      type:"circle",
      source:"crimes_19",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-20",
      type:"circle",
      source:"crimes_20",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-21",
      type:"circle",
      source:"crimes_21",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-22",
      type:"circle",
      source:"crimes_22",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-23",
      type:"circle",
      source:"crimes_23",
      minzoom:14,
      'layout': {
        'visibility': 'none'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',

             "circle-opacity":opacity_circle

              }
    }
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-4",
      type: "heatmap",
      source: "crimes_4",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'visible'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-0",
      type: "heatmap",
      source: "crimes_0",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-1",
      type: "heatmap",
      source: "crimes_1",
      'layout': {
        // Make the layer'none.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point, so no need to set the "heatmap-weight"
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-2",
      type: "heatmap",
      source: "crimes_2",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-3",
      type: "heatmap",
      source: "crimes_3",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-5",
      type: "heatmap",
      source: "crimes_5",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-6",
      type: "heatmap",
      source: "crimes_6",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-7",
      type: "heatmap",
      source: "crimes_7",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-8",
      type: "heatmap",
      source: "crimes_8",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-9",
      type: "heatmap",
      source: "crimes_9",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-10",
      type: "heatmap",
      source: "crimes_10",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-11",
      type: "heatmap",
      source: "crimes_11",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-12",
      type: "heatmap",
      source: "crimes_12",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-13",
      type: "heatmap",
      source: "crimes_13",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-14",
      type: "heatmap",
      source: "crimes_14",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-15",
      type: "heatmap",
      source: "crimes_15",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-16",
      type: "heatmap",
      source: "crimes_16",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-17",
      type: "heatmap",
      source: "crimes_17",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-18",
      type: "heatmap",
      source: "crimes_18",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-19",
      type: "heatmap",
      source: "crimes_19",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-20",
      type: "heatmap",
      source: "crimes_20",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-21",
      type: "heatmap",
      source: "crimes_21",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-22",
      type: "heatmap",
      source: "crimes_22",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-23",
      type: "heatmap",
      source: "crimes_23",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'none'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  

        "heatmap-intensity": intensity_heatmap,
        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": radius_heatmap,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": opacity_heatmap

      },
    },
    "waterway-label"
  );
});

  map.on('idle',() => {
  document.getElementById('slider').addEventListener('input',(event) => {

    const hour = parseInt(event.target.value);
    let str_hour=hour.toString();
    let heatmap_id = 'crimes-heat-layer-'.concat(str_hour);
    let circlemap_id ='crimes-circle-layer-'.concat(str_hour);
    for (let i =0; i<24; i++) {
      if (i==hour) {map.setLayoutProperty(heatmap_id, 'visibility', 'visible');
                    map.setLayoutProperty(circlemap_id,'visibility','visible');
                   } else {let string_hour=i.toString();
                           let hmap_id='crimes-heat-layer-'.concat(string_hour);
                           let cmap_id='crimes-circle-layer-'.concat(string_hour);
                           map.setLayoutProperty(hmap_id, 'visibility', 'none');
                           map.setLayoutProperty(cmap_id,'visibility','none')}
                          }
    document.getElementById('active-hour').innerText = hour;
  })
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
