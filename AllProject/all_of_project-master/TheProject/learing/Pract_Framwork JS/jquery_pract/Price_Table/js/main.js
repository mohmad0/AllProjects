/*global console , $*/

$(function(){

	'use strict';

	// Calculate Table Cell Price Values

	var theSummary = 0,

		targetSelector = '.summary tr:not(:last-of-type) td:last-of-type',

		mainSelect = '.summary tr:first-of-type';

		// console.log($('table.summary tr').not(':last-of-type , :first-of-type').find('td:last-of-type'))

	$('table.summary tr').not(':last-of-type , :first-of-type').find('td:last-of-type').each(function(){

		theSummary += parseInt($(this).text());

	});

	// $('.price').each(function(){

	// 	theSummary += parseInt($(this).text());

	// });

	$('.the-total').text(theSummary)

});