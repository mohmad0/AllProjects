/*
		
	scrollBy(X , Y) // Numbers Only In Pixels
	scrollTo(X , Y) // Numbers Only In Pixels

*/


/*
	var myButton = document.querySelector('button');

	myButton.onclick = function () {

		window.scrollBy(500, 500); // This Will Move To 500px And He Will Add 500px + 500px = 1000px Then He Will Move To 1000px And Will Add 500px And So On ...

		window.console.log('You Is Moveing To Right ' + window.scrollX);

		window.console.log('You Is Moveing To Bottom ' + window.scrollY);
	}

*/


/*

var myButton = document.querySelector('button');

myButton.onclick = function () {

	window.stop();  This Will Do Stoping For Loading

}

myButton.onclick = function () {

	myopen.close(); This Will Do Closeing For New Page

}

*/

var myButton = document.querySelector('button');
	


myButton.onclick = function () {

	window.open('https://www.facebook.com/' , '_blank' , 'width=600 , height=600 , left=500 , top=500 , menubar=yes , status=yes' , 'true').focus(); // This Will Make Focus In The New Page

}