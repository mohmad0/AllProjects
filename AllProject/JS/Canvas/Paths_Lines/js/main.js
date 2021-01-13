/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d");


// Bigin Path
theConText.beginPath();

// Select The Start Position Of The Path
theConText.moveTo(0,0);

// Select The Path Points
theConText.lineTo(325 , 200);



// Select The Start Position Of The Path
theConText.moveTo(700,0);

// Select The Path Points
theConText.lineTo(325 , 200);

// Adjust Style And Line Width
theConText.strokeStyle = "#00f";
theConText.lineWidth = 2;

theConText.stroke();