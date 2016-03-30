

$(document).ready(function() {

});

$('#myForm').submit(function(event) {
	event.preventDefault();

	$(this).children('input:text').each(function(index, elem) {
		var value = $(elem).val();
		var newThing = $('<li>X ' + value + '</li>')
		$('ul').append(newThing);
		$(elem).val('');
	});

	console.log(event);
});

$('ul').on('click', 'li', function(event) {
	$(this).remove();
});