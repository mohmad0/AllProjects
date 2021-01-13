/*global console , $*/

$(function(){

	'use strict';

	var scrollBotton = $('.container .fa-chevron-up');

	$(window).on('scroll' , function(){

		// $(this).scrollTop() >= 600 ? scrollBotton.show(): scrollBotton.hide();

		if ($(this).scrollTop() >= 600) {

			scrollBotton.show()

		}else{

			scrollBotton.hide()
		}

	});

	scrollBotton.on('click' , function(){

		$('html,body').animate({

			scrollTop:0

		},1000);

	});
});