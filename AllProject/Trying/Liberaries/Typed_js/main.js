/* global $, smoothscroll*/

$(function () {

	'use strict';

	var typed = new Typed('.one', {
	  // Waits 1000ms after typing "First"
	  	strings: ['welcome in my website'],
		loop:true,
		showCursor: false,
		typeSpeed:50,
		startDelay:2900
	});

	var typed = new Typed('.tow', {
	  // Waits 1000ms after typing "First"
		strings: ['my name mohmad gamal'],
		startDelay:2900,
		loop:true,
		typeSpeed:50
	});

	// var typed = new Typed('.element', {
	// // Waits 1000ms after typing "First"
	// 	strings: ['First ^1000 sentence.', 'Second sentence.']
	// });

	// var typed = new Typed('.one', {
	//   // Waits 1000ms after typing "First"
	//   	strings: ['welcome in my website'],
	// 	loop:true,
	// 	loopCount:3,
	// 	showCursor: false
	// });

});