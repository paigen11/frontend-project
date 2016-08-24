// chainsawAvailable is set to true on a timer and will be used together with a CSS class to animate the bomb button. 
// chainsawSelected can't be set as true unless bombAvailable is true
var chainsawAvailable = false;
// chainsawSelected  is set to true on a click event, and will unlock the bomb weapon
var chainsawSelected = false;


// call chainsawDelay once to start weapon timer
chainsawDelay();

// click listener for weapon button
$('.link_two').on('click', function() {
	// only allow weapon to be selected if it is available
	if(chainsawAvailable){
		chainsawSelected = true;
		$('.link_two').removeClass('bomb-available');
		$('body, .leaflet-interactive').addClass('chainsaw-cursor');
	}
	
})

// sawed is called by a mouseover listener placed on all markers
// if the weapon is available and listener fires, the marker is removed
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
			newMessage("chainsaw ready!");
		}, 5000);
	}
}