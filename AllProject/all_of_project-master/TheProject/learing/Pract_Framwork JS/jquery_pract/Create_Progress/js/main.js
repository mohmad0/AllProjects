/*global console , $*/

$(function(){

	'use strict';


	$('.animated-progress span').each(function(){

		$(this).animate({

			width: $(this).data('progress') + '%'

		}, 1000 , function(){

			$(this).text($(this).data('progress') + '%')

		} );


	});


});