/*global console , $*/

$(function(){

	'use strict';

	(function animateImg(){

		$('.offer img').animate({

			top: '-300px'

		},1000, function(){



			$(this).animate({

				top: '-230px'

			},1000 , function(){

				animateImg()

			});

		});

	}());

});
