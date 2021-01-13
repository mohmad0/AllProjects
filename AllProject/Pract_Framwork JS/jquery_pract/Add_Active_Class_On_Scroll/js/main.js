/*global console , $*/

$(function(){

	'use strict';

	// Calculate Body Padding Top Denpend On Navbar Height

	$('body').css('paddingTop', $('.navbar').innerHeight());

	// Smoothly Scroll To Element

	$('.navbar li a').click(function(e){

		e.preventDefault();

		$('html, body').animate({

			scrollTop: $( '#' + $(this).data('scroll')).offset().top + 10

		},1000);
	});

//////////////////////////////////////////////////////////////////////////////////////////////

	// Sync Navbar Links With Section
	$(window).scroll(function(){

		$('.block').each(function(){


			if ($(window).scrollTop() > $(this).offset().top) {

				var blockID = $(this).attr('id');

				console.log(blockID)

				$('.navbar a').removeClass('active');

				$('.navbar li a[data-scroll="'+ blockID +'"]').addClass('active')
			}

		});
	});

});