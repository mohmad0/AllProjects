/*global console , $*/

$(function(){

	'use strict';

	$.extend($.expr[':'] , {

		heightMoreThan100: function (el) {

			if ($(el).height() > 100) {

				return $(el);
			}


		}

	});

	$.extend($.expr[':'] , {

		blueElement: function(e){

			if ($(e).css('color') === 'rgb(0, 0, 255)') {

				return $(e);
			}

		}

	});

	$('ul .active:blueElement').css('border' , '5px solid green')

	// $('ul li:heightMoreThan100').css('color' , 'red')
});