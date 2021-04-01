// console.log to check the code is working
console.log("working");

// Create the map object with a center and zoom level
var map = L.map("mapid").setView([34.0522, -118.2437], 14);

// Add a marker for Los Angeles, CA
let marker = L.circleMarker([34.0522, -118.2437], {
    color: "black",
    fillColor: "#ffffa1",
    radius: 300
}).addTo(map);

// Create the tile layer that will be the background of the map
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
}).addTo(map);