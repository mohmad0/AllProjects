var countDiv = window.document.querySelector('div'),
		
	secondPass;

function countMinut(seconds){

	var	countDown = setInterval(function(){

			'use strict';

			secondPass();

		}, 1000);

	function secondPass(){

		'use strict';

		var 

			days  = Math.floor((seconds / 86400)),

			hours = Math.floor(seconds / (60 * 60)),

			minutes = Math.floor(seconds / 60),

			remSeconds = seconds % 60;

		if (seconds < 10) {

			remSeconds = "0" + remSeconds;
		}

		if (hours == 24) {

			days = "0" + 1;
		}

		countDiv.textContent = days + ":" + hours + ":" + minutes + ":" + remSeconds;

		if (seconds > 0) {

			seconds = seconds - 1 ; // Decrease One Second Every 1000 Millsecond

		}else{

			clearInterval(countDown); // Stop Countdown Timer

			countDiv.textContent = 'Done';
		}

	}

}

countMinut(480);