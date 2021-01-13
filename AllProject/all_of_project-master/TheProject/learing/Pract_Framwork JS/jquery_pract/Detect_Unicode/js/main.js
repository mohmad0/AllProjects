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


	$('.our-form form input[type="file"]').wrap('<div class="custom-file"></div>');

	$('.custom-file').prepend('<span>Upload Your Files Now!</span>');

	$('.custom-file').prepend('<i class="fa fa-upload fa-lg" aria-hidden="true"></i>');


	$('.custom-file').css({

		'padding' : $('.our-form form input[type="text"]').css('padding'),

		'height'  : $('.our-form form input[type="text"]').css('height')

	});

	// After Uploading File Do This Now!
	$('.our-form form input[type="file"]').change(function(){

		$(this).prev('span').text($(this).val().slice(12))

	});


	/// Detect Unicode

	$('.detect-unicode').on('keyup' , function(e){ // keyCode && which This Will Git The ==> [ Keybourd Unicode ]

		// keyCode == which But You Wright This For All Browsers
		var keybourdcode = e.keyCode || e.which;

		$('.unicode').html(keybourdcode);

	});

	// Websites For Keybourd [ Unicode ] And { ASCII ==> [ American Standard Code for Information Interchange ] }

	/*

		1- https://unixpapa.com/js/key.html

		2- https://www.ascii-code.com/

	*/


});