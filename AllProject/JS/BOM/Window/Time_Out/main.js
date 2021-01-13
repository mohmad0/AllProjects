/*
	setTimeout(function , MillSeconds , Param1, Param2, Param3, ...)
	
	clearTimeout(ID Or Number Of setTimeout);

*/





var myButton = document.querySelector('button');


function Message(){

	'use strict';

	window.console.log('Hello After 3 Seconds ');

}

	
var	myText 	 = window.setTimeout(Message, 3000); // 3 Seconds

myButton.onclick = function (){

	'use strict';

	window.clearTimeout(myText); // This Do Stoping For setTimeout();

}