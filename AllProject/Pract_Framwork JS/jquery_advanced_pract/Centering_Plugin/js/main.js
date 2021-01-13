/*global console , $*/

$(function(){

	'use strict';

	$.fn.centering  = function(){  // fn ==> Is An Elias To prototype mean ==> $.fn == $.prototype

		$(this).css({

			'position': 'absolute',
		    'left': ($(window).width() - $(this).width()) / 2,
			'top': ($(window).height() - $(this).height()) / 2
		});

	}

	$('.our-text').centering();

	$('.our-div').centering();
});