/* Cookies Notification */
let getCookiesRead = localStorage.getItem('cookiesRead');
if (getCookiesRead == 'confirmed') 
{
  cookiesNotification.style.display = 'none';
} 
else 
{
  cookiesNotification.style.display = 'block';
}

cookiesClose.addEventListener('click', function() {
  cookiesNotification.style.display = 'none';
  localStorage.setItem('cookiesRead', 'confirmed');
});

/*Slideshow*/
$("body").backstretch([
	"/assets/landscape1.jpg",
	"/assets/scifi2.jpg",	
	"/assets/space10.png",
], {duration: 8000, fade: 1500, fadeFirst:false});

// Google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "UA-118914878-1"); // {{ site.google_analytics }}
