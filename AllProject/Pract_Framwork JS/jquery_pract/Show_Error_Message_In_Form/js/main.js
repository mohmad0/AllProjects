/*global console , $*/

$(function(){

	'use strict';

	$('[required]').blur(function(){

		if ($(this).val() == '') {

			$(this).next().fadeIn()

			.delay(2000).fadeOut();
		}

	});


});