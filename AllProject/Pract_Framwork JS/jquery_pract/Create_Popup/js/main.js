/*global console , $*/

$(function(){

	'use strict';

	$('.show-popup').click(function(){


		$($(this).data('popup')).fadeIn();

	});

	$('.popup').click(function(){

		$(this).fadeOut();

	});

	$('.popup .inner').click(function(e){

		e.stopPropagation();

	});


	$(' .popup .inner .close').click(function(e){

		e.preventDefault();

		$(this).parents('.popup').fadeOut();

	});

////////////////////////////////////////////////////////////////////////////////////////////////////////

// FadeOut By ==> Escape In Keybourd [ Esc == 27 ]

	$(document).keydown(function(e){

		if (e.keyCode == 27) { // [ Esc == 27 ]

			$('.popup').fadeOut();

		}

	});



});