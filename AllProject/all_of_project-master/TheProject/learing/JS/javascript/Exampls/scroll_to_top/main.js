var clickToTop = window.document.querySelector('button');

window.onscroll = function(){

	'use strict';

	if(window.scrollY >= 500){

		clickToTop.style.display = 'block';

	}else{

		clickToTop.style.display = 'none';


	}
};

window.console.log(window.scrollY)

clickToTop.onclick = function(){

	'use strict';

	window.scrollTo(0 , 0  );


};