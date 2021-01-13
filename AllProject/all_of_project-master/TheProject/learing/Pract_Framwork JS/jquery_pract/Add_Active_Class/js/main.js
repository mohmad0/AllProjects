/*global console , $*/

$(function(){

	'use strict';

	$('.navbar li a').click(function(){

		// Method 1 ==> Not Spesfic

		// $('.navbar a').removeClass('active');

		// $(this).addClass('active');

		// Method 2 ==>  Spesfic

		$(this).addClass('active').parent().siblings().find('a').removeClass('active'); // This Is More Spesfic

	});

});