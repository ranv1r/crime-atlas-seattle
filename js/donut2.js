offenses = {};

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

  // Create items array for example [["CAPITOL HILL", 1000], ["QUEEN ANNE", 3000]]
  var items = Object.keys(offenses).map(function (key) {
    return [key, offenses[key]];
  });

  // Sort the array based on the second element in descending order of neighbordhood crime frequency
  items.sort(function (first, second) {
    return second[1] - first[1];
  });

  // m = 7

  // // Create a new array with only the first m items
  // let condensed = items.slice(0, m)

  // console.log(items.slice(m))

  // others = 0

  // for (i of items.slice(m)){
  //   others += i[1]
  // }

  // condensed.push(["others", others])

  // console.log(condensed)

  // set the dimensions and margins of the graph
  var margin = { top: 100, right: 0, bottom: 0, left: 0 },
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    innerRadius = 90,
    outerRadius = Math.min(width, height) / 2; // the outerRadius goes from the middle of the SVG area to the border

  // append the svg object
  var svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr(
      "transform",
      "translate(" +
        (width / 2 + margin.left) +
        "," +
        (height / 2 + margin.top) +
        ")"
    );

  // Scales
  var x = d3
    .scaleBand()
    .range([0, 2 * Math.PI]) // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
    .align(0) // This does nothing
    .domain(
      items.map(function (d) {
        return d[0];
      })
    ); // The domain of the X axis is the list of states.
  var y = d3
    .scaleRadial()
    .range([innerRadius, outerRadius]) // Domain will be define later.
    .domain([0, 1500]); // Domain of Y is from 0 to the max seen in the data

  // Add the bars
  svg
    .append("g")
    .selectAll("path")
    .data(items)
    .enter()
    .append("path")
    .attr("fill", "#69b3a2")
    .attr("id", function(d, i) { return `${d[0]}-path`; })
    .attr(
      "d",
      d3
        .arc() // imagine your doing a part of a donut plot
        .innerRadius(innerRadius)
        .outerRadius(function (d) {
          return y(d[1]);
        })
        .startAngle(function (d) {
          return x(d[0]);
        })
        .endAngle(function (d) {
          return x(d[0]) + x.bandwidth();
        })
        .padAngle(0.01)
        .padRadius(innerRadius)
    )
    .on("mouseover", function (d, i) {
      d3.select(this).transition().duration("50").attr("opacity", ".85");
    })
    .on("mouseout", function (d, i) {
      d3.select(this).transition().duration("50").attr("opacity", "1");
    });

  // Add the labels
  svg
    .append("g")
    .selectAll("g")
    .data(items)
    .enter()
    .append("g")
    .attr("text-anchor", function (d) {
      return (x(d[0]) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI
        ? "end"
        : "start";
    })
    .attr("transform", function (d) {
      return (
        "rotate(" +
        (((x(d[0]) + x.bandwidth() / 2) * 180) / Math.PI - 90) +
        ")" +
        "translate(" +
        (y(d[1]) + 10) +
        ",0)"
      );
    })
    .append("text")
    .text(function (d) {
      return `${d[0]}`.split("/")[0] + ` (${d[1]})`;
    })
    .attr("transform", function (d) {
      return (x(d[0]) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI
        ? "rotate(180)"
        : "rotate(0)";
    })
    .style("font-size", "6px")
    .style("font-family", "'Montserrat', sans-serif")
    .attr("alignment-baseline", "middle");
}

readJson(construct);
