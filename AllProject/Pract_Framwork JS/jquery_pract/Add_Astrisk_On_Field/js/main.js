/*global console , $*/

$(function(){

	'use strict';

	$('[required]').blur(function(){

		if ($(this).val() == '') {

			$(this).next().fadeIn()

			.delay(2000).fadeOut();
		}

	});

	$('<span class="asterisk">*</span>').insertBefore(':input[required]');

	$('.asterisk').parent().css('position' , 'relative' );

	$('.asterisk').each(function(){

		$(this).css({

			'position' :'absolute',

			'top' : 13,

			'left' :$(this).parent('div').find(':input').innerWidth() - 15,

			'font-weight' : 'bold',

			'color' : '#E91E63'


		});


	});




});