/* global console */

// Create Div Element

var myDiv = document.createElement('div');

// Add Div Element To Body

document.body.appendChild(myDiv);

// Create Class Main And Add It Into The Div Element

myDiv.classList.add('main');

// Create h2 Element

var myhead = document.createElement('h2');

// Create Text And Add It Into The h2 Element

var myHeadText = document.createTextNode('Mohmad Gamal');

// Create Comment

var myComment = document.createComment('This Is My Name');

// Add The Text To h2 Element

myhead.appendChild(myHeadText);

// Add The Comment Into myDiv

myDiv.appendChild(myComment);

// Add h2 Element To Div Element

myDiv.appendChild(myhead);


////////////////////////////////////////////////////////////////////////////////////////////


var myUl = document.createElement('ul');

document.body.appendChild(myUl);

for(var i = 0; i <= 100;i++){
	
	var myList = document.createElement('li'),
		myTextList = document.createTextNode('This Created By Javascript ');

	myList.appendChild(myTextList);

	myUl.appendChild(myList);
}
