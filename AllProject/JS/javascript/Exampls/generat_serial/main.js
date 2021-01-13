var myButton = window.document.querySelector('button'),
	
	myDiv = window.document.querySelector('div');

function generateSerial(serialLength , placeSerial){

	var	Chars = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+":}{~<>?qwertyuiopasdfghjklzcvbnm',

		i,

		storeSerial = '',
		
		randomNumberSerial;

	for(i = 0 ; i < serialLength ; i = i + 1){

		randomNumberSerial = Math.floor(Math.random() * Chars.length);

		storeSerial += Chars.slice(randomNumberSerial , randomNumberSerial + 1 );
	}

	placeSerial.textContent = storeSerial;



}

myButton.onclick = function() {
		
		generateSerial(10 , myDiv);
}

