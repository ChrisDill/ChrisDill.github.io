// background slideshow
$.backstretch([
	"/assets/land1.jpg",
	"/assets/land2.jpg",
	"/assets/land3.jpg",
	"/assets/land4.jpg",
	], {duration: 6500, fade:1500});

// fade in main content
$(document).ready(function() {			
		$("main").hide().fadeIn(700);
		$(".arta").hide().fadeIn(1200);
		$(".artb").hide().fadeIn(1700);
		$(".artc").hide().fadeIn(2200);
});