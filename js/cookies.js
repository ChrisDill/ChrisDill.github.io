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