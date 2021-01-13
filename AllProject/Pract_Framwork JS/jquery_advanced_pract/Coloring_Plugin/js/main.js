/*global console , $*/

$(function(){

	'use strict';

	$.prototype.makeRed  = function(){ // fn ==> Is An Elias To prototype mean ==> $.fn == $.prototype

		$(this).css('color' , 'red');

		return $(this);

	}

	$('.our-text').makeRed();

	$('.our-div').makeRed();
});