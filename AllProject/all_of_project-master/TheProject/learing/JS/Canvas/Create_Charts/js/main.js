/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d"),

	// Canvas Width
	w = theCanvas.clientWidth,

	// Canvas Height
	h = theCanvas.height;

	// Set Global Font
	theConText.font = "30px Tahoma";

// Draw Chart Column
theConText.fillStyle = "#d35400";
theConText.fillRect(50 , 50 , 60 , h - 50);
theConText.fillStyle = "#fff";
theConText.fillText("1" , 70 , h - 15);

// Draw Chart Column
theConText.fillStyle = "#16a085";
theConText.fillRect(150 , 100 , 60 , h - 100);
theConText.fillStyle = "#fff";
theConText.fillText("2" , 170 , h - 15);

// Draw Chart Column
theConText.fillStyle = "#673AB7";
theConText.fillRect(250 , 150 , 60 , h - 150);
theConText.fillStyle = "#fff";
theConText.fillText("3" , 270 , h - 15);

// Draw Chart Column
theConText.fillStyle = "#d35400";
theConText.fillRect(350 , 200 , 60 , h - 200);
theConText.fillStyle = "#fff";
theConText.fillText("4" , 370 , h - 15);

// Draw Chart Column
theConText.fillStyle = "#16a085";
theConText.fillRect(450 , 250 , 60 , h - 250);
theConText.fillStyle = "#fff";
theConText.fillText("5" , 470 , h - 15);

// Draw Chart Column
theConText.fillStyle = "#673AB7";
theConText.fillRect(550 , 300 , 60 , h - 300);
theConText.fillStyle = "#fff";
theConText.fillText("6" , 570 , h - 15);