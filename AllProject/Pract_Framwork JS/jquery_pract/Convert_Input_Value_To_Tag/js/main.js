/*global console , $*/

$(function(){

	'use strict';

	/// Convert Input alue To Tags

	$('.add-tag').on('keyup' , function(e){

		// keyCode == which But You Wright This For All Browsers
		var keybourdcode = e.keyCode || e.which;

		if (keybourdcode === 188) { // If Comma Pressed

			var theValue = $(this).val().slice(0 , -1); // This Will Return All Of Word Without The Lasst Character Of Word

				$('.tags').append('<span class="tag-span"><i class="fa fa-times"></i> '+ ' ' + theValue + ' ' +'</span>');

				$(this).val('');
		}

	});

	$('.tags').on('click' , '.tag-span i' , function(){

		$(this).parent('.tag-span').fadeOut(800);

	});

});