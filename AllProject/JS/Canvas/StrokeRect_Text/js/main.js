/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d"),

	// The Gradient
	theGradient = theConText.createLinearGradient( 0 , 0 , 400 , 300); // createLinearGradient(x0 , y0 , x1 . y1)

// Add Color Stops
theGradient.addColorStop(0 , "#fff");
theGradient.addColorStop(1 , "#000");

// Control Line Width
theConText.lineWidth = 4;


theConText.strokeRect(0 , 0 , 200, 200);

// Set Font
theConText.font = "40px Tahoma";

// theConText.fillStyle = theGradient;

// Create Filled Text
// theConText.fillText('Hello Mohmad Gamal' , 10 , 50, 200)


theConText.strokeStyle = theGradient;

// Create Stroke Text
theConText.strokeText('Hello Mohmad Gamal' , 50 , 100, 400)
