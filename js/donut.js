neighborhoods = {};

function readJson(cb) {
  fetch("http://127.0.0.1:5500/assets/crime4.geojson")
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
    mcpp = f.properties.mcpp;
    neighborhoods[mcpp] = neighborhoods[mcpp] + 1 || 1;
  }
  
  // Create items array
  var items = Object.keys(neighborhoods).map(function(key) {
    return [key, neighborhoods[key]];
  });
  
  // Sort the array based on the second element
  items.sort(function(first, second) {
    return second[1] - first[1];
  });
  m = 15
  // Create a new array with only the first 5 items
  let condensed = items.slice(0, m)

  console.log(items.slice(m))
  
  others = 0

  for (i of items.slice(m)){
    others += i[1]
  }
  condensed.push(["others", others])
  console.log(condensed)

  const data = {
    labels: condensed.map(function (i) {return i[0]}),
    datasets: [
      {
        label: "My First Dataset",
        data: condensed.map(function (i) {return i[1]}),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
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
