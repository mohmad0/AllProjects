/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d");

// Select Fill Style [ Default Color Is ==> Black ]
theConText.fillStyle = "red"; // Color , Gradient , Pattern

// Draw Rectangle
theConText.fillRect(0 , 0 , theCanvas.width, theCanvas.height);


// fillRect(left or right , top or bottom , width , height)
