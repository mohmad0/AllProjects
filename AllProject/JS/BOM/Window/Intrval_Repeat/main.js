/*
	setInterval(function , MillSeconds , Param1, Param2, Param3, ...) 
	
	clearInterval(ID Or Number Of setInterval);

*/

var myDiv = document.querySelector('div'),
	
	myText;


function Counter(){

	'use strict';

		if(myDiv.textContent <= 300){

			window.console.log('Done...');

			window.clearInterval(myText);
		}else{

			myDiv.textContent = myDiv.textContent - 10;
		}

}

	
var	myText = window.setInterval(Counter, 50); // 0.3 Seconds ===> This Will Repeat The Function Each 0.05 Seconds And Will Not Stoping








