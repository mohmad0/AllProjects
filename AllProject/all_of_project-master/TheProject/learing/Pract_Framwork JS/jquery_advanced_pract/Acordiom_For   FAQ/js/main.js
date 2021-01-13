/*global console , $*/

$(function(){

	'use strict';

	$('section div:first').css('display', 'block');

	$('section h3').on('click' , function(){

		$(this).next().slideToggle(500).end().siblings().next('div').slideUp(500);

	});
});