/*global console , $*/

$(function(){

	'use strict';
	var ul = $('.container ul li');

	ul.eq(0).css('background-color', '#f00');
	ul.eq(1).css('background-color', '#00f');
	ul.eq(2).css('background-color', '#080');
	ul.eq(3).css('background-color', '#335');

	ul.on('click' , function(){

		$('.container div').css('background-color' , $(this).css('background-color'));

	

	});
});