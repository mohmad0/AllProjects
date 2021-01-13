/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d"),

	// The Gradient
	theGradient = theConText.createLinearGradient( 0 , 0 , 400 , 300); // createLinearGradient(x0 , y0 , x1 . y1)

/*
	x0 => Gradient Start From Left
	y0 => Gradient Start From Top
	x1 => Gradient End From Left
	y1 => Gradient End From Top

*/

// Add Color Stops
theGradient.addColorStop(0 , "#fff");
theGradient.addColorStop(1 , "#000");

// Select Fill Style [ Default Color Is ==> Black ]
// theConText.fillStyle = theGradient; // Color , Gradient , Pattern


// Select Image
let theImage = document.getElementById("our-image");

// Create The Pattern
let thePattern = theConText.createPattern(theImage , 'repeat-x'); // createPattern(image or video or canvas , repeat or no-repeat or repeat-x or repeat-y)

theConText.fillStyle = thePattern;

// Draw Rectangle
theConText.fillRect(0 , 0 , theCanvas.width, theCanvas.height);


// fillRect(left or right , top or bottom , width , height)