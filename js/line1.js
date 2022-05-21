// import "assets/crime4.geojson"
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

const ctx = document.getElementById('myChart').getContext('2d'); // content location
// const config = {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// };

//const labels = Utils.months({count: 7});

let strings = [];

for(let i = 0; i < 24; i++){
    strings.push("crime" + i + ".geojson");
}

let hours = [];

function readJson(cb) {
    fetch("http://127.0.0.1:5500/assets/"+cb)
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

strings.forEach(element => {
    console.log(element)
    hours.push(readJson(element));
});

console.log(hours);

hours.forEach(hour => {
    console.log(hour.get("features").length());
});

// let strings = "crime" + Array.from(Array(24).keys()) + ".geojson";

console.log(strings);

// const data = {
//     labels: (Array.from(Array(24).keys()))+":00",
//     datasets: [{
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//     }]
// };

// const config = {
//     type: 'line',
//     data: data,
// };

// const myChart = new Chart(ctx, config);