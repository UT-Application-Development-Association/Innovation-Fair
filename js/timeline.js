function showTimeLine() {
	sr.reveal('.js--fadeInLeft', {
		origin: 'left',
		distance: '300px',
		easing: 'ease-in-out',
		duration: 500,
	});

	sr.reveal('.js--fadeInRight', {
		origin: 'right',
		distance: '300px',
		easing: 'ease-in-out',
		duration: 500,
	});
}

$(document).ready(function() {
	$("#timeline1").show();
	$("#timeline2").hide();
	
	$("#timeline_btn_1").click(function() {
		$("#timeline1").show();
		$("#timeline2").hide();
		showTimeLine()
	});
	
	$("#timeline_btn_2").click(function() {
		$("#timeline2").show();
		$("#timeline1").hide();
		showTimeLine()
	});


	window.sr = ScrollReveal();
	if ($(window).width() < 768) {
		if ($('.timeline-content').hasClass('js--fadeInLeft')) {
			$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
		}
		sr.reveal('.js--fadeInRight', {
			origin: 'right',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 500,
		});
	} else {
		sr.reveal('.js--fadeInLeft', {
			origin: 'left',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 500,
		});
		sr.reveal('.js--fadeInRight', {
			origin: 'right',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 500,
		});
	}
	
	showTimeLine()
});
