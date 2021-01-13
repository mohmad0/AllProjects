var myPass = window.document.querySelector('input'),
	
	myshow_hide = window.document.querySelector('span');

function show_hide_password(input_pass , place_hover){

	place_hover.onmouseenter = function(){

		'use strict';

		input_pass.setAttribute('type' , 'text');

		this.textContent = 'Hide'

	};

	place_hover.onmouseleave = function(){

		'use strict';

		input_pass.setAttribute('type' , 'password');

		this.textContent = 'Show'

	};
}

show_hide_password(myPass , myshow_hide);
