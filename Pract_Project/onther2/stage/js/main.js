/*global $ , jquery , console*/

$(function () {
	"use strict";

	$(".toggle-sidebar").on("click", function () {
		$(".sidebar , .content-area").toggleClass("no-sidebar");
	});

	// Toggle Submenu
	$(".links-area > li > a").on("click", function () {
		$(this)
			.find(".toggle-submenu")
			.toggleClass("fa-angle-right fa-angle-down");
		$(this)
			.find(".toggle-submenu")
			.parent("a")
			.next(".child-links")
			.slideToggle();
	});

	// Open / Close Full Screen
	$('.toggle-fullscreen').on('click' , function(){
		$(this).toggleClass('full-screen');
		if ($(this).hasClass('full-screen')) { // Page Is Now Full Screen

			openFullScreen();

		}else{ // Page Is Not Now Full Screen

			closeFullscreen();

		}
	});

	// Show / Hide Settings Box
	$('.settings-box .toggle-settings').on('click' , function(){
		$(this).find('i').toggleClass('fa-spin')
		$(this).parent('.settings-box').toggleClass('hide-settings')
	});
	// Switch Color
	var colorThemes = [];
	$('.color-options li').each(function(){

		colorThemes.push($(this).data('theme'))

	});
	$('.color-options li').on('click' , function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('body').removeClass(colorThemes.join(" ")).addClass($(this).data('theme'))
	});

	// Switch Font
	var fontClasses = [];
	$('.font-option select option').each(function(){

		fontClasses.push($(this).val())

	});

	$('.font-option select').on('change' , function(){
		$('body').removeClass(fontClasses.join(" ")).addClass($(this).find('option:selected').val());
	});
});


var elem = document.documentElement;

function openFullScreen(){
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	}else if(elem.mozRequestFullscreen){
		elem.mozRequestFullscreen();
	}
	else if(elem.webkitRequestFullscreen){
			elem.webkitRequestFullscreen();
	}
	else if(elem.msRequestFullscreen){
			elem.msRequestFullscreen();
	}
}


function closeFullscreen(){
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}else if(document.mozCancelFullscreen){
		document.mozCancelFullscreen();
	}
	else if(document.webkitExitFullscreen){
			document.webkitExitFullscreen();
	}
	else if(document.msExitFullscreen){
			document.msExitFullscreen();
	}
}