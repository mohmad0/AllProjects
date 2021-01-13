/*
	document.title
	document.images	You Should be Wright The [index]
	
	document.forms 	You Should be Wright The [index]

*/


var mytitle = document.querySelector('p');


mytitle.textContent = document.title;


var myimage = document.querySelector('.go');


myimage.textContent = document.images[0].src;


var myform = document.querySelector('.test');


myform.textContent = document.forms.length;