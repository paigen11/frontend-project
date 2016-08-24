setInterval(checkCenter, 1000);

//checks if zombies are in the danger zone
function checkCenter() {
	var circle = L.circle(point, 10000, {color: 'none'}).addTo(map);
    areaEffect(circle);

}
//where the count is displayed
var howManyZombiesInside = document.getElementById('danger_meter');
// loop through markers in array, if coordinates are less than the radius
// of the circle's radius, then count them
function areaEffect(circle) {
	var dangerZombies = [];
	for(i = 0; i < markerList.length; i++) {
		if (getDistanceFromLatLonInKm(markerList[i]._latlng.lat, markerList[i]._latlng.lng, circle._latlng.lat, circle._latlng.lng) < 8){
			dangerZombies.push(markerList[i]);
			howManyZombiesInside.innerHTML = dangerZombies.length;
		}
	}

	setTimeout(function() {
		//so we dont have crazy layers of circle checks
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
