function jsAnchor() {
	$('.js-anchor').on('click', function(){
		var elID = $(this).attr('href');
		var scrollEl = $(elID).offset().top;

		$('html, body').animate({
            scrollTop: scrollEl
		}, 500);

        return false;
    });
}
