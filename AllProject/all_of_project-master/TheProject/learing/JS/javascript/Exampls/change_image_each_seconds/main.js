var myDiv = window.document.querySelector('div'),
	
	myImg = [
		'url(10.jpg)',
		'url(12.jpg)',
		'url(13.jpg)',
		];

function changeImage(myDiv , myImg , seconds) {
	
	'use strict';

	setInterval(function(){
		var randomImage = Math.floor(Math.random() * myImg.length);

		window.console.log(randomImage);

		myDiv.style.backgroundImage = myImg[randomImage];

	},seconds);

}

changeImage(myDiv , myImg , 2000);