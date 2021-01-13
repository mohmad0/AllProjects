// Letters
const letters = 'abcdefghijklmnopqrstuvwxyz';

// Get Array From Letters

let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = window.document.querySelector('.letters');

// Generate Letters
lettersArray.forEach(letter => {

		// Create The Lette Place
	let letterPlace = window.document.createElement('span'),

		// Create The Letters
		theLetters = window.document.createTextNode(letter);

	// Append The Letters To Letter Place		
	letterPlace.appendChild(theLetters);

	// Add Class On Letter Place
	letterPlace.className = 'letters-box';

	// Append Letter Place To Letters Container
	lettersContainer.appendChild(letterPlace);

});

// Objects Of Words + Categories
const words = {
	programming: ['php' ,'javascript' , 'go' , 'scala' , 'fortran' , 'r' , 'sql' , 'python'],
	movies: ['Prestige' , 'Inception' , 'Parasite' , 'Interstellar' , 'Whiplash' , 'Memento' , 'Coco' ,'Up'],
	people: ['Albert Einstein' , 'Hitchcock' ,'Alexander' , 'cleopatra' , 'Mahatma Ghandi'],
	countries: ['Syria' , 'Palestine' , 'Yemen' , 'Egypt' , 'Bahrain' , 'Qatar'] 
}

// Get Random Property

let allKeysInObject = Object.keys(words),
	
	// Random Number Depend On Keys Length
	randomPropNumber = Math.floor(Math.random() * allKeysInObject.length),

	// Category
	randomPropName = allKeysInObject[randomPropNumber],

	// Category Words
	randomPropValue = words[randomPropName],

	// Random Number Depend On Words
	randomValueNumber = Math.floor(Math.random() * randomPropValue.length),

	// The Chosen Word
	randomValueFromMainValue = randomPropValue[randomValueNumber];

// Set Category Info
document.querySelector('.game-info .category span').innerHTML = randomPropName;


// Select Letters Guess Element 
let letterGuessContainer = window.document.querySelector('.letters-guess'),
	
	// Convert Chosen Word To Array
	letterAndSpace = Array.from(randomValueFromMainValue);

// Create Spans Depend On Word
letterAndSpace.forEach(letter => {

	// Create Empty Span 
	emptySpan = window.document.createElement('span');

	// If Letter Is Space
	if (letter === ' '){

		// Add Has Space Class To The Span
		emptySpan.className = 'has-space';

	}

	// Append Span To The Letters Guess Container
	letterGuessContainer.appendChild(emptySpan);
});


// Select Span To The Letters Guess Container
let guessSpans = window.document.querySelectorAll('.letters-guess span'),
	
	guess = window.document.querySelector('.letters-guess'),

	// Set Wrong Try
	wrongTry = 0,

	// Select The Draw Element
	theDraw = window.document.querySelector('.hangman-draw');



// Handel Clicking On letters
document.addEventListener('click' , (e) => {

	// Set The Chosen Status
	theStatus = false;

	if(e.target.className === 'letters-box'){

			e.target.classList.add('clicked');

			// Get Clicked Letter
			let theClickedLetter = e.target.innerHTML.toLowerCase(),

			// The Chosen Word
				theChosenWord = Array.from(randomValueFromMainValue.toLowerCase());

			// console.log(letterAndSpace);  // The Chosen Word

			theChosenWord.forEach((wordLetter , wordIndex) => {

				// If The Clicked Letter == To One Of The Chosen Word Letter
				if(theClickedLetter == wordLetter){

					// Set Status To True
					theStatus = true;

					// Loop On All Guess Spans
					guessSpans.forEach((span , spanIndex) => {

						if(wordIndex == spanIndex){

							span.innerHTML = theClickedLetter;
						}

					});

				}

			});

			// Out Of The Loop

			// If Letter Is Wrong
			if(theStatus !== true){

				// Increase The Wrong Try
				wrongTry = wrongTry + 1;

				// AAdd Class Wrong On The Draw Element
				theDraw.classList.add(`wrong-${wrongTry}`);

				// Play Fail Sound
				document.getElementById('fail').play();

				if (wrongTry === 8) {


					lettersContainer.classList.add('finished');

					setTimeout(function(){

						endGame('Game Over');

					},3000);

					

					setTimeout(function(){

						window.location.reload();

					},5000);
				}


			} else{

				// Play Success Sound
				document.getElementById('success').play(); 

				if (guess.textContent == randomValueFromMainValue) {

					// Play game_win Sound
					document.getElementById('game_win').play(); 

					lettersContainer.style.pointerEvents = 'none';

					if (wrongTry >= 2) {


						setTimeout(function(){

							endGame(`Your Is Hero Your Tries Is ${wrongTry}`);

						},3000);

						
						setTimeout(function(){

							window.location.reload();

						},6000);


					}else if (wrongTry >= 5) {

						setTimeout(function(){

							endGame(`Your Is Good Your Tries Is ${wrongTry}`);

						},3000);

						

						setTimeout(function(){

							window.location.reload();

						},6000);


					}else if (wrongTry === 7) {

						setTimeout(function(){

							endGame(`Your Win By Luck Your Tries Is ${wrongTry}`);

						},3000);

						

						setTimeout(function(){

							window.location.reload();

						},6000);

					} else{

						setTimeout(function(){

							endGame(`Your Is Hero Your Tries Is ${wrongTry}`);

						},3000);

						
						setTimeout(function(){

							window.location.reload();

						},6000);

					}



				}

			}
	
		}

});

// End Game Function
function endGame(msg) {

	// Create Popup Div
	let div = document.createElement('div'),

		// Create Text Div
		divText = document.createTextNode(`${msg}, This Word Is ${randomValueFromMainValue}`);

	// Append Text To The Div
	div.appendChild(divText);

	// Add Class On Div
	div.className = 'popup';

	// Append TO The Body
	document.body.appendChild(div);

}
