var chainsawAvailable = false;
var chainsawSelected = false;

chainsawDelay();

$('.link_two').on('click', function() {
	if(chainsawAvailable){
		chainsawSelected = true;
		$('.link_two').removeClass('bomb-available');
		$('body, .leaflet-interactive').addClass('chainsaw-cursor');
	}
	
})

function sawed(marker){
	if(chainsawSelected){
		map.removeLayer(marker);
		scoreboard.innerHTML++;
	  	var index = markerList.indexOf(marker);
            if(index > -1){
                markerList.splice(index, 1);
            }
		setTimeout(function(){
			chainsawAvailable = false;
			chainsawSelected = false;
			$('.link_two').removeClass('bomb-available');
			$('body, .leaflet-interactive').removeClass('chainsaw-cursor');
			chainsawDelay();
		}, 5000)
	}
}

function chainsawDelay() {
	if(!chainsawAvailable) {
		setTimeout(function(){
			chainsawAvailable = true;
			$('.link_two').addClass('bomb-available');
		}, 5000);
	}
}