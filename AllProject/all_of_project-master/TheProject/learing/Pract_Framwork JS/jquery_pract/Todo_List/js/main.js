/*global console , $*/

$(function(){

	'use strict';

	// Create ToDo List

	var newTask = $('.task-input');

	$('.add-task').on('submit' , function(e){

		e.preventDefault();

		if (newTask.val() != '') {

			$('<li>'+ newTask.val() +'</li>').prependTo('.tasks');

			newTask.val('');
		}

	});

	$('.tasks').on('click' , 'li' , function(){

		$(this).css('text-decoration' , 'line-through').delay(200).fadeOut(400 , function(){

			$(this).remove();

		});

	});

});