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
  'rgba(236,222,239,0)',
  0.1,
  'rgb(204,236,230)',
  0.2,
  'rgb(153,216,201)',
  0.3,
  'rgb(102,194,164)',
  0.4,
  'rgb(65,174,118)',
  0.6,
  'rgb(35,139,69)',
  0.75,
  'rgb(0,109,44)',
  0.9,
  'rgb(0,68,27)',
];

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
      id: "crimes-circle-layer-four",
      type:"circle",
      source:"crimes_4",
      minzoom:14,
      'layout': {
        // Make the 4AM layer visible by default.
        'visibility': 'visible'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-zero",
      type:"circle",
      source:"crimes_0",
      minzoom:14,
      'layout': {
        // Make the layer hidden, and subject to change.
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-one",
      type:"circle",
      source:"crimes_1",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-two",
      type:"circle",
      source:"crimes_2",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-three",
      type:"circle",
      source:"crimes_3",
      minzoom:14,
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-five",
      type:"circle",
      source:"crimes_5",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-six",
      type:"circle",
      source:"crimes_6",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-seven",
      type:"circle",
      source:"crimes_7",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-eight",
      type:"circle",
      source:"crimes_8",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-nine",
      type:"circle",
      source:"crimes_9",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-ten",
      type:"circle",
      source:"crimes_10",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-eleven",
      type:"circle",
      source:"crimes_11",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-twelve",
      type:"circle",
      source:"crimes_12",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-thirteen",
      type:"circle",
      source:"crimes_13",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-fourteen",
      type:"circle",
      source:"crimes_14",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-fifteen",
      type:"circle",
      source:"crimes_15",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-sixteen",
      type:"circle",
      source:"crimes_16",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-seventeen",
      type:"circle",
      source:"crimes_17",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-eighteen",
      type:"circle",
      source:"crimes_18",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-nineteen",
      type:"circle",
      source:"crimes_19",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-twenty",
      type:"circle",
      source:"crimes_20",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-twenty-one",
      type:"circle",
      source:"crimes_21",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-twenty-two",
      type:"circle",
      source:"crimes_22",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-circle-layer-twenty-three",
      type:"circle",
      source:"crimes_23",
      minzoom:14,
      'layout': {
        'visibility': 'hidden'
        },
      paint:{"circle-radius":5,
             "circle-color":'green',
             "circle-opacity":{stops:[
                              [14,0],
                              [15,1]
                                 ]}
              }
    }
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-four",
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
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-zero",
      type: "heatmap",
      source: "crimes_0",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-one",
      type: "heatmap",
      source: "crimes_1",
      'layout': {
        // Make the layer hidden.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point, so no need to set the "heatmap-weight"
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-two",
      type: "heatmap",
      source: "crimes_2",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-three",
      type: "heatmap",
      source: "crimes_3",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-five",
      type: "heatmap",
      source: "crimes_5",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-six",
      type: "heatmap",
      source: "crimes_6",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-seven",
      type: "heatmap",
      source: "crimes_7",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-eight",
      type: "heatmap",
      source: "crimes_8",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-nine",
      type: "heatmap",
      source: "crimes_9",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-ten",
      type: "heatmap",
      source: "crimes_10",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-eleven",
      type: "heatmap",
      source: "crimes_11",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-twelve",
      type: "heatmap",
      source: "crimes_12",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-thirteen",
      type: "heatmap",
      source: "crimes_13",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-fourteen",
      type: "heatmap",
      source: "crimes_14",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-fifteen",
      type: "heatmap",
      source: "crimes_15",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-sixteen",
      type: "heatmap",
      source: "crimes_16",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-seventeen",
      type: "heatmap",
      source: "crimes_17",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-eighteen",
      type: "heatmap",
      source: "crimes_18",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-nineteen",
      type: "heatmap",
      source: "crimes_19",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-twenty",
      type: "heatmap",
      source: "crimes_20",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-twenty-one",
      type: "heatmap",
      source: "crimes_21",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-twenty-two",
      type: "heatmap",
      source: "crimes_22",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
      },
    },
    "waterway-label"
  );

  map.addLayer(
    {
      id: "crimes-heat-layer-twenty-three",
      type: "heatmap",
      source: "crimes_23",
      'layout': {
        // Make the layer visible by default.
        'visibility': 'hidden'
        },
      minzoom:10,
      maxzoom: 15,
      paint: {
        // we do not differentiate the weight of each point
  
        "heatmap-intensity": {
          stops:[
            [11,1],
            [15,5]
          ]
        },

        'heatmap-color': colors,
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": {
          stops:[
            [10,11],
            [15,20]
            ]},
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": {default:1, stops:[
          [14,1],
          [15,0]
        ]}
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
