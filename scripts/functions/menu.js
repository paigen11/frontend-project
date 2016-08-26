var count = 0;
var scoreboard = document.getElementById('scoreboard');
scoreboard.innerHTML = count;
var gameStart = false;
var minePlaced = false;
var mineListen;
var mineWatch;

// open menu automatically on page load
setTimeout(function(){
	$('.menu_opener').prop('checked', true);
	playOptions();
	$('#help').toggleClass('bomb-available');
	showScore();
	controls();
	endMessage('Use these hotkeys in game! [1] Bomb [2] Mines [3] Chainsaw');
},2000);

function menuToggle(){ 
  $('.menu_opener').prop('checked', !$('.menu_opener').prop("checked"));
  $('#start').removeClass('startMove');
  $('#restart').removeClass('restartMove');
  $('#scoreboard').removeClass('showMe');
} 

$('#start').on('click', function(){ 
    // generation = setInterval(generateMarkers, 500); 
    interval = setInterval(generateMarkers, spawnInterval);
    playOptions(); 
    bombDelay();
    mineDelay();
    chainsawDelay();
    centerChecker = setInterval(checkCenter, 1000);
    $('#start').toggleClass('bomb-available');
}) 
function showScore(){ 
  $('#scoreboard').toggleClass('showMe'); 
}; 
 
function playOptions(){ 
  $('#start').toggleClass('startMove');
  $('#restart').toggleClass('restartMove');
}

function showScore(){
  $('#scoreboard').toggleClass('showMe');
};

function attackOptions(){
	$('.bomb_btn').toggleClass('bombMove');
	$('.chainsaw_btn').toggleClass('chainsawMove');
	$('.mine_btn').toggleClass('mineMove');
}

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
function controlsClose(){
	if(gameStart == false){
		gameStart = true;
		$('#message').removeClass('slide-in');
		$('#message').css({'height':'75px'})
		$('#start').toggleClass('bomb-available');
		$('#help').removeClass('bomb-available');
	}else if(gameStart == true){
		gameStart = false;
	}
}

if(gameStart == true){
	$('#start').toggleClass('bomb-available');
	gameStart = false;
}

// function stop(){
// 	clearInterval(generation);
// }