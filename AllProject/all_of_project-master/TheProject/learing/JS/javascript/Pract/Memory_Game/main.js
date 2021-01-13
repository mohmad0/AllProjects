// Select The Start Game Button
window.document.querySelector('.control-buttons').onclick = function() {

	console.log(WrongtriesElement.textContent);

	document.getElementById('game_win').play();
	
	// Prompt Window To Ask For Name
	let yourName = window.prompt('Whats Your Name... ? ');

	// If Name Is Empty
	if(yourName == null || yourName == ''){

		// Set Name As Unknown
		window.document.querySelector('.info-container .name span').textContent = 'Unknown';

	// Name Is Not Empty
	}else
	{	
		// Set Name As Your Name
		window.document.querySelector('.info-container .name span').textContent = yourName;
	
	}

	// Remove Splash From Screen
	window.document.querySelector('.control-buttons').remove();
	countMinut(90);
};

let duration = 1000,
	
	blockscontainer = window.document.querySelector('.memory-game-blocks'),

	blocks = Array.from(blockscontainer.children),

	orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

// window.console.log(orderRange);

// Add Order CSS Property To Game Blocks

blocks.forEach((block , index) => {

	// Add CSS Order Property
	block.style.order = orderRange[index];

	// Add Click Event
	block.addEventListener('click' , function(){

		// Enter To The Flipblock Function
		flipblock(block);

		// Collect All Flipped Cards
		let allFlippedBlocks = blocks.filter(flippedblock => flippedblock.classList.contains('is-flipped'));

		// Check If There Tow Element Selected
		if(allFlippedBlocks.length === 2){

			// window.console.log('You Now Chooes Tow Element');

			// Stop Clicking Function
			stopClicking();

			// Check If Is Similar Or Not Function
			checkSimilarBlock(allFlippedBlocks[0] , allFlippedBlocks[1]);

			localStorage.setItem("data_won" , WontriesElement.textContent);
			localStorage.setItem("data_lose" , WrongtriesElement.textContent);



		}
	});
});

let 
	WrongtriesElement = window.document.querySelector('.tries .Wrong'),
	WontriesElement = window.document.querySelector('.tries .Won');

// Check If Is Similar Or Not Function

function checkSimilarBlock(firstBlock , secondBlock){

	if (firstBlock.dataset.prand === secondBlock.dataset.prand) {

		firstBlock.classList.remove('is-flipped');
		secondBlock.classList.remove('is-flipped');

		firstBlock.classList.add('has-similar');
		secondBlock.classList.add('has-similar');

		// Play Success Sound
		document.getElementById('success').play(); 

		WontriesElement.textContent = parseInt(WontriesElement.textContent) + 1;

	}else{

		setTimeout( () => {

		firstBlock.classList.remove('is-flipped');
		secondBlock.classList.remove('is-flipped');

		}, duration);

		// Play Fail Sound
		document.getElementById('fail').play();

		WrongtriesElement.textContent = parseInt(WrongtriesElement.textContent) + 1;

	}

}


////////////////////////////////////////////////////////////////////////////////////////////////////

// Stop Clicking Function
function stopClicking(){

	// Add Class no-clicking On Main Container
	blockscontainer.classList.add('no-clicking');

	setTimeout( () => {

		// Remove Class no-clicking After The Duration
		blockscontainer.classList.remove('no-clicking');

	}, duration );

};

////////////////////////////////////////////////////////////////////////////////////////////////////

// Flip Block Function 

function flipblock(selectedBlock){

	// Add Class is-flipped
	selectedBlock.classList.add('is-flipped');
}


////////////////////////////////////////////////////////////////////////////////////////////////////

// Shuffle Function

function shuffle(array) {

// Settings Vars

let current = array.length,
	
	temp,

	random;

	while(current > 0){

		// Get Random Element

		random = Math.floor(Math.random() * current);

		// Decrease Length By One 
		current--;

		// Save Current Element In Store
		temp = array[current];

		// Current Element = Random Element
		array[current] = array[random];

		// Random Element = Get Element From Store
		temp = array[random]
	};

};

////////////////////////////////////////////////////////////////////////////////////////////////////

var countDiv = window.document.querySelector('.info-container .count'),
		
	secondPass;


function countMinut(seconds){

	var	countDown = setInterval(function(){

			'use strict';

			secondPass();

		}, 1000);

	function secondPass(){

		'use strict';

		var 

			minutes = Math.floor(seconds / 60),

			remSeconds = seconds % 60;

		if (seconds < 10) {

			remSeconds = "0" + remSeconds;
		}

		countDiv.textContent = minutes + ":" + remSeconds;

		if (seconds > 0) {

			seconds = seconds - 1 ; // Decrease One Second Every 1000 Millsecond

		}else{

			clearInterval(countDown); // Stop Countdown Timer

			let Timeout = setTimeout( () => {

				window.location.reload();

			},1500);

			countDiv.textContent = 'The Game Is End ';
		}

	}

}


////////////////////////////////////////////////////////////////////////////////////////////////////

