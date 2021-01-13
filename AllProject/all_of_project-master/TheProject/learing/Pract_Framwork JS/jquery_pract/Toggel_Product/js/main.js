/*global console , $*/

$(function(){

	'use strict';

	$('.products .product i').on('click' , function(){

		$(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();

	});


});