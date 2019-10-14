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

function playbookMobileNavigation() {
	var $mobileNavWrapper = $('.js-playbook-navigation-mobile-inner');
	var $mobileNavCloseButton = $('.js-playbook-navigation-mobile-close');
	var $mobileNavButton = $('.js-mobile-nav-link');
	var $mobileNavInner = $('.js-playbook-navigation-content');
	
	function openNav() {
		$mobileNavWrapper.addClass('opened');
		$mobileNavInner.addClass('hide');
	}

	function closeNav() {
		$mobileNavWrapper.removeClass('opened');
		$mobileNavButton.removeClass('active');
		$mobileNavInner.addClass('hide');
	}

	// Events
	$(window).on('scroll', function() {
		if($(window).scrollTop() > $('.article').offset().top) {
			$('.playbook-navigation-mobile').addClass('opened');
		} else {
			$('.playbook-navigation-mobile').removeClass('opened');
		}
	});

	$mobileNavButton.on('click', function(){
		var getTarget = $(this).data('target');

		if($mobileNavWrapper.hasClass('opened')) {
			closeNav();
		}

		if(getTarget === "top") {
			$('html, body').animate({ scrollTop: 0 });
			closeNav();
			return;
		}
		
		openNav();

		$('.'+getTarget).removeClass('hide');
		$(this).addClass('active');
	});

	$mobileNavCloseButton.on('click', function(){
		closeNav();
		return false;
	});
}