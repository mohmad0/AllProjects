///////////////////////////////////////////////////////////////////////////////////////////////////////// Local Color 5


let storeColor = localStorage.getItem("color_option");

// Check If Is Found Color in Local Storage Or Not 
if (storeColor !== '') {

	document.documentElement.style.setProperty('--main-color' , storeColor);


	// Remove Active Class From All Childrens
	window.document.querySelectorAll('.colors-list li').forEach(Element =>{

		Element.classList.remove('active');

		// Add Active Class On Element With Data-color === Local Storage Item
		if (Element.dataset.color === storeColor) {

			// Add Active Class
			Element.classList.add('active');
		}

	});
}


///////////////////////////////////////////////////////////////////////////////////////////////////////// Switch Color 4

// Switch Color
let colorLi = window.document.querySelectorAll('.colors-list li');

// Loop On All List Items
colorLi.forEach(li =>{

	// Click On Evry List Items
	li.addEventListener('click' , (e) => {

		// Set Color On Root
		document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);

		// Set Color On Local Storage
		localStorage.setItem("color_option" ,  e.target.dataset.color);

		removeAddActive(e);

	});


});

///////////////////////////////////////////////////////////////////////////////////////////////////////// Head 2

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let	backgroundInterval;

let	backgroundImageStore = localStorage.getItem("background_option");

// // Remove Active Class From All Childrens
// window.document.querySelectorAll('.random-background span').forEach(Element =>{

// 	Element.classList.remove('active');

// });



// Check If Is Found background Image in Local Storage Or Not 
if (backgroundImageStore !== null) {

	if (backgroundImageStore === "true") {

		backgroundOption = true;

		window.document.querySelector('.random-background .yes').classList.add('active');

	}else{

		backgroundOption = false;

		window.document.querySelector('.random-background .no').classList.add('active');
	}
}

console.log(backgroundImageStore)

///////////////////////////////////////////////////////////////////////////////////////////////////////// Setting 3



// Toggle Spin Class On Icon
window.document.querySelector('.setting-box .setting_shap').onclick = function(){

	// Toggle Class Fa-Spin On Icon
	this.classList.toggle('fa-spin');

	// Toggle Class Open On Main Setting Box
	window.document.querySelector('.setting-box ').classList.toggle('open');


}

///////////////////////////////////////////////////////////////////////////////////////////////////////// Head 2
 
// Switch Background Images
let imageBackEl = window.document.querySelectorAll('.random-background span');

// Loop On All Spans
imageBackEl.forEach(span =>{

	// Click On Evry Span
	span.addEventListener('click' , (e) => {


		if (e.target.dataset.background === 'yes') {

			backgroundOption = true;

			randomizeimg();

			localStorage.setItem("background_option" , true);

		}else
		{	
			backgroundOption = false;

			clearInterval(backgroundInterval);

			localStorage.setItem("background_option" , false);
		}

		removeAddActive(e);

	});


});


///////////////////////////////////////////////////////////////////////////////////////////////////////// Head 1

// Select Landing Page
let landingPage = window.document.querySelector('.landing-page');

let	imageArray  = ["landing1.jpeg" , "landing2.jpg", "landing3.jpg" , "landing4.jpg" , "landing5.jpg"];

function randomizeimg(){

	// if (innerWidth  <= 575 && backgroundOption === true) {

	// 	console.log(innerWidth)

	// 	backgroundInterval = setInterval(() => {

	// 		// Get Random Image
	// 		let	randomImages = Math.floor(Math.random() * imageArray2.length);

	// 			landingPage.style.transition = '.8s';

	// 			landingPage.style.backgroundSize = 'cover';

	// 			// Change Background Image
	// 			landingPage.style.backgroundImage = 'url("Images/imgsmall' + imageArray2[randomImages] + '")';

	// 		},3000);

	// 	}	



	// if (innerWidth == 576 && innerWidth <= 750 && backgroundOption === true) {

	// 	console.log(innerWidth)

	// 	backgroundInterval = setInterval(() => {

	// 		// Get Random Image
	// 		let	randomImages = Math.floor(Math.random() * imageArray.length);

	// 			landingPage.style.transition = '.8s';

	// 			landingPage.style.backgroundSize = 'cover';

	// 			// Change Background Image
	// 			landingPage.style.backgroundImage = 'url("Images/imgmedium' + imageArray[randomImages] + '")';

	// 		},3000);

	// 	}
		
	if (backgroundOption === true) {

		backgroundInterval = setInterval(() => {

			// Get Random Image
			let	randomImages = Math.floor(Math.random() * imageArray.length);

				landingPage.style.transition = '.8s';

				landingPage.style.backgroundSize = 'cover';

				// Change Background Image
				landingPage.style.backgroundImage = 'url("Images/' + imageArray[randomImages] + '")';

			},3000);

		}


}

randomizeimg();


///////////////////////////////////////////////////////////////////////////////////////////////////////// Skills 6

// Select Skills Selector
let ourSkills = window.document.querySelector('.skills');

window.onscroll = function(){

		// Skills Offset Top
	let skillsOffsetTop = ourSkills.offsetTop,

		// Skills Outer Height
		skillsOuterHeight = ourSkills.offsetHeight,

		// Window Height
		windowHeight = this.innerHeight,

		// Window ScrollTop
		windowScrollTop = this.pageYOffset;

	// window.console.log(skillsOffsetTop + skillsOuterHeight - windowHeight);

	// window.console.log(skillsOffsetTop)


	if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

		allSkills = window.document.querySelectorAll('.skills .skill-box .skill-progress span');

		allSkills.forEach(skill =>{

			skill.style.transition = '.8s';

			skill.style.width = skill.dataset.progress

		});

	}


};


///////////////////////////////////////////////////////////////////////////////////////////////////////// Popup 7

// Create Popup With The Image
let ourGallery = window.document.querySelectorAll('.gallery .images-box img');


ourGallery.forEach(img => {

	img.addEventListener('click' , (e) => {

		// Create Overlay Element 
		let overlayDiv =  window.document.createElement('div');

		// Add Class To Overlay 
		overlayDiv.className = 'popup-overlay';

		// Add Overlay To The Body
		window.document.body.appendChild(overlayDiv);

			// Create The Popup Box
			popupBox =  window.document.createElement('div');

		// Add Class To The Popup Box
		popupBox.className = 'popup-box';

		if (img.alt !== null) {

			// Create Heading
			imageHead = window.document.createElement('h3');

			// Create Text For Heading
			imageHeadText = window.document.createTextNode(img.alt);

			// Append The Text To The Heading
			imageHead.appendChild(imageHeadText);

			// Append The Heading To The Popup Box
			popupBox.appendChild(imageHead);

		}

			// Create The Img
			popupImage =  window.document.createElement('img');

		// Set Image Source
		popupImage.src = img.src;

		// Add Image To The Popup Box
		popupBox.appendChild(popupImage);

		// Append Popup Box To Body
		window.document.body.appendChild(popupBox);

		// Create The Close Span
		let	closeButton = window.document.createElement('span');

		// Create The Close Button Text
		let	closeButtonText = window.document.createTextNode('X');

		// Add The Close Button Text To The Close Span
		closeButton.appendChild(closeButtonText);

		// Add Class To The Close Span
		closeButton.className = 'close-button';

		// Add The Close Span To The Popup Box
		popupBox.appendChild(closeButton);

	});


});

// Close The Popup
window.document.addEventListener('click' , (e) => {

	if (e.target.className == 'close-button') {

		// Remove The Current Popup
		e.target.parentElement.remove();
		
		// Remove The Overlay
		window.document.querySelector('.popup-overlay').remove();

	}

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Select All Bulttets

const allBulttets = window.document.querySelectorAll('.nav-bullets .bullet');

// Select All Links

const allLinks = window.document.querySelectorAll('.header-area .links a');

// Function To Move To Other Section
function goToSection(Elements){

	Elements.forEach(Element => {

		Element.addEventListener('click' , (e) => {

			e.preventDefault();

			window.document.querySelector(e.target.dataset.section).scrollIntoView({

				behavior: 'smooth'

			});

		});

	});
}

goToSection(allBulttets);

goToSection(allLinks);

// Handel Active State
function removeAddActive(event){

	// Remove Active Class From All Childrens
	event.target.parentElement.querySelectorAll('.active').forEach(Element =>{

		Element.classList.remove('active');

	});

	// Add Active Class On Selfevent
	event.target.classList.add('active');

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

let bulletsSpan = window.document.querySelectorAll('.bullets-option span'),

	bulletsContainer = window.document.querySelector('.nav-bullets'),

	bulletStore = localStorage.getItem("bullets_option");


if (bulletStore !== null) {

	bulletsSpan.forEach(span => {

		span.classList.remove('active');

	});

	if (bulletStore === 'block') {

		bulletsContainer.style.display = 'block';

		window.document.querySelector('.bullets-option .yes').classList.add('active');

	}
	else
	{
		bulletsContainer.style.display = 'none';


		window.document.querySelector('.bullets-option .no').classList.add('active');
	}

}



bulletsSpan.forEach(span => {

	span.addEventListener('click' , (e) => {

		if (span.dataset.display === 'show') {

			bulletsContainer.style.display = 'block';

			localStorage.setItem("bullets_option" , "block");
		}
		else
		{
			bulletsContainer.style.display = 'none';

			localStorage.setItem("bullets_option" , "none");
		}

		removeAddActive(e);

	});


});

// Reset Button

window.document.querySelector('.reset-options').onclick = function(){

	// localStorage.clear();

	localStorage.removeItem("color_option");

	localStorage.removeItem("background_option");

	localStorage.removeItem("bullets_option");

	// Reload Window

	window.location.reload();


};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Toggle Menu
let toggleButton = window.document.querySelector('.toggle-menu'),

	theLinks = window.document.querySelector('.links'); 


toggleButton.onclick = function(e){

	// Stop Propagtion
	e.stopPropagation();

	// Toggle Class menu-active On Button
	this.classList.toggle('menu-active');

	// Toggle Class open On Links
	theLinks.classList.toggle('open');
}

document.addEventListener('click' , (e) => {

	if (e.target !== toggleButton && e.target !== theLinks) {

		 // Check If Menu Is Open
		 if (theLinks.classList.contains('open')) {

			// Toggle Class menu-active On Button
			toggleButton.classList.toggle('menu-active');

			// Toggle Class open On Links
			theLinks.classList.toggle('open');

		 }

	}

});

// Stop Propagation 

theLinks.onclick = function(e){

	e.stopPropagation(); // This Make Node Between Parent And Children
}