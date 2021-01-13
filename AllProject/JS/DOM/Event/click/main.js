var myParagragh  = document.querySelector('div.parent p'),
	
	myhead 		= document.querySelector('div.parent h2');

myParagragh.onclick = function () {

	myhead.style.display = 'none';

}
	
window.onload = function () {

	myParagragh.click();  // This Will Make Click On myParagragh When window Is onloaded 
}

