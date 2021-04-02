// console.log to check the code is working
console.log("working");

// Create the map object with a center at Earth
var map = L.map("mapid").setView([30, 30], 2);


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
}).addTo(map);

// Add GeoJSON data from github.
let airportData = "https://raw.githubusercontent.com/mhertel278/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json"

// Grabbing the GeoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h1>Airport Code: ${feature.properties.faa}</h1> <hr> <h4>${feature.properties.name}`)
        }
    }).addTo(map)
})