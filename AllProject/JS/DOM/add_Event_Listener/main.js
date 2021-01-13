var myhide = document.querySelector('.hide'),
	mypower = document.querySelector('.power');

myhide.onclick = function(){

	'use strict';

	document.querySelector('.div1').style.display = 'none';
}


mypower.onclick = function(){

	'use strict';

	myhide.addEventListener('click' , function(){ // This Will Add click On myhide ===>  myhide has tow click on one click 

		document.querySelector('.div2').style.display = 'none';

	});

	
}