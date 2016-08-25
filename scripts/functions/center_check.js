
//checks if zombies are in the danger zone
function checkCenter() {
	var dangerZombies = [];
	console.log(dangerZombies);
	var widthValue = 50;
	if(dangerZombies.length < 10){
		for(i = 0; i < markerList.length; i++) {
			if (getDistanceFromLatLonInKm(markerList[i]._latlng.lat, markerList[i]._latlng.lng, point[0], point[1]) < 12){
				dangerZombies.push(markerList[i]);
				howManyZombiesInside.innerHTML = dangerZombies.length;
			}
		}
	}
	if(dangerZombies.length > 0 && dangerZombies.length < 10){
		widthValue = widthValue * dangerZombies.length;
		widthValue += 'px';
		$('.danger-wrapper').css({'width':widthValue})
	}
	if(dangerZombies.length > 5 && dangerZombies.length < 10){
		$('.danger-wrapper').toggleClass('bomb-available');
	}
	if(dangerZombies.length >= 10){
		howManyZombiesInside.innerHTML = "Game over man! Game over!";
		function stop(){
			clearInterval(generation);
			clearInterval(checkCenter);
		};
		stop();
		widthValue = '300px';
		$('.danger-wrapper').css({'width':widthValue});
	}
}
//where the count is displayed
var howManyZombiesInside = document.getElementById('danger_meter');
// loop through markers in array, if coordinates are less than the radius
// of the circle's radius, then count them
	

// copy and paste distance function
// function getDistanceFromCenterInKm(lat1,lon1,lat2,lon2) {
// 	var R = 6371; // Radius of the earth in km
// 	var dLat = deg2rad(lat2-lat1);  // deg2rad below
// 	var dLon = deg2rad(lon2-lon1); 
// 	var a = 
// 	Math.sin(dLat/2) * Math.sin(dLat/2) +
// 	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
// 	Math.sin(dLon/2) * Math.sin(dLon/2)
// 	; 
// 	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
// 	var d = R * c; // Distance in km
// 	return d;
// }

// function deg2rad(deg) {
// 	return deg * (Math.PI/180)
// }
