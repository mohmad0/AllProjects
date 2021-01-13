/*global console , $*/

$(function(){

	'use strict';

	var theDivCount = $('.countdown').text(),

		ourCount = setInterval(function(){

		$('.countdown').text(theDivCount--);

		if (theDivCount < 0 ) {

			clearInterval(ourCount);

			$('.countdown').text('Done...');

			window.location.reload();
		}


	},1000);

});