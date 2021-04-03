# Mapping_Earthquakes

## Resources

d3 js library, leaflet js library, mapbox api, tectonic plate geoJson data from https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json, geoJson earthquake data from earthquakes.usgs.gov, 

## Overview

The purpose of this project is to view the locations of recent earthquakes and comapre the occurence and magnitude of the earthquakes with their proximity to fault lines.  Using leaflet and mapbox api, I plotted lines representing fault lines between tectonic plates around the world, and added circle markers in the locations of earthquakes from the past 7 days.  The radius of the circle marker is proportional to the magnitude of the earthquake, and different colors are used for markers in different ranges of magnitude, as described in the legend.  

The map clearly shows a correleation between the quantity and magnitude of earthquakes and their proximity to fault lines.  The markers representing earthquakes are clustered closest to the fault lines, and the largest markers representing the highest magnitude quakes are right on the fault lines.