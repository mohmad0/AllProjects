var myParent = document.querySelector('.parent');


	// parentElement

	myButton = myParent.firstElementChild;

	myButton.onclick = function () {


		this.parentElement.classList.toggle('good');
	}



	
