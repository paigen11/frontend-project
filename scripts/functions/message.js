function newMessage(message) {
	$('.message-text').text(message)
	$('#message').addClass('slide-in');
	setTimeout(function(){
		$('#message').removeClass('slide-in');
	}, 4000)
}
function endMessage(message) {
	$('.end-message-text').text(message)
	$('#end-message').addClass('slide-down');
	setTimeout(function(){
		$('#message').removeClass('slide-down');
	}, 4000)
}