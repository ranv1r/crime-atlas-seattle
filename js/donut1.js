function readJson(hour, cb) {
  fetch(
    `https://ranv1r.github.io/crime-atlas-seattle/assets/crime${hour}.geojson`
  )
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
  // Remove Figure and add new one
  d3.select("#donut-neighborhood > svg").remove();
  // Remove old tooltip div
  d3.select("#donut-neighborhood > div").remove();
  colorScale1 = d3.scaleSequential()
    .domain([0, 29])
    .interpolator(d3.interpolate("rgb(165,0,38)", "rgb(254,224,139)"))
  colorScale2 = d3.scaleSequential()
    .domain([29, 58])
    .interpolator(d3.interpolate("rgb(254,224,139)", "rgb(26,152,80)"))
  colorScale = (d) => { return d > 29 ? colorScale2(d) : colorScale1(d) }
  neighborhoods = {};
  for (f of json.features) {
    mcpp = f.properties.mcpp;
    neighborhoods[mcpp] = neighborhoods[mcpp] + 1 || 1;
  }

  // Create items array for example [["CAPITOL HILL", 1000], ["QUEEN ANNE", 3000]]
  var items = Object.keys(neighborhoods).map(function (key) {
    return [key, neighborhoods[key]];
  });

  // Sort the array based on the second element in descending order of neighbordhood crime frequency
  items.sort(function (first, second) {
    return second[1] - first[1];
  });

  var margin = { top: 100, right: 0, bottom: 0, left: 0 },
    width = 335 - margin.left - margin.right,
    height = 235 - margin.top - margin.bottom,
    innerRadius = 50,
    outerRadius = width * 0.5; // the outerRadius goes from the middle of the SVG area to the border

  // append the svg object
  var svg = d3
    .select("#donut-neighborhood")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr(
      "transform",
      "translate(" +
      (width / 2 + margin.left) +
      "," +
      ((height / 2 + margin.top) - 30) +
      ")"
    );

  // Tooltip
  var Tooltip = d3
    .select("#donut-neighborhood")
    .append("div")
    .attr("id", "donut-neighborhood-tooltip")

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
    .domain([0, 5500]); // Domain of Y is from 0 to the max seen in the data

  // Add the bars
  const filterInput = document.getElementById('filter-input');
  const filterInputfly = document.getElementById('filter-input-fly');
  svg
    .append("g")
    .selectAll("path")
    .data(items)
    .enter()
    .append("path")
    .attr("fill", function (d, i) {
      console.log(colorScale)
      return colorScale(i);
    })
    .attr("id", function (d, i) {
      return `${d[0]}-path`;
    })
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
    .on("click", function (d, i) {
      filterInputfly.value = d[0];
      filterInputfly.dispatchEvent(new Event("input"))
    })
    .on("mouseover", function (d, i) {
      filterInput.value = d[0];
      filterInput.dispatchEvent(new Event("input"))
      d3.select(this).transition().duration("50").attr("opacity", ".85").style("cursor", "pointer");
      Tooltip.style("opacity", 1);
    })
    .on("mousemove", function (d, i) {
      Tooltip.html(`<span id="donut-neighborhood-tooltip-text">${d[0]}</span>`)
        .style("left", d3.mouse(this)[0] + "px")
        .style("top", d3.mouse(this)[1] - 180 + "px");
    })
    .on("mouseout", function (d, i) {
      filterInput.value = "";
      filterInput.dispatchEvent(new Event("input"))
      d3.select(this).transition().duration("50").attr("opacity", "1");
      Tooltip.style("opacity", 0);
    });

  // Add the labels
  // svg
  //   .append("g")
  //   .selectAll("g")
  //   .data(items)
  //   .enter()
  //   .append("g")
  //   .attr("text-anchor", function (d) {
  //     return (x(d[0]) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI
  //       ? "end"
  //       : "start";
  //   })
  //   .attr("transform", function (d) {
  //     return (
  //       "rotate(" +
  //       (((x(d[0]) + x.bandwidth() / 2) * 180) / Math.PI - 90) +
  //       ")" +
  //       "translate(" +
  //       (y(d[1]) + 10) +
  //       ",0)"
  //     );
  //   })
  //   .append("text")
  //   .text(function (d) {
  //     return `${d[0]}`.split("/")[0] + ` (${d[1]})`;
  //   })
  //   .attr("transform", function (d) {
  //     return (x(d[0]) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI
  //       ? "rotate(180)"
  //       : "rotate(0)";
  //   })
  //   .style("font-size", "6px")
  //   .style("font-family", "'Montserrat', sans-serif")
  //   .attr("alignment-baseline", "middle");
}
readJson(document.getElementById("slider").value, construct);
document.getElementById("slider").addEventListener("mouseup", (e) => {
  readJson(e.target.value, construct);
});
