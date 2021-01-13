/*global console , $*/

$(function(){

	'use strict';

	var myText = $('textarea').attr('maxlength');

	$('.msg').html('<span>' + myText + '</span> Character');

	$('textarea').on('input' ,function(){

		var textLength = $(this).val().length,

			remChars = myText - textLength;

		$('.msg').html('<span>' + remChars + '</span> Character');			

	});
});