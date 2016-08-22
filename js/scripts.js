// L.mapbox.accessToken = 'pk.eyJ1IjoiZXJpY2V0dGVuc29obiIsImEiOiJjaXJ6OHgzaWowMDdsMnRwa2lmM2MyMzlmIn0._EDAWnZWG_f4wwx5d46a_w';

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

//add dark Mapbox styled background
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFpZ2VuMTEiLCJhIjoiY2lyemJlZ3A0MDBqZTJ5cGs5ZHJicjI2YyJ9.2-dZqM-k2obDN47BpWq5Lw')
.addTo(map);


function onMapClick(e) {
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
    console.log(e.latlng)
    L.circle(e.latlng, 2000).addTo(map);
}

map.on('click', onMapClick);
var popup = L.popup();  

var myIcon = L.icon({iconUrl: 'img/monster.png', className: 'my-div-icon'});

var markerList = [];

function generateMarkers() {
    var tempPoint = generate(point[0], point[1], .4);
    marker = L.marker(tempPoint, {icon: myIcon})
        .addTo(map)
        .on("click", function(e){
            map.removeLayer(this);
        })
    markerList.push(marker);
    }    

var generation = setInterval(generateMarkers, 1000);

function stop(){
	clearInterval(generation);
}


