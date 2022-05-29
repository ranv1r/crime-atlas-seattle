offenses = { };

function readJson(cb) {
  fetch("https://ranv1r.github.io/crime-atlas-seattle/assets/crime4.geojson")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((json) => {
      cb(json);
    });
}

function construct(json) {
  for (f of json.features) {
    offense_type = f.properties.offense_type;
    offenses[offense_type] = offenses[offense_type] + 1 || 1;
  }

  // Create items array
  var items = Object.keys(offenses).map(function (key) {
    return [key, offenses[key]];
  });

  // Sort the array based on the second element
  items.sort(function (first, second) {
    return second[1] - first[1];
  });
  m = 5;
  // Create a new array with only the first 5 items
  let condensed = items.slice(0, m);

  console.log(items.slice(m));

  others = 0;

  for (i of items.slice(m)) {
    others += i[1];
  }
  condensed.push(["Other Offenses", others]);
  console.log(condensed);

  const data = {
    labels: condensed.map(function (i) {
      return i[0];
    }),
    datasets: [
      {
        label: "My First Dataset",
        data: condensed.map(function (i) {
          return i[1];
        }),
        backgroundColor: [
          "rgb(127,201,127)",
          "rgb(190,174,212)",
          "rgb(253,192,134)",
          "rgb(255,255,153)",
          "rgb(56,108,176)",
          "rgb(240,2,127)",
          "rgb(191,91,23)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
  });
}

readJson(construct);
