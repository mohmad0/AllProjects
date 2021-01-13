// Select Element

let allSpans = window.document.querySelectorAll('.buttons span'),
	
	results  = window.document.querySelector('.results > span'),

	theInput = window.document.getElementById('the-input');

allSpans.forEach(span => {

	span.addEventListener('click' , (e) => {

		if (e.target.classList.contains('check-item')) {

			checkItem();
		}

		if (e.target.classList.contains('add-item')) {

			addItem();
		}

		if (e.target.classList.contains('delete-item')) {

			deleteItem();
		}

		if (e.target.classList.contains('show-items')) {

			showItems();
		}						
	});

});


function showMessage(){

	results.innerHTML = 'Input Cant Be Empty';
}


function checkItem(){

	let inputVal = theInput.value;

	if (inputVal !== '') {

		if (window.localStorage.getItem(inputVal)) {

			results.innerHTML = `Found local Storage Item Called <span>${inputVal}</span>`;

		}else{

			results.innerHTML = ` Not Found local Storage Item Called <span>${inputVal}</span>`;

		}

	}else{

		showMessage();
	}

}

function addItem(){

	let inputVal = theInput.value;

	if (inputVal !== '') {

		localStorage.setItem(inputVal , 'test');

		results.innerHTML = `local Storage Item <span>${inputVal}</span> Is Added`;

		theInput.value = '';


	}else{

		showMessage();
	}

}

function deleteItem(){

	let inputVal = theInput.value;

	if (inputVal !== '') {

		if (localStorage.getItem(inputVal)) {

			localStorage.removeItem(inputVal);

			results.innerHTML = `local Storage Item <span>${inputVal}</span> Is Deleted`;

			theInput.value = '';

		}else{

			results.innerHTML = ` Not Found local Storage Item Called <span>${inputVal}</span>`;
		}


	}else{

		showMessage();
	}


}

function showItems(){

	if (localStorage.length) {

		console.log(`Found Element ${localStorage.length}`);

		results.innerHTML = '';

		for(let [key , value] of Object.entries(localStorage)){

			results.innerHTML += `<span class="keys">${key}</span>`;

		}

	}else{

		results.innerHTML = 'Local Storage Is Empty';
	}


}