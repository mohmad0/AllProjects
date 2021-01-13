var myDiv = document.querySelector('.main'),
	
	myButton = document.querySelector('button');

myButton.onclick = function () {

	'use strict';

	myDiv.style.color = 'red';
}

/*

	All Methods To Write The Events:


		1-	function changeColor() {

				'use strict';

				myDiv.style.color = 'red';
			}

		2-	myButton.onclick = changeColor;

		3-	document.querySelector('button').onclick = changeColor;

		4-	Write In HTML Page Like That :
									<button onclick="changeColor()">Change Color</button>

*/