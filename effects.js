// background slideshow
$.backstretch([
	"res/back1.jpg",
	"res/land7.jpg",
	"res/space1.jpg"
	], {duration: 5000, fade:1500});

// fade in main content
$(document).ready(function() {			
		$("main").hide().fadeIn(700);
		$(".arta").hide().fadeIn(1200);
		$(".artb").hide().fadeIn(1700);
		$(".artc").hide().fadeIn(2200);
		/*$(".link").click(function() {
			$('html, body').animate({
				'scrollTop': $(this.hash).offset().top,
				'easing': "linear"
			}, 600);
		})*/
});