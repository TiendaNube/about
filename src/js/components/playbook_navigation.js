function playbookNavigation() {
	var $navigation_wrapper = $('.js-playbook-navigation-wrapper');
	var $navigation = $('.js-playbook-navigation');
	var $sections = $('.article section');

	$(window).on('scroll', function(){
		if($(window).scrollTop() >= $navigation_wrapper.offset().top) {
			$navigation.addClass('is-fixed');
		} else if($(window).scrollTop() < $navigation_wrapper.offset().top) {
			$navigation.removeClass('is-fixed');
		}

		$sections.each(function(){
			var position = $(this).offset().top;
			var position_bottom = position + $(this).outerHeight();

			if($(window).scrollTop() == position || $(window).scrollTop() <= position_bottom) {
				var elID = $(this).attr('id');

				$('.nav-link:not([href="#'+elID+'"])').removeClass('active');
				$('.nav-link[href="#'+elID+'"]').addClass('active');
				return false;
			}
		});
	});
}
