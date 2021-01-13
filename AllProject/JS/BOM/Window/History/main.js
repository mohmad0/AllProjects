/*
	window.history.go(1);  == forward()  Positive Value

	window.history.go(-1); == back()	Negative Value

	window.history.forward();

	window.history.back();

*/

var send = window.document.forms[0].number;



if (send.value != '' ){
	
	window.history.go(send.value)

}

// window.console.log(window.location.replace('https://www.facebook.com/')); 

// window.console.log(window.location.assign('https://www.facebook.com/'));

// window.console.log(window.location.reload(true));

