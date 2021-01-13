/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d");


// Background Rectangle
theConText.fillStyle = "#666";
theConText.fillRect(0 , 0 , theCanvas.clientWidth , theCanvas.clientHeight);

// Main Face Circal
theConText.beginPath();
theConText.fillStyle = "#ffff02";
theConText.arc(200 , 200 , 100 , 0 , Math.PI * 2);
theConText.fill();


// Mouth Circal
theConText.beginPath();
theConText.fillStyle = "#fff";
theConText.arc(200 , 200 , 80 , 0 , Math.PI);
theConText.stroke();
// theConText.fill();

// Left Eye
theConText.beginPath();
theConText.fillStyle = "#000";
theConText.arc(160 , 160 , 15 , 0 , Math.PI * 2);
theConText.fill();

// Right Eye
theConText.beginPath();
theConText.fillStyle = "#000";
theConText.arc(250 , 160 , 15 , 0 , Math.PI * 2);
// theConText.fill();
theConText.stroke();