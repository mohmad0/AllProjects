/*global console , $*/

$(function(){

	'use strict';

	// Shuffle Cards

	var zIndexValue = 0;

	$('.cards .card').on('click' , function(){

		$(this).animate({

			left: '25%',

			top: 80
		},400 ,function(){

			zIndexValue--;

			$(this).css('z-index' , zIndexValue);

		}).animate({

			left: $(this).css('left'),

			top:0

		},400);

	});

});