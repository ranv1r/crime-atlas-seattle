offenses = {};
let myChart;

function readJson(hour, cb) {
  console.log("a")
  fetch(`https://ranv1r.github.io/crime-atlas-seattle/assets/crime${hour}.geojson`)
    .catch((e) => {
      console.log("b")
      alert(e);
    })
    .then((response) => {
      console.log("c")
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((json) => {
      console.log("d")
      cb(json);
    });
}

function construct(json) {
  console.log("downloaded")
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

  others = 0;

  for (i of items.slice(m)) {
    others += i[1];
  }
  condensed.push(["Other Offenses", others]);

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
          "#bb8107"
        ],
        hoverOffset: 4,
      },
    ],
  };

  const ctx = document.getElementById("myChart").getContext("2d");
  // myChart.clear()
  myChart = new Chart(ctx, {
    type: "doughnut",
    data: data,

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          displayColors: false,
          callbacks: {
            label: function (context) {
              var data = context.dataset.data,
                label = context.label,
                currentValue = context.raw,
                total = 0;

              for (var i = 0; i < data.length; i++) {
                total += data[i];
              }
              var percentage = parseFloat((currentValue / total * 100).toFixed(1));
              console.log(label)
              return "  " + label.split(" ")[0].split("/")[0].split("-")[0] + ' (' + percentage + '%)';
            }
          }
        },
        legend: {
          display: false
        },
      }
    }
  });
}

readJson(document.getElementById("slider").value, construct);
document.getElementById("slider").addEventListener("mouseup", (e) => {
  readJson(e.target.value, construct);
});
