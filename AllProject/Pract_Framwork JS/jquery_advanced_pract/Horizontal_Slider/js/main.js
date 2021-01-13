/*global console , $*/

$(function(){

	'use strict';

	$('.info').first().show().animate({width: '40%'},1000);

	$('.item').on('click' , function(){

		$(this).next().show().animate({width: '40%'},500).siblings('.info').animate({width: 0},400);

	});

});