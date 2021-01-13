/*global console , $*/

$(function(){

	'use strict';

		// Adjust Elements Height To Be Same
		var theMaxHeight = 0;

	// Loop On Elements To You Want To Adjust Height
	$('.same-height div').each(function(){

		if ($(this).height() > theMaxHeight) {

			theMaxHeight = $(this).height();
		}


	});

	$('.same-height div').height(theMaxHeight);

});