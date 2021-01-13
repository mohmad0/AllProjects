/*Global, $ , console , jquery*/

$(function(){

	'use strict';

	// Adjust Slider Height
	var winH  = $(window).height(),
		upperH = $('.upper-bar').innerHeight(),
		navH  = $('.navbar').innerHeight();

	$('.slider,.carousel-item').height(winH - (upperH + navH));

	// Add Class Active And Remove It From Siblings
	$('.slider .carousel-indicators li').on('click' , function(){

		$(this).addClass('active').siblings().removeClass('active')

	});

	// 

	$('.featured-work ul li').on('click' , function(){
		$(this).addClass('active').siblings().removeClass('active');

		if ($(this).data('class') === 'all') {

			$('.shuffle-images .col-md').css('opacity' , 1);

		}else{
			
			$('.shuffle-images .col-md').css('opacity' , '.08');

			$($(this).data('class')).parent().css('opacity' , 1);
		}

	});

});