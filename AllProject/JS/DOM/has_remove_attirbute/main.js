/* global console  */


/*
	hasAttribute('alt');
	removeAttribute('alt');

*/

var myimg = document.querySelector('img');

if(myimg.hasAttribute('alt')) {
	if(myimg.alt === ''){
		myimg.removeAttribute('alt');
	} else{
		console.log('The Attirbute Is Not Empty...')
	}
}