/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d");


// Bigin Path
theConText.beginPath();

// // Select The Start Position Of The Path
// theConText.moveTo(100,100);

// // Select The Path Points
// theConText.lineTo(100 , 300);
// theConText.lineTo(300 , 300);
// theConText.lineTo(400 , 200);

theConText.moveTo(theCanvas.clientWidth * 0.5,0);

theConText.lineTo(0,theCanvas.height - 100);

theConText.lineTo(theCanvas.clientWidth,theCanvas.height - 100);

theConText.closePath()

theConText.moveTo(theCanvas.clientWidth * 0.5,theCanvas.height);

theConText.lineTo(theCanvas.clientWidth,theCanvas.height - 300);

theConText.lineTo(0,theCanvas.height - 300)

// Closing The Path
theConText.closePath()

// Adjust Style And Line Width
theConText.strokeStyle = "#00f";
theConText.lineWidth = 2;

theConText.stroke();

console.log(theCanvas.clientWidth * 0.5);

// theConText.fill()

/*

	theConText.moveTo(200,0)
	undefined
	theConText.lineTo(0,300)
	undefined
	theConText.lineTo(theCanvas.clientWidth,300)
	undefined
	theConText.closePath()
	undefined
	theConText.stroke();
	undefined
	theConText.moveTo(200,400)
	undefined
	theConText.lineTo(theCanvas.clientWidth,100)
	undefined
	theConText.lineTo(0,100)
	undefined
	theConText.closePath()
	undefined
	theConText.stroke()

*/