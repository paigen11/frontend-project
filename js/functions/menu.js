var count = 0;
var scoreboard = document.getElementById('scoreboard');
scoreboard.innerHTML = count;

// open menu automatically on page load
setTimeout(function(){
	$('.menu_opener').prop('checked', true);
},2000);