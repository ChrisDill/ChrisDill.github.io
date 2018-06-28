// background slideshow
$.backstretch([
	"/assets/scifi1.jpg",
	"/assets/scifi2.jpg",
	"/assets/purple-space1.jpg"
], {duration: 6500, fade: 1500});

// fade in main content
$(document).ready(function() {	
		$("main").hide().fadeIn(700);
});