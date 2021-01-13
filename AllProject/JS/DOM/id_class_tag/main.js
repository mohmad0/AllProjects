/*
	var myid = document.getElementById('')
	var mytag = document.getElementsByTagName('p')[index]
	var myclass = document.getElementsByClassName('test')[index] // Not Compatible With IE 8 && Do Not Use It
	var myqueryall = document.querySelectorAll('p.test') [index]  // Not Compatible With IE 8 
	var myquery = document.querySelector('p.test') Not Use Index


*/


var myclass = document.querySelectorAll('.test')[0];

myclass.textContent = 'Mohmad Gamal';

var mytag = document.getElementsByTagName('h2')[0];

mytag.textContent = 'Good Boy';

var myclass = document.getElementsByClassName('test')[0]; // You Should Be Add Index

myclass.textContent = 'Good Man';