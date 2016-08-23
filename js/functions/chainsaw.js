var chainsawAvailable = false;
var chainsawSelected = false;

$('.link_two').on('click', function() {
	chainsawSelected = true;
	$('.link_two').removeClass('bomb-available');
	$('body, .leaflet-interactive').addClass('chainsaw-cursor');
	console.log("chainsawSelected")
})

chainsawDelay();

function sawed(marker){
	if(chainsawSelected){
		map.removeLayer(marker);
		console.log("sawed!");
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