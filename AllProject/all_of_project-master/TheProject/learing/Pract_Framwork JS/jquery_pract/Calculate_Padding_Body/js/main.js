/*global console , $*/

$(function(){

	'use strict';

	// Calculate Body Padding Top Denpend On Navbar Height

	$('body').css('paddingTop', $('.navbar').innerHeight() + 11);

});