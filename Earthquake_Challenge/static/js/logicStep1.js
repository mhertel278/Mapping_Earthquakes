// console.log to check the code is working
console.log("working");


// Create the tile layer that will be the background of the map
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// Create a dark tile layer that will be the default background
var satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY
});

// create base layer variable
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Create map object with center of US, zoom level, and default layer
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    // set dark layer as default
    layers: [streets]
})
// Add GeoJSON data from earthquakes.usgs.gov for Last 7 days.
let earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// create style object for the map style
// let myStyle = {
//     color: "blue",
//     fillColor: "yellow",
//     weight: .1
// }
// grabbing the GeoJSON data
d3.json(earthquakes).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        // style: myStyle,
        onEachFeature: function(feature, layer) {
            // console.log(feature);
            // layer.bindPopup(`<h3>${feature.properties.AREA_NAME}</h3>`)
        }
        
    }).addTo(map)
})
// Pass map layers to the layer control and add it to the map
L.control.layers(baseMaps).addTo(map);