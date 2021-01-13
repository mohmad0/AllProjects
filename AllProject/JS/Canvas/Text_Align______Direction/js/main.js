/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d");

theConText.globalAlpha = .5;

theConText.strokeStyle = "#AAA";
theConText.lineWidth = 5;
theConText.moveTo(200 , 0);
theConText.lineTo(200 , 400);
theConText.stroke();

theConText.direction = "rtl";

theConText.font = "30px Tahoma";
theConText.fillStyle = "#f00";

theConText.textAlign = "start"; // This Will Change Olso After Make Direction To The Page
theConText.fillText("start" , 200 , 50);

theConText.textAlign = "end"; // This Will Change Olso After Make Direction To The Page
theConText.fillText("end" , 200 , 100);

theConText.textAlign = "center"
theConText.fillText("center" , 200 , 150);

theConText.textAlign = "left" // This Will Not Change Olso After Make Direction To The Page
theConText.fillText("left" , 200 , 200);

theConText.textAlign = "right" // This Will Not Change Olso After Make Direction To The Page
theConText.fillText("right" , 200 , 250);