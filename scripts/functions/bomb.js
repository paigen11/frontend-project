// bombAvailable is set to true on a timer and will be used together with a CSS class to animate the bomb button. 
// bombSelected can't be set as true unless bombAvailable is true
var bombAvailable = false;
// bombSelected  is set to true on a click event, and will unlock the bomb weapon
var bombSelected = false;

// click listener for weapon button
$('#bomb').on('click', function() {
	// only allow weapon to be selected if it is available
	if(bombAvailable){
		bombSelected = true;
		$('#bomb').removeClass('bomb-available');
		$('body, .leaflet-interactive').addClass('bomb-cursor');
	}
})

// draw the bomb polygon, call areaEffect, and reset timers and animations when complete
function onMapClick(e) {
    if (bombSelected) {
	    var circle = L.circle(e.latlng, 8000, {color: 'red'}).setStyle({className: "pulseCustom"}).addTo(map);
    	areaEffect(circle);
    	bombAvailable = false;
    	bombSelected = false;
    	$('body, .leaflet-interactive').removeClass('bomb-cursor');
    	bombDelay();
    }
}

// if weapon is not available, set timer for it to become available again.
function bombDelay() {
	if (!bombAvailable) {
		setTimeout(function(){
			bombAvailable = true;
			$('#bomb').addClass('bomb_btn');
			$('#bomb').addClass('bomb-available');
			$('#bomb').addClass('bombMove');
			newMessage("Bomb ready! Wipe out a bunch of zombies with one hit."); 
		}, 10000);
		
	}
}

// loop through markers in array, if coordinates are less than the radius
// of the weapon's effect, remove markers from array and map, and update score.
function areaEffect(circle) {
	var killedMarkers = [];
	flyOver(circle);
	
	for(i = 0; i < markerList.length; i++) {
		if (getDistanceFromLatLonInKm(markerList[i]._latlng.lat, markerList[i]._latlng.lng, circle._latlng.lat, circle._latlng.lng) < 8){
			markerList[i].setIcon(corpseIcon);
			killedMarkers.push(markerList[i])

			setTimeout(function(){
				for(j = 0; j < killedMarkers.length; j++) {
					map.removeLayer(killedMarkers[j])
				}
			},1000)
			
			markerList.splice(i, 1);
			scoreboard.innerHTML++;
		}
	}
	setTimeout(function() {
		// remove weapon polygon from map when animation is done
		map.removeLayer(circle)
	}, 1000)
}

// copy and paste distance function
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1); 
	var a = 
	Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
	Math.sin(dLon/2) * Math.sin(dLon/2)
	; 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}

function flyOver(circle){
	var startingLat = circle._latlng.lat - .3;
	var startingLon = circle._latlng.lng - .3;
	var targetLat = circle._latlng.lat + .3;
	var targetLon = circle._latlng.lng + .3;
	var jetIcon = L.icon({iconUrl: 'img/jet.png', className: 'my-div-icon', iconSize: [50,50]});
	// jet = L.Marker.movingMarker([[33.506761, -84.667488], [34.050127, -84.012538]], [1000], {icon: jetIcon})
 //        .addTo(map)
 	jet = L.Marker.movingMarker([[startingLat, startingLon], [targetLat, targetLon]], [1000], {icon: jetIcon})
    	.addTo(map)
    jet.start()

    setTimeout(function(){
    	map.removeLayer(jet)
    },2000, jet)
}
