// // import "assets/crime4.geojson"
// // import { Chart, registerables } from 'chart.js';
// // Chart.register(...registerables);

// @todo create some way using github lsv to ensure that as the crime database gets updated, we continue to have good data

const hm = new Map();

function readJson(cb, i) {

    fetch("http://127.0.0.1:5500/assets/crime" + i + ".geojson")
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then((json) => {
        cb(json,i);
    });
}

function construct(json, i) {
    // for (f of json.features) {
    //     mcpp = f.properties.mcpp;
    //     neighborhoods[mcpp] = neighborhoods[mcpp] + 1 || 1;
    // }
    
    // // Create items array
    // var items = Object.keys(neighborhoods).map(function(key) {
    //     return [key, neighborhoods[key]];
    // });
    
    // // Sort the array based on the second element
    // items.sort(function(first, second) {
    //     return second[1] - first[1];
    // });
    // m = 15
    // // Create a new array with only the first 5 items
    // let condensed = items.slice(0, m)
    
    // console.log(items.slice(m))
    
    // others = 0
    
    // for (i of items.slice(m)){
    //     others += i[1]
    // }
    // condensed.push(["others", others])
    // console.log(condensed)
    
    console.log("hour " + i +": " + json.features.length);

    hm.set(i, json.features.length)
    
    // const data = {
    //     labels: condensed.map(function (i) {return i[0]}),
    //     datasets: [
    //         {
    //             label: "My First Dataset",
    //             data: condensed.map(function (i) {return i[1]}),
    //             backgroundColor: [
    //                 "rgb(255, 99, 132)",
    //                 "rgb(54, 162, 235)",
    //                 "rgb(255, 205, 86)",
    //             ],
    //             hoverOffset: 4,
    //         },
    //     ],
    // };
    
    // const ctx = document.getElementById("myChart").getContext("2d");
    // const myChart = new Chart(ctx, {
    //     type: "doughnut",
    //     data: data,
    // });
}


let indexes = [];

for(let i = 0; i < 24; i++){
    indexes.push(i);
}

indexes.forEach(index => { 
    readJson(construct, index);
});

// console.log(hm);

// const hm2 = new Map([...hm.entries()].sort());
// console.log(hm2)

let hours = [25173,23908,21418,14254,12750,12286,20403,32438,41544,49625,54595,52588,59045,63868,56650,56422,52867,51993,47863,39349,40908,41398,35521,29778];

const ctx = document.getElementById('myChart').getContext('2d'); // content location
// // const config = {
// //     type: 'bar',
// //     data: {
// //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// //         datasets: [{
// //             label: '# of Votes',
// //             data: [12, 19, 3, 5, 2, 3],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },
// //     options: {
// //         scales: {
// //             y: {
// //                 beginAtZero: true
// //             }
// //         }
// //     }
// // };

// //const labels = Utils.months({count: 7});

// let strings = [];

// for(let i = 0; i < 24; i++){
//     strings.push("crime" + i + ".geojson");
// }

// let hours = [];

// console.log(hours);

// hours.forEach(hour => {
//     console.log(hour.get("features").length());
// });

// // let strings = "crime" + Array.from(Array(24).keys()) + ".geojson";

// console.log(strings);

let times = (Array.from(Array(24).keys()));
times.forEach(element => {
    element += ":00";
    // console.log(element)
});

console.log(hours);

const data = {
    labels: times,
    datasets: [{
        label: 'My First Dataset',
        data: hours,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data: data,
};

const myChart = new Chart(ctx, config);