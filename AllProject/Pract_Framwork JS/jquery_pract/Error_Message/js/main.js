/*global console , $*/

$(function(){

	'use strict';

	$('.error-message').each(function(){

		$(this).animate({

			top:'50%'

		},2500 , function(){

			$(this).css('background-color' ,'#FF5722').delay(2000).fadeOut();

		});


	});


});