var myParent = document.querySelector('.parent'),

	myNew = document.querySelector('.new'),

	// myCopy = myParent.firstElementChild.cloneNode(); This == cloneNode(false) && This Will return only attribute like [id , class , ...] Not Content


	myCopy = myParent.firstElementChild.cloneNode(true); // This Will Make Copy With Content 


	myNew.appendChild(myCopy);

	
