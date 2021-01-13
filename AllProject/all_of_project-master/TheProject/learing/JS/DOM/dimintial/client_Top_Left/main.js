/* global console */

/*
	Client Left && Top:
		viewable Area
		No Padding 		==> will Not Calculate Padding
		No Margin		==> will Not Calculate Margin
		Include Border	==> will Calculate Border
		Include Scroll	==> will Calculate Scroll

*/


var mymain = document.querySelector('.main');

	
console.log('Left Border Width In Px = ' + mymain.clientLeft + 'px');

console.log('Top Border Width In Px = ' + mymain.clientTop + 'px');