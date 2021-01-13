/* global console */

/*
	Offset Height && Width:
		viewable Area
		Include Padding ==> will Calculate Padding
		Include Border	==> will Calculate Border
		Include Scroll	==> will Calculate Scroll
		No Margin		==> will Not Calculate Margin

*/






var mymain = document.querySelector('.main');
	
console.log(mymain.offsetHeight + 'px');

console.log(mymain.offsetWidth + 'px');