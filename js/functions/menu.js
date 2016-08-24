var count = 0;
var scoreboard = document.getElementById('scoreboard');
scoreboard.innerHTML = count;

// open menu automatically on page load
setTimeout(function(){
	$('.menu_opener').prop('checked', true);
},2000);

function menuToggle(){ 
  $('.menu_opener').prop('checked', !$('.menu_opener').prop("checked")); 
} 
 
$('#start').on('click', function(){ 
    generation = setInterval(generateMarkers, 1000); 
    playOptions(); 
    menuToggle(); 
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

function stop(){
	clearInterval(generation);
}