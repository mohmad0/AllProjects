function showTime() {
	
	'use strict';
	var countDiv = window.document.querySelector('div'),
		
		now 	 = new Date(),

		hours	 = now.getHours() - 12,

		minutes	 = now.getMinutes(),

		seconds	 = now.getSeconds();

	if(hours < 10){

		hours = '0' + hours;
	}

	if(minutes < 10){

		minutes = '0' + minutes;
	}

	if(seconds < 10){

		seconds = '0' + seconds;
	}

	countDiv.textContent = hours + ":" + minutes + ":" + seconds;
}

window.onload = function () {

	'use strict';

	setInterval(showTime , 1000);

	window.console.log(new Date());
};
