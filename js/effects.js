// background slideshow
$("body").backstretch([
	"/assets/landscape1.jpg",
	"/assets/scifi2.jpg",	
	"/assets/space10.png",
], {duration: 8000, fade: 1500, fadeFirst:false});

// close solution to footer at bottom issue
$(document).ready(function() {
//    var docHeight = $(window).height();
//    var footerHeight = $("footer").height();
//    var footerTop = $("footer").position().top + footerHeight;
//
//    if (footerTop < docHeight) {
////        $("footer").css("margin-top", 10 + (docHeight - footerTop) + "px");
//				$("footer").css("margin-top", (docHeight - footerTop) - 16 + "px");
//		}
});
