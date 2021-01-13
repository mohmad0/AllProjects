/*global console , $*/

$(function(){

	'use strict';

	// Create Warning
	Warning();
	
	function Warning() {

		$('.warning').fadeOut(1000 , function(){

			$(this).fadeIn(1000);

			Warning();

		});
	}

});