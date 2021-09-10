//check off
$('ul').on('click', 'li', function() {
	$(this).toggleClass('strike');
});

$('ul').on('click', 'span', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$('input[type="text"]').on('keypress', function(e) {
	if (e.keyCode === 13) {
		const val = $(this).val();
		$('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${val}</li>`);
		$(this).val('');
	}
});
$('.fa-plus').on('click', function() {
	$('input[type="text"]').fadeToggle();
});
