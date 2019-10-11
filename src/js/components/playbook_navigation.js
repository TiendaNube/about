function playbookNavigation() {
	var $navigation_wrapper = $('.js-playbook-navigation-wrapper');
	var $navigation = $('.js-playbook-navigation');

	$(window).on('scroll', function(){
		if($(window).scrollTop() >= $navigation_wrapper.offset().top) {
			$navigation.addClass('is-fixed');
		} else if($(window).scrollTop() < $navigation_wrapper.offset().top) {
			$navigation.removeClass('is-fixed');
		}
	})
}
