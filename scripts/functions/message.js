function newMessage(message) {
	$('.message-text').text(message)
	$('#message').addClass('slide-in');
	setTimeout(function(){
		$('#message').removeClass('slide-in');
	}, 7000)
}
function endMessage(message) {
	$('.end-message-text').text(message)
	$('#end-message').addClass('slide-down');
	setTimeout(function(){
		$('#end-message').removeClass('slide-down');
	}, 5000)
}
