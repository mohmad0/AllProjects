var myButton = document.querySelector('button'),
	
	myMain = document.querySelector('.main');

/*
	
	1- onclick
	2- ondblclick
	3- oncontextmenu ==> This For Right Click
	4- onmouseenter	 ==> This For Mouse Hover
	5- onmouseleave	 ==> This For Mouse Leave



myButton.onclick = function () {

	'use strict';

	myMain.textContent = 'You Enter One Click Now ';
}


myButton.ondblclick = function () {

	'use strict';

	myMain.textContent = 'You Enter Tow Click Now ';
}


myButton.oncontextmenu = function (e) {

	'use strict';

	e.preventDefault();  ==> This If You Want To Stop The Right Click Function

	myMain.textContent = 'You Enter Right Click Now ';
}


myButton.oncontextmenu = function () {

	'use strict';

	myMain.textContent = 'You Enter Right Click Now ';
}

myButton.onmouseenter = function (e) {

	'use strict';

	myMain.textContent = 'You Hovered Now ';
}


myButton.onmouseleave = function (e) {

	'use strict';

	myMain.textContent = 'You Leaved Now ';
}


*/

myButton.onmouseenter = function (e) {

	'use strict';

	myMain.textContent = 'You Hovered Now ';
}


myButton.onmouseleave = function (e) {

	'use strict';

	myMain.textContent = 'You Leaved Now ';
}