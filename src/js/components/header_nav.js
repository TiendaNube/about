function headerNav() {
	var $navButtonOpen = $('.js-toggle-header-nav');
	var $navButtonClose = $('.js-mobile-nav-close');
	var $navWrapper = $('.js-mobile-nav');

	function openHeaderNav() {
		$navWrapper.addClass('opened');
		$('html').css('overflow', 'hidden');
	}

	function closeHeaderNav() {
		$navWrapper.removeClass('opened');
		$('html').removeAttr('style');
	}

	$navButtonOpen.on('click', function(){
		openHeaderNav();
	});

	$navButtonClose.on('click', function(){
		closeHeaderNav();
	});
}