/*global console , $*/

$(function(){

	'use strict';

	$(window).scroll(function(){


		// Scroll To Top Button

		var buttonScroll = $('.scroll-to-top');

		

		if ($(window).scrollTop() >= 700) {

			if (buttonScroll.is(':hidden')) {

				buttonScroll.fadeIn(600)

				buttonScroll.css('display' , 'inline-block')

			}

		}else{

			buttonScroll.fadeOut(800);

			buttonScroll.css('display' , 'none')
		}


	});

	$('.scroll-to-top').click(function(e){

		e.preventDefault();

		$('html, body').animate({

			scrollTop:0

		},1000);

	});

});