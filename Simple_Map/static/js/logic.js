// console.log to check the code is working
console.log("working");

// Create the map object with a center and zoom level
var map = L.map("mapid").setView([40.7, -94.5], 4);
// Create the tile layer that will be the background of the map
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    accessToken: API_KEY
}).addTo(map);