$(function (){
	'use strict';
	$('.switch-color-text li').on('click' , function(){
		$(":root").css("--main-color-text" , $(this).data('color'));
	});

	$('.switch-color-back li').on('click' , function(){
		$(":root").css("--main-color-back" , $(this).data('color'));
	});
});