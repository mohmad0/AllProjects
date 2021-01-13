/*global console , $*/

$(function(){

	'use strict';

	var numOfThumbnails = $('.thumbnails').children().length,

		marginBetweenThumbnails	= '.5',

		totalMarginBetweenThumbnails = (numOfThumbnails - 1) * marginBetweenThumbnails,

		thumbnailWidth = (100 - totalMarginBetweenThumbnails) / numOfThumbnails;


		$('.thumbnails img').css({

			'width': thumbnailWidth + '%',

			'margin-right': marginBetweenThumbnails + '%'
		});

	$('.gallery .thumbnails img').on('click' , function(){

		$(this).addClass('active').siblings().removeClass('active');

		$('.master-img img').hide().attr('src' , $(this).prop('src')).fadeIn(500);

	});

	$('.gallery .master-img .fa-chevron-right').on('click' , function(){

		if ($('.thumbnails .active').is(':last-of-type')) {

			$('.thumbnails img').eq(0).click();			

		}else{

			$('.thumbnails .active').next().click();	
		}

		

	});

	$('.gallery .master-img .fa-chevron-left').on('click' , function(){

		if ($('.thumbnails .active').is(':first-of-type')) {

			$('.thumbnails img').last().click();			

		}else{

			$('.thumbnails .active').prev().click();
		}


	});


});