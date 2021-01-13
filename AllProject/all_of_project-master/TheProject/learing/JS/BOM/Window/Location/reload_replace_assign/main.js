/*
	reload(false) : This Will Do Reload For The Page

	reload(true) : This Will Do Force Reload For The Page From The Main Server

////////////////////////			////////////////////////
	
	replace('https://www.facebook.com/') : This Will Do Replace For This Link From The History Of Page

////////////////////////			////////////////////////

	assign('https://www.facebook.com/') : This Will Do Add For This Link In The History Of Page

*/



if (window.location.hash.indexOf('chat') > -1 ){
	
	window.console.log('You Coming From chat ');

}

// window.console.log(window.location.replace('https://www.facebook.com/')); 

// window.console.log(window.location.assign('https://www.facebook.com/'));

// window.console.log(window.location.reload(true));

