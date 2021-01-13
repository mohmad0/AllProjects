var mymain = document.querySelector('.main'),
	myspan = document.getElementById('mychild');


	// contains 

if (mymain.contains(myspan)){ // This Will Search about any myspan in mymain  

	myspan.textContent  =  'This Changed By Javascript';
}else{
	console.log('Error');
}