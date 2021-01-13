var myInput = window.document.querySelector('input'),
	
	myPlaceholder = myInput.getAttribute('placeholder');

function hide_placeholder(input , input_place){

	input.onfocus = function(){

		'use strict';

		var place = this.placeholder === input_place ? this.placeholder = '' : false;

		// if (this.placeholder === input_place) {

		// 	this.placeholder = '';
		// }
	};

	input.onblur = function(){

		'use strict';

		var place = this.placeholder === '' ? this.placeholder = input_place : false;

		// if (this.placeholder === '') {

		// 	this.placeholder = input_place;
		// }
	};
}

hide_placeholder(myInput , myPlaceholder);