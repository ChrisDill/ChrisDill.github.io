// background slideshow
$.backstretch([
	"res/back1.jpg",
	"res/land7.jpg",
	"res/space1.jpg"
	], {duration: 5000, fade:1500});

// fade in main content
$(document).ready(function() {			
		$("main").hide().fadeIn(500);
		$(".arta").hide().fadeIn(1000);
		$(".artb").hide().fadeIn(1500);
		$(".artc").hide().fadeIn(2000);
		/*$(".link").click(function() {
			$('html, body').animate({
				'scrollTop': $(this.hash).offset().top,
				'easing': "linear"
			}, 600);
		})*/
});