/*global console , $*/

$(function(){

	'use strict';

	// $('.fixed-menu').css('left' , '-' + $(this).innerWidth())

	$('.fixed-menu .fa-gear').click(function(){


		$(this).parent('.fixed-menu').toggleClass('is-visible');

		if ($(this).parent('.fixed-menu').hasClass('is-visible')) {


			$(this).parent('.fixed-menu').animate({

				left:0

			}, 500);

			$('body').animate({

				paddingLeft: $(this).parent('.fixed-menu').innerWidth()

			},500);

		}else{

			$(this).parent('.fixed-menu').animate({

				left:-$(this).parent('.fixed-menu').innerWidth()

			}, 500);

			$('body').animate({

				paddingLeft:0

			},500);

		}


	});


});