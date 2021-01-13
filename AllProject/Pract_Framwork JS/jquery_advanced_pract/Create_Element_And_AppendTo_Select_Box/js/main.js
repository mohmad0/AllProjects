/*global console , $*/

$(function(){

	'use strict';

	for(var i = 1950; i <= 2020; i = i + 1){

		$('<option>',{value: i , text: i}).appendTo('#years');

		$('<li>' , {class: 'active' , id: 'good' , text: 'mohmad'}).appendTo('ul');
	}
});