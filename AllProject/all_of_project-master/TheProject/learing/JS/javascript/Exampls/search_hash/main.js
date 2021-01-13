/*
	Method 1
*/

if(window.location.hash){

	var hash = window.location.hash.substring(1);

	if(hash === 'mohmad'){

		window.console.log('Good This Hash Is Found ');

	}else{
		window.console.log('Sorry This Hash Is Not Found ');
	}

}
else{
	window.console.log('There is No Hash');
}