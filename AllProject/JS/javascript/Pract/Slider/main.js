// Get Slider Item | Array.from[ES6 Feature]
let sliderImage = Array.from(window.document.querySelectorAll('.slider-container div'));

// window.console.table(sliderImage);
// window.console.log(sliderImage);


// Get Number Of Slider
let slidesCount = sliderImage.length

// Set Current Slide 
let currentSlide = 1;
	
let	duration = 2000;

// Slide Number Element
let slideNumber = window.document.getElementById('slider-number');

// Previous And Next Bttons
let nextButton = window.document.getElementById('next');
let prevButton = window.document.getElementById('prev');

// Handel Click On Previous And Next Button

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Ul Element
let politesElementUl = window.document.createElement('ul');

// Set ID On The Main Ul Element
politesElementUl.setAttribute('id' , 'polites-ul');

// Create li Item Based On Slider Count
for(var i = 1; i <= slidesCount ; i = i + 1){

	// Create li Item 
	let politesItemLi = window.document.createElement('li');

	// Set Custom Attribute
	politesItemLi.setAttribute('data-index' , i);

	// Set Item Content
	politesItemLi.appendChild(window.document.createTextNode(i));

	// Add li To ul
	politesElementUl.appendChild(politesItemLi);

}

// Add Ul Element To The Page
window.document.getElementById('polits').appendChild(politesElementUl);

// Get The New Created Ul 
let politsCreatedUl = window.document.getElementById('polites-ul');

// Get politsList Item | Array.from[ES6 Feature]
let politsList = Array.from(window.document.querySelectorAll('#polites-ul li'));

// Loop On All Polites Item
politsList.forEach(function(polit){

	polit.onclick = function(){

		currentSlide = parseInt(this.getAttribute('data-index'));

		theChecker();
	}


});

// Work The Checker Function
theChecker();

// Next Slide Function

function nextSlide(){

	if(nextButton.classList.contains('disabled')){

		// Do Nothing
		return false;

	}else
	{
		currentSlide = currentSlide + 1;

		theChecker();
	}
}


// Previous Slide Function

function prevSlide(){
	
	if(prevButton.classList.contains('disabled')){

		// Do Nothing
		return false;

	}else
	{
		currentSlide = currentSlide - 1;

		theChecker();
	}
}

// Create The Checker Function
function theChecker(){

	// Set The Slide Number
	slideNumber.textContent = 'Slide #' + (currentSlide) + ' Of ' + (slidesCount);

	// Remove All Active Classes
	removeAllActive();

	// Set Active Class On Current Slide
	sliderImage[currentSlide - 1].classList.add('active');

	// Set Active Class On Polites Item
	politesElementUl.children[currentSlide - 1].classList.add('active');

	// Check If Current Slide Is First
	if(currentSlide == 1){

		// Add Disabled Class On Previous Button
		prevButton.classList.add('disabled');

	}else{

		// Remove Disabled Class On Previous Button
		prevButton.classList.remove('disabled');

	}

	// Check If Current Slide Is Last
	if(currentSlide == slidesCount){

		// Add Disabled Class On Next Button
		nextButton.classList.add('disabled');

	}else{

		// Remove Disabled Class On Next Button
		nextButton.classList.remove('disabled');

	}

}

// Remove All Active Class From Images And Poltes
function removeAllActive(){

	// Loop On Images List
	sliderImage.forEach(function(img){

		img.classList.remove('active');
	});

	// Loop On Poltes List
	politsList.forEach(function(polit){

		polit.classList.remove('active');
	});
}

setInterval(function(){

	if (currentSlide < slidesCount) {

		currentSlide = currentSlide + 1;
		theChecker();

	}else
	{
		currentSlide = 1;
		theChecker();
	}

},duration);