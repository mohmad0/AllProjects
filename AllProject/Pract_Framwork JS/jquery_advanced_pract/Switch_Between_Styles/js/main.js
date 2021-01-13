/*global console , $*/

$(function(){

	'use strict';

	$('button').on('click' , function(){

		$('link[href*="theme"]').attr('href' , 'css/' + $(this).val() + '.css');


	});
});