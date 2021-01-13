/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d"),

	// Full Circal
	theCircal = 2 * Math.PI;

theConText.fillStyle = "#607d8b";

theConText.fillRect(100 , 100 , 100 , 100);

// Save The Clean State Without Any Scale Or Anything
theConText.save();


// Second Box
theConText.scale(2 ,2);
theConText.fillStyle = "#335";
theConText.fillRect(70 , 110 , 100 , 100);

// Restore The Clean State Without Any Scale Or Anything
theConText.restore();

// Third Box
theConText.translate(120 ,-90);
theConText.fillStyle = "#080";
theConText.fillRect(100 , 100 , 150 , 150);