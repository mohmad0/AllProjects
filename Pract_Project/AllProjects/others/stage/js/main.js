/*global $ , jquery , console*/

$(function () {

	"use strict";


	// Type Wrighter In Slide
	var thePlacehead = $('.slider .carousel-inner div h1'),
		thePlacespan = $('.slider .carousel-inner div span'),
		theTextHead	 = 'Were An Independent Company Are The Greatest In The World Has',
		theTextSpan  = 'Awesome/Cars';

		function autoWrightText(selector , text , speed){


			var theText = text,

				theTextLength = theText.length,

				n = 0,

				theTyper = setInterval(function(){

					$(selector).html($(selector).html() + theText[n]);

					n++;

					if (n === theTextLength) {

						clearInterval(theTyper);
					}

				},speed);

		}

		autoWrightText(thePlacehead , theTextHead , 100);
		autoWrightText(thePlacespan , theTextSpan , 500);

		$(window).scroll(function(){

			'use strict';

			// Scroll To Top Button

			var buttonScroll = $('.scroll-to-top');

			if ($(window).scrollTop() >= 700) {

				if (buttonScroll.is(':hidden')) {

					buttonScroll.fadeIn(600)

					buttonScroll.css('display' , 'inline-block')

				}

			}else{

				buttonScroll.fadeOut(800);

				buttonScroll.css('display' , 'none')
			}


		});

		$('.scroll-to-top').click(function(e){

			e.preventDefault();

			$('html, body').animate({

				scrollTop:0

			},1000);

		});



	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// Select The Canvas Element
let canvasHTML   			 = document.getElementById("canvas-html"),

	canvasCSS 	 			 = document.getElementById("canvas-css"),

	canvasHTML5  			 = document.getElementById("canvas-html5"),

	canvasCSS3   			 = document.getElementById("canvas-css3"),

	canvasJS 	 			 = document.getElementById("canvas-js"),

	canvasJquery 			 = document.getElementById("canvas-jquery"),

	canvasDOM   			 = document.getElementById("canvas-dom"),

	canvasBOM 	 			 = document.getElementById("canvas-bom"),

	canvasES6  				 = document.getElementById("canvas-es6"),

	canvasCommand 			 = document.getElementById("canvas-command"),

	canvasGithub 			 = document.getElementById("canvas-github"),

	canvasPugjs   			 = document.getElementById("canvas-pugjs"),

	canvaSass   		 	 = document.getElementById("canvas-sass"),

	canvasBootstrap3 	 	 = document.getElementById("canvas-bootstrap3"),

	canvasBootstrap4 		 = document.getElementById("canvas-bootstrap4"),

	canvasAjax  		 	 = document.getElementById("canvas-ajax"),

	canvasJson 	 		 	 = document.getElementById("canvas-json"),

	canvasVue 		 	 	 = document.getElementById("canvas-vue"),

	canvasCanvas 	 		 = document.getElementById("canvas-canvas"),

	canvasGulpjs 			 = document.getElementById("canvas-gulpjs");





// function animationProgress(selctor, start , text , widthText , heightText , end){

// 	var ctx	= selctor.getContext("2d");
// 	var al  = start;
// 	var start  = 4.72;
// 	var cw  = ctx.canvas.width;
// 	var ch  = ctx.canvas.height;
// 	var diff;
// 	function progressSim(){
// 		diff = ((al / 100) * Math.PI*2*10).toFixed(2);
// 		ctx.clearRect(0 , 0 , cw , ch);
// 		ctx.lineWidth = 10;
// 		ctx.fillStyle = '#fff';
// 		ctx.strokeStyle = "#607d8b";
// 		ctx.textAlign = "center";
// 		ctx.fillText(al+'%' , cw*.5+10 , ch*.5, cw*2);
// 		ctx.fillText(text , cw*.5+widthText , ch*.5+heightText, cw*2);
// 		ctx.font = "20px Tahoma";
// 		ctx.beginPath();
// 		ctx.arc(110 , 110 , 70 , start , diff/10+start , false);
// 		ctx.stroke();
// 		if (al >= end) {
// 			clearInterval(sim);

// 		};
// 		al++;
// 	}

// 	var sim = setInterval(progressSim , 10);

// }

$(function(){

	'use strict';


	$('.skiles .animated-progress span').each(function(){

		$(this).animate({

			width: $(this).data('progress') + '%'

		}, 1000 , function(){

			$(this).text($(this).data('progress') + '%' + ' ' + $(this).text())

		} );


	});


});




// var ProgressBar = require('progressbar.js')
// var line = new ProgressBar.Line('#container');


// require.config({
//     paths: {'progressbar': '../bower_components/progressbar.js/dist/progressbar'}
// });

// define(['progressbar'], function(ProgressBar) {
//     var line = new ProgressBar.Line('#container');
// });


// // If you aren't using any module loader, progressbar.js exposes
// // global variable: window.ProgressBar
// var line = new ProgressBar.Line('#container');


// // progressbar.js@1.0.0 version is used
// // Docs: http://progressbarjs.readthedocs.org/en/1.0.0

// var bar = new ProgressBar.Circle('.round', {  // container
//   color: '#aaa',
//   // This has to be the same size as the maximum width to
//   // prevent clipping
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false
//   },
//   from: { color: '#aaa', width: 1 },
//   to: { color: '#333', width: 4 },
//   // Set default step function for all animate calls
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//     var value = Math.round(circle.value() * 100);
//     if (value === 0) {
//       circle.setText('');
//     } else {
//       circle.setText(value);
//     }

//   }
// });
// bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
// bar.text.style.fontSize = '2rem';

// bar.animate(1.0);  // Number from 0.0 to 1.0

///////////////////////////////////////////////////////////////////////////////////////////////////////////


// var rowSkile = document.querySelector('.skiles .overlay .row')

// $(function(){

// 	function Circlle(el){
// 		$(el).circleProgress({fill: {color:'#ff5c5c'}})
// 		.on('circle-animation-progress' , function(event , progress , stepValue){
// 			$(this).find('strong').text(String(stepValue.toFixed(0))+'%');
// 		});
// 	}

// 	// Circlle('.round')


// 	$(window).scroll(function(){

// 		if ($(window).scrollTop() > $('.skiles .overlay .row').offset().top) {

// 			Circlle('.round')
// 		}
// 	});


// });




// $(function(){



// 	$(window).on('load',function(){



// 		animationProgress( canvasHTML, 0 , "HTML" , 10 , 26 , 95);

// 		animationProgress( canvasCSS, 0 , "CSS" , 10 , 26 , 95);

// 		animationProgress( canvasHTML5, 0 , "HTML5", 10 , 26 , 95);

// 		animationProgress( canvasCSS3, 0 , "CSS3" , 10 , 26 , 95);

// 		animationProgress( canvasJS, 0 , "Javascript" , 10 , 26 , 90);

// 		animationProgress( canvasJquery, 0 , "Jquery" , 10 , 26 , 95);


// 		animationProgress( canvasDOM, 0 , "DOM" , 10 , 26 , 90);

// 		animationProgress( canvasBOM, 0 , "BOM" , 10 , 26 , 90);

// 		animationProgress( canvasES6, 0 , "ES6", 10 , 26 , 90);

// 		animationProgress( canvasCommand, 0 , "Command Line" , 10 , 26 , 90);

// 		animationProgress( canvasGithub, 0 , "Git & Github" , 10 , 26 , 90);

// 		animationProgress( canvasPugjs, 0 , "Pugjs" , 10 , 26 , 95);


// 		animationProgress( canvaSass, 0 , "Sass" , 10 , 26 , 95);

// 		animationProgress( canvasBootstrap3, 0 , "Bootstrap3" , 10 , 26 , 95);

// 		animationProgress( canvasBootstrap4, 0 , "Bootstrap4", 10 , 26 , 95);

// 		animationProgress( canvasAjax, 0 , "Ajax" , 10 , 26 , 90);

// 		animationProgress( canvasJson, 0 , "Json" , 10 , 26 , 95);

// 		animationProgress( canvasVue, 0 , "Vuejs" , 10 , 26 , 70);


	
// 		animationProgress( canvasCanvas, 0 , "Canvas" , 10 , 26 , 85);

// 		animationProgress( canvasGulpjs, 0 , "Gulpjs" , 10 , 26 , 90);



// 	});





// });






//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Loading Screen
// $(window).on('load', function () {
// 	"use strict";

// 	$('.slide-up-effect').delay(500).slideUp(1000 , function(){

// 		"use strict";

// 		$("body").delay(5000).css("overflow","auto");
// 	});

// 	$('.slide-down-effect').delay(500).slideUp(1000 , function(){

// 		"use strict";

// 		$("body").delay(5000).css("overflow","auto");
// 	});

// 	$('.slide-left-effect').delay(500).animate({

// 		left:'-100%'

// 	},1000,function(){
// 		"use strict";

// 		$("body").delay(5000).css("overflow","auto");
// 	});

// 	$('.slide-right-effect').delay(500).animate({

// 		left:'100%'

// 	} , 1000 ,function(){
// 		"use strict";

// 		$("body").delay(5000).css("overflow","auto");
// 	});


// 	$('.slide-zoom-effect').delay(500).css({

// 		"transition": 'transform 1.5s ease-in-out',
// 		"transform": 'scale(0)'
// 	}).parent('body').css("overflow","auto");

// });