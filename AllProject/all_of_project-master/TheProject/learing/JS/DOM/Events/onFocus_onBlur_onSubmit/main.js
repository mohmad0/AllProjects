var myMain = document.querySelector('.main'),
	
	myButton = document.querySelector('button'),
	
	myInput	 = document.querySelector('input'),

	myUser	 = document.querySelector('.user'),

	myPass	 = document.querySelector('.pass');

if(myInput.value == ''){

	myUser.onfocus = function (){

		myUser.placeholder = '';

	}

	myUser.onblur = function (){

		myUser.placeholder = 'username';

	}

	myPass.onfocus = function (){

		myPass.placeholder = '';

	}

	myPass.onblur = function (){

		myPass.placeholder = 'password';

	}
}

if (myUser.value.length < 10 && myPass.value.length < 8){

	myMain.onsubmit = function(e){

		'use strict';

		e.preventDefault();
	}

}else{

	myMain.onsubmit = function(e){

		'use strict';

		e.Default();
	}	
}

/*

	1- onload    This Will Do After The Is Loading
	2- onscroll	 This Will Do When I Make Scrolling Of The Page	
	3- onresize	 This Will Do When I Chage The Size Of The Page

/////////////////////////////////////////////////////////////////////////




*/