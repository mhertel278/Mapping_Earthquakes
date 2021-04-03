// console.log to check the code is working
console.log("working");

// // Create the map object with a center at Earth
// var map = L.map("mapid").setView([30, 30], 2);


// // plot the San Fran Airport with L.geoJSON
// L.geoJSON(sanFranAirport, {
//     // turn each feature to a marker
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup(`<h2>${feature.properties.faa}<h2> <hr> 
//         <h4>${feature.properties.name}`)
//     }
// })
// // .bindPopup(`<h1>${sanFranAirport.features[0].properties.name}</h1>`)
// .addTo(map);
// Get cities data from cities.js.
// let cityData = cities;


// // loop through each city to add marker to the map
// cityData.forEach(function(city) {
//     console.log(city);
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         lineweight: 4
//     })
//     .bindPopup(`<h2>${city.city}, ${city.state}</h2> <hr> <h3>Population: ${city.population.toLocaleString()}</h3>`)
//     .addTo(map);
// })

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
    Streets: streets,
    "Satellite Streets": satelliteStreets
};

// Create map object with center, zoom level, and default layer
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 10,
    // set dark layer as default
    layers: [streets]
})
// Add GeoJSON data from github.
let torontoNeighborhoods = "https://raw.githubusercontent.com/mhertel278/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json"

// create style object for the map style
let myStyle = {
    color: "blue",
    fillColor: "yellow",
    weight: .1
}
// grabbing the GeoJSON data
d3.json(torontoNeighborhoods).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            console.log(feature);
            layer.bindPopup(`<h3>${feature.properties.AREA_NAME}</h3>`)
        }
        
    }).addTo(map)
})
// Pass map layers to the layer control and add it to the map
L.control.layers(baseMaps).addTo(map);