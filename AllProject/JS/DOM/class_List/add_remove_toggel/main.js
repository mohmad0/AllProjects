/*global console*/

var myDiv = document.getElementById('main'),
	
	myadd = document.querySelector('.add'),
	myremove = document.querySelector('.remove'),
	mytoggle = document.querySelector('.toggle');


	

myadd.onclick = function () {

	myDiv.classList.add('root', 'food');
}

myremove.onclick = function () {

	myDiv.classList.remove('root', 'food' , 'main-div');
}

mytoggle.onclick = function () {

	myDiv.classList.toggle('cool');
}


// if(myDiv.classList.contains('good')){
// 	myDiv.classList.add('root', 'food')
// }

// if(myDiv.classList.contains('main-div')){
// 	myDiv.classList.remove('root', 'food' , 'main-div')
// }

// if(myDiv.classList.contains('show')){
// 	myDiv.classList.toggle('cool');
// }

// myDiv.classList.toggle('cool');



