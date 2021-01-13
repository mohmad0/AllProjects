/*global console , $*/

$(function(){

	'use strict';

	// Dynamic Tabs

	$('.tabs-list li').on('click' , function(){

		$(this).addClass('active').siblings().removeClass('active');

		$('.content-list > div').hide();

		$($(this).data('content')).fadeIn();

	});

	// Switch Tabs

	$('.switch-tabs').on('click' , function(){

		$('.dynamic-tab').toggleClass('left-tabs')

	});

});