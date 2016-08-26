function controlMessage(message) {
	$('.message-text').text(message)
	$('#message').addClass('slide-in');
	$('#message').css({'height': '90px'})
	setTimeout(function(){
		
	}, 4000)
}

function controls(){
	controlMessage("Controls: Click the zombie to kill it. Power ups will open when available. Don't let too many zombies near the castle.");
}
$('#help').click(function(){
	if(gameStart == false){
		gameStart = true;
		$('#message').removeClass('slide-in');
		$('#message').css({'height':'75px'})
	}
}) 

if(gameStart == true){
	$('#start').toggleClass('bomb-available');
	gameStart = false;
}
