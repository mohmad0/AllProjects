/*global console , $*/

$(function(){

	'use strict';

	$('form i.fa-eye').hover(function(){

		$('form input[type="password"]').attr('type' , 'text')

	},function(){

		$('form input').attr('type' , 'password')

	});

});