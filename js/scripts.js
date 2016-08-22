
L.mapbox.accessToken = 'pk.eyJ1IjoiZXJpY2V0dGVuc29obiIsImEiOiJjaXJ6OHgzaWowMDdsMnRwa2lmM2MyMzlmIn0._EDAWnZWG_f4wwx5d46a_w';

var map = L.map('map').setView([33.8486731,-84.3733132], 9);

L.mapbox.styleLayer('mapbox://styles/mapbox/basic-v9').addTo(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
        }

map.on('click', onMapClick);
var popup = L.popup();  


function generateMarkers() {
    var tempPoint = generate(point[0], point[1], .4);
    new L.marker(tempPoint).addTo(map);
}

setInterval(generateMarkers, 1000);


