var count = 0;
var scoreboard = document.getElementById('scoreboard');
scoreboard.innerHTML = count;

// open menu automatically on page load
setTimeout(function(){
	$('.menu_opener').prop('checked', true);
	showScore();
},2000);

function menuToggle(){ 
  $('.menu_opener').prop('checked', !$('.menu_opener').prop("checked"));
  $('#start').removeClass('startMove');
  $('#restart').removeClass('restartMove');
  $('#scoreboard').removeClass('showMe');
} 

var interval;

$('#start').on('click', function(){ 
    // generation = setInterval(generateMarkers, 500); 
    interval = setInterval(generateMarkers, spawnInterval);
    playOptions(); 
    bombDelay();
    chainsawDelay();
    centerChecker = setInterval(checkCenter, 1000);
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

// function stop(){
// 	clearInterval(generation);
// }