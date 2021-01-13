var myParent = document.querySelector('.parent');

	
	console.log(myParent.children[1]) // This Will Reture Element Only Not Text




	console.log(myParent.childNodes[1].firstChild.nodeType) // This Will Reture Element &&&&&&& Text

	console.log(myParent.childNodes[1].firstChild.nodeName)

	console.log(myParent.childNodes[1].firstChild.nodeValue)

	/*
		
		myParent 		= The Main Parent Div

		childNodes[1] 	= <p>This Paragragh From HTML</p>

		firstChild		= This Paragragh From HTML
		
	*/


	/*
		nodeType = 1 ===> This Mean Element[span , p , h2 , div , ...]
		
		nodeType = 3 ===> This Mean Text

		nodeType = 8 ===> This Mean Comment

	*/


	

