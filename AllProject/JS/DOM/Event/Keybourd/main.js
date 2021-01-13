var myForm = document.querySelector('form'),

	myInput = document.querySelector('input'),
	
	myMain = document.querySelector('.main');

/*
	
	1- onkeyup
	2- onkeydown
	3- onkeypree 



myInput.onkeyup = function () {

	'use strict';

	myMain.textContent = this.value;
}

myInput.onkeydown = function () {

	'use strict';

	myMain.textContent = this.value;
}


myInput.onkeypress = function () {

	'use strict';

	myMain.textContent = this.value;
}


*/


myInput.onkeydown = function () {

	'use strict';

	myMain.textContent = 'This my Name Mohmad Gamal';
}
