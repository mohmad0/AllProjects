var myParent = document.querySelector('.parent'),


	// CreateElement
	
	myHead = document.createElement('h2'),


	// CreateTextNode

	myTextHead = document.createTextNode('Mohmad Gamal'),

/////////////////////////////////////////////////////////////////////////////

	myParag = document.createElement('p'),




	myTextParag = document.createTextNode('This Is My Paragragh');

/////////////////////////////////////////////////////////////////////////////


	myHead.appendChild(myTextHead);


	myParag.appendChild(myTextParag);


/////////////////////////////////////////////////////////////////////////////


	myParent.appendChild(myHead);

	myParent.appendChild(myParag);






