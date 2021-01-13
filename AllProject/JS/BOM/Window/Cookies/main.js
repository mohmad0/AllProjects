/*
	window.document.cookies("name=value; expires=Date; path=")

*/


// script Cookie ===> https://github.com/florian/cookie.js


document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
function alertCookie() {
  alert(document.cookie);
}
