/*global console , $*/

$(function(){

	'use strict';

	// Type Wright Effect

	function autoWrightText(selector , data , speed){


		var theText = $(selector).data(data),

			theTextLength = theText.length,

			n = 0,

			theTyper = setInterval(function(){

				$(selector).each(function(){

					$(this).html($(this).html() + theText[n]);

					n++;

					if (n === theTextLength) {

						clearInterval(theTyper);
					}

				});

			},speed);

	}

	autoWrightText('.one' , 'text' , 50);

	autoWrightText('.tow' , 'text' , 500);

});