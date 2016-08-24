
function markerMover() {
	setInterval(function(){
		for (var i = 0; i < markerList.length; i++) {
			var lat = markerList[i]._latlng.lat += .005;
			var lng = markerList[i]._latlng.lng += .005;

			markerList[i].setLatLng([lat, lng]).update();
		}
	}, 1000)
}

