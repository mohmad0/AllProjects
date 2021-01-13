var myInputText = document.querySelector('.text-content');


function hide_placeholder(placeholder_input){

	placeholder_input.setAttribute('data-store' , placeholder_input.getAttribute('placeholder'));

	if(placeholder_input.value == ''){

		placeholder_input.onfocus = function(){

			'use strict';

			this.setAttribute('placeholder' , '');

		 }

		placeholder_input.onblur = function(){ 

			'use strict';

			this.setAttribute('placeholder' , this.getAttribute('data-store'));

		 }
	
	}
}

hide_placeholder(myInputText);

///////////////////////////////////////////////////////////////////////////////////////////////////////


// Onther Method

/*
	

		myInputText.onfocus = function(){

			'use strict';

			// Set Placeholder In Other Attr

			myInputText.setAttribute('data-store' , myInputText.getAttribute('placeholder'));

			// Empty The placeholder Attr

			this.setAttribute('placeholder' , '');

		 };

		 myInputText.onblur = function(){ 

			'use strict';

			// Get Placeholder From The Other Attr

			this.setAttribute('placeholder' , this.getAttribute('data-store'));

			// Empty The Other Attr

			this.setAttribute('data-store' , '');

		 };


*/



	// else{

	// 	this.onblur = function(){ 

	// 		this.setAttribute('placeholder' , this.getAttribute('data-store'));

	// 	 }
	// }

	// var cond_holder = myInputText.value != '' ? this.setAttribute('placeholder' , 'data-store')  : this.setAttribute('placeholder' , '') ;

	// var cond_length = condition ? true : false;


