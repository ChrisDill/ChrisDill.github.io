// background slideshow
$.backstretch([
	"assets/land1.jpg",
	"assets/land2.jpg",
	"assets/land3.jpg",
	"assets/space1.jpg",
	"assets/space3.jpg",
	], {duration: 6000, fade:1500});

// fade in main content
$(document).ready(function() {			
		$("main").hide().fadeIn(700);
		$(".arta").hide().fadeIn(1200);
		$(".artb").hide().fadeIn(1700);
		$(".artc").hide().fadeIn(2200);

		// testing fade out effect
		/*$(".link").click(function() {		
			event.preventDefault();
			page = this.href;		
			$("main").fadeOut(200, function() {
				window.location = page;
			});
		});*/
});