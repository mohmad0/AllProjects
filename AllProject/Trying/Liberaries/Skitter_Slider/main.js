// global, $

$(document).ready(function() {
  $(".skitter-large").skitter({
  		controls:true,
  		focus:true,
  		interval:2500,
  		numbers:true, // this is do when  dots ===> false
  		numbers_align:'right',
  		dots:false, 
  		label_animation:'right',
  		navigation:true,
  		progressbar:true,
  		progressbar_css: { backgroundColor:"#f00" },
  		theme:'square',    // minimalist, round, clean, square
  		responsive: { 		small: 
  							{ navigation: true, max_width: 768}, 
  							medium: 
  								{ navigation: true, max_width: 1300} 
  					}
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

  		// auto_play:true,
  		// navigation:true,
  		// numbers:true, // this is do when  dots ===> false
  		// numbers_align:'right',
  		// controls:true,
  		// controls_position:"rightBottom",
  		// focus:true,
  		// focus_position:'leftBottom',
  		// fullscreen:false,
  		// interval:5000,
  		// dots:false, 
  		// preview:true,
  		// label_animation:'right'
  		// progressbar_css: { backgroundColor:"#f00" }

////////////////////////////////////////////////////////////////////////////////////////////////////////

// $(function () {

// 	'use strict';

//  	$(".skitter-large").skitter({
//  		auto_play:true,
//  		controls:true,
//  		controls_position:"rightBottom"
//  	});
// });