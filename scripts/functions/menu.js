var count = 0;
var scoreboard = document.getElementById('scoreboard');
scoreboard.innerHTML = count;
var minePlaced = false;
var mineListen;
var mineWatch;

// open menu automatically on page load
setTimeout(function(){
	$('.menu_opener').prop('checked', true);
	playOptions();
	$('#start').toggleClass('bomb-available');
	showScore();
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
    mineListen = setInterval(amIPlaced, 1000);
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

// function stop(){
// 	clearInterval(generation);
// }