/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d"),

	// Full Circal
	theCircal = 2 * Math.PI;

theConText.shadowColor = "rgba(0 , 0 , 0 , .4)";

theConText.shadowBlur = 20;

theConText.shadowOffsetX = "10";

theConText.shadowOffsetY = "-10";

theConText.fillStyle = "#607d8b";

theConText.fillRect(100 , 100 , 200 , 100);