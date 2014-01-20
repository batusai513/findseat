'use strict';
function supportsSVG() {
	return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
}
if (!supportsSVG()) {
	var imgs = document.getElementsByTagName('img');
	var dotSVG = /.*\.svg$/;
	for (var i = 0; i !== imgs.length; ++i) {
		if(imgs[i].src.match(dotSVG)) {
			imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
		}
	}
}

new window.Dropdown({
	el: '.js-menu-toggle',
	dropdown: '.js-options-toggle',
	dataState: ['open', 'close']
});

$('.js-login-popup').magnificPopup({
	items: {
		src: '#login-popup',
		type: 'inline'
	},
	closeBtnInside: true
});

$('.js-register-popup').magnificPopup({
	items: {
		src: '#register-popup',
		type: 'inline'
	},
	closeBtnInside: true
});

$('.js-register-popup').magnificPopup({
	items: {
		src: '#register-popup',
		type: 'inline'
	},
	closeBtnInside: true
});

$('.js-sidebar-btn').on('click', function(e){
	var $el = $(this),
		menu = $el.next('.main-menu');
	$el.toggleClass('is-active');
	menu.toggleClass('is-active');
	e.preventDefault();
});