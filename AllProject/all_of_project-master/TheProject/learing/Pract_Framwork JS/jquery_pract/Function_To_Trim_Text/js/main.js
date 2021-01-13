/*global console , $*/

$(function(){

	'use strict';

	// Trim Paragragh Text Characters

	function trimText(selector , maxLength){


		$(selector).each(function(){

			var mainText = $(selector).text();

			if ($(this).text().length > maxLength) {

				var trimedText = $(this).text().slice(0, maxLength);

				$(this).html(trimedText + ' <a href="#">More...</a>');

				$(this).find('a').on('click' , function(e){

					e.preventDefault();

					$(selector).text(mainText);

				});

			}

		});

	}

	trimText('.trimed-text .one' , 100);
	trimText('.trimed-text .tow' , 10);


});