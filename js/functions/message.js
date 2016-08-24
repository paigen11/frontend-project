function newMessage(message) {
	$('.message-text').text(message)
	$('#message').addClass('slide-in');
	setTimeout(function(){
		$('#message').removeClass('slide-in');
	}, 4000)
}