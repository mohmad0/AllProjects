/*global console , $*/

$(function(){

	'use strict';

	// Email Suggest Box

	var emailProviders = ['gmail.com','hotmail.com','outlook.com','yahoo.com'],

		finalString = '';

		

	$('.email-suggest').on('keyup' ,  function(){

		finalString = '';

		if (! $(this).next().is('.suggest-box')) {

			$('<ul class="suggest-box"></ul>').insertAfter($(this));
		}

		for(var i = 0; i < emailProviders.length; i++){

			finalString += '<li>' + $(this).val() + '@' + emailProviders[i] + '</li>';
		}

		$('.suggest-box').html(finalString);

		$('body').on('click' , '.suggest-box li' , function(){

			$('.email-suggest').val($(this).text());

			$(this).parent().fadeOut().remove();

		});

	});



	


});