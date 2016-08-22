L.mapbox.accessToken = 'pk.eyJ1IjoiZXJpY2V0dGVuc29obiIsImEiOiJjaXJ6OHgzaWowMDdsMnRwa2lmM2MyMzlmIn0._EDAWnZWG_f4wwx5d46a_w';

// create map
var map = L.map('map', {
    center: [33.73804, -84.38324],
    zoom: 9,
    // leave maxBounds commented out for now
    // maxBounds: [
    //     [33.7993178, -84.328008],
    //     [33.8486731, -84.3733132]
    // ],
    minZoom: 9

})

//add mapbox styled background
L.mapbox.styleLayer('mapbox://styles/mapbox/dark-v9').addTo(map);

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

var generation = setInterval(generateMarkers, 1000);

function stop(){
	clearInterval(generation);
}


