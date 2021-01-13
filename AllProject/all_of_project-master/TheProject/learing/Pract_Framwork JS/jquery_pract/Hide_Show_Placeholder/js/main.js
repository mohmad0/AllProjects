/*global console , $*/

$(function(){

	'use strict';

	$('[placeholder]').focus(function(){

		$(this).attr( 'data-place' , $(this).prop('placeholder'));

		$(this).attr('placeholder' , '');



	}).blur(function(){

		$(this).attr('placeholder' , $(this).attr('data-place'));

	});


});