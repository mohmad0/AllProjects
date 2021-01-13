/*global console , $*/

$(function(){

	'use strict';

	// Buttons [ Left && Right ]

	$('.bottons-effects button').each(function(){

		$(this).prepend('<span></span>')


	});

	$('.from-left,.from-right ,.border-left,.border-right').hover(function(){

		$(this).find('span').eq(0).animate({

			width:'100%'


		},300)

	}, function(){


		$(this).find('span').eq(0).animate({

			width:0


		},300)

	});

	// Buttons [ Top && Bottom ]

	$('.from-top,.from-bottom , .border-top, .border-bottom').hover(function(){

		$(this).find('span').eq(0).animate({

			height:'100%'


		},300)

	}, function(){


		$(this).find('span').eq(0).animate({

			height:0


		},300)

	});

	// Bounce Effect

	function bounceEle(selector , times , distance , speed){

		for(var i = 0; i < times; i = i + 1){

			$(selector).animate({

				top: '-=' + distance

			},speed).animate({

				top: '+=' + distance

			},speed);

		}

	}

	$('.bounce').on('click' , function(){

		bounceEle($(this) , 3 , 20 , 300)

	});


});