/*global console , $*/

$(function(){

	'use strict';

	$('#my-tabs li').on('click' , function(){

		var myID = $(this).attr('id');

		$(this).removeClass('inactive').siblings().addClass('inactive');

		$('.container divA').hide();

		$('#' + myID + '-content').fadeIn();

	});
});