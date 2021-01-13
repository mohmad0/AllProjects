/* global console */


var mymain = document.getElementById('go');

mymain.onclick = function(){

	'use strict';

	document.documentElement.scrollTop += 100;

	document.documentElement.scrollLeft += 100;

	console.log(document.documentElement.scrollTop); // This Will Calculate The Space Between The Top Of Page And Element

	console.log(document.documentElement.scrollLeft); // This Will Calculate The Space Between The Left Of Page And Element

	if(document.documentElement.scrollTop >= 1000){

		this.classList.add('active');
	}
};
	
// console.log(mymain.offsetHeight + 'px');

// console.log(mymain.offsetWidth + 'px');