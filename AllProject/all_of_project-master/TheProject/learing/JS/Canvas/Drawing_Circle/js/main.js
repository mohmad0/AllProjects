/*global console , $*/


// Select The Canvas Element
let theCanvas = document.getElementById("our-canvas"),
	
	// Select Context Type
	theConText = theCanvas.getContext("2d"),

	// Full Circal
	theCircal = 2 * Math.PI;


// Bigin Path
theConText.beginPath();



// Adjust Style And Line Width
theConText.strokeStyle = "#00f";
theConText.lineWidth = 2;

theConText.arc(200 , 200 , 150 , 0 , 0.9 * theCircal) // ==> arc(width , height , Half Radian , begin of Circal , End of Circal)

theConText.stroke();


/*

	360 Degree = Full Circal
	2 Radians = 360 Degree = Full Circal ==> 6.283185307179586 [ Math.PI * 2 ]
	1 Radians = 180 Degree = Half Circal ==> 3.141592653589793 [ Math.PI ]

*/