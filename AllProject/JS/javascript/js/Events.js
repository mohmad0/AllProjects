
	window.onload = function () {
						document.getElementById('mydiv8').innerHTML = 'hello mohmad gamal'
					}



	window.onclick =  function onclickChange() {
						document.getElementById('mydiv8').innerHTML = 'hello mohmad gamal'
					}


	window.ondblclick =  function onclickChange() {
						document.getElementById('mydiv8').innerHTML = 'hello mohmad gamal'
					}




// <button onclick="onclickChange()" ondblclick="ondblclickChange()" >change</button>

///////////////////////////////////////////////////////////////////////////////////////////////////

var myInput = document.getElementById('input'),

	myDiv = document.getElementById('result')
	

myInput.onkeyup = function () {

	'use strict';

	myDiv.innerHTML = myInput.value * 16;
};





myInput.onkeypress = function () {

	'use strict';

	myDiv.innerHTML = myInput.value * 16;
};



myInput.onkeydown = function () {

	'use strict';

	myDiv.textContent = myInput.value * 16;
}




///////////////////////////////////////////////////////////////////////////////////////////////////


var myInput = document.getElementById('input'),

	myDiv = document.getElementById('result'),

	mycurrent = document.getElementById('current');




mycurrent.onchange = function(){ 

	'use strict'

	myDiv.textContent = 'Worth ' + input.value * current.value + ' Egyption Pound'
}



var myDiv = document.getElementById('thediv');

myDiv.onmouseout = function(){ 

	'use strict'

	myDiv.textContent = 'hello mohmad this is onmouseout'
}





var myDiv = document.getElementById('thediv');

myDiv.onmouseover = function(){ 

	'use strict'

	myDiv.textContent = 'hello mohmad this is onmouseout'
}







