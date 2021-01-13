/* global $, console, jquery */

$(function(){

	'use strict';

	// Add Class Transparent On Navbar
	$(window).on('scroll' , function(){
		var nav = $('nav'),

			navBrand = $('.navbar-inverse .navbar-brand');
		if ($(window).scrollTop() > $('nav').innerHeight()) {

			if (!(nav.hasClass('nav-transparent'))) {

				nav.addClass('nav-transparent');
			};

			navBrand.css("color" , "#000")
			navBrand.hover(function(){

				$(this).css("color" , "#fff")

			},function(){

				$(this).css("color" , "#000")
			});

		}else{

			nav.removeClass('nav-transparent')
			navBrand.css("color" , "#9d9d9d")
			navBrand.hover(function(){

				$(this).css("color" , "#fff")

			},function(){

				$(this).css("color" , "#9d9d9d")
			});
		}
	});

	// Add Active Class And Remove It From Siblings
	$('.tabs-section .tab-switch li').on('click' , function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	// Show Content Tab
	$('.tabs-section .tab-switch li').each(function(){

		$(this).on('click' , function(){

			$($(this).attr('data-class')).fadeIn(600).siblings().hide()

		});

	});

	// // Add Active Class And Remove It From Siblings In Links
	$('.navbar .nav li').on('click' , function(){

		$(this).addClass('active').siblings().removeClass('active');

	});
});