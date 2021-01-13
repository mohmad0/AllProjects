/*
	Statment Tasks:
		[5] Add To Tasks To The Local Storage

*/

/////////////////////////////////////////////////////////////////////////////////////////

// Setting Up Variable
let theInput = window.document.querySelector('.add-task input');
let theAddButton = window.document.querySelector('.add-task .plus');
let tasksContaier = window.document.querySelector('.tasks-content');
let tasksCount = window.document.querySelector('.tasks-count span');
let tasksConpleted = window.document.querySelector('.tasks-completed span');
let errorSpan = window.document.querySelector('.todo-container .add-task .msg');
let msgContentSpan = window.document.querySelector('.todo-container .add-task .msg-content');
// Focus On Input Field

window.onload = function() {

	theInput.focus();

};

/////////////////////////////////////////////////////////////////////////////////////////

// Adding The Task
theAddButton.onclick = function(e){

	// If Input Is Empty
	if(theInput.value == ''){

		// Stop Clicking Function

		stopClicking(errorSpan , 'error-msg' , 2000);

		// window.location.reload();


	}else{

		let noTastsMsg = window.document.querySelector('.no-tasks-message'),

			blockscontainer = window.document.querySelector('.tasks-content'),
			i,

			blocks = Array.from(blockscontainer.children);

		// Check If Span With No Tasks Message Is Exist
		if(window.document.body.contains(noTastsMsg)){

			// Remove No Tasks Message
			noTastsMsg.remove();

		}


		// let contentSpanFound = window.document.querySelector('.tasks-content .task-box').textContent.slice(0 , theInput.value.length)

		// Create Main Span Element
		let mainSpan = window.document.createElement('span');

		// Create Delete Button
		let deleteElement = window.document.createElement('span');

		// Create completeAlldSpan Span Element
		let completeAlldSpan = window.document.createElement('span');

		// Create Delete AllElement Button
		let deleteAllElement = window.document.createElement('span');
		
		// Create The Main Span Text
		let text = window.document.createTextNode(theInput.value);

		// Create The Delete Button Span Text
		let deleteText = window.document.createTextNode('Delete');

		// Create The Delete All Button Span Text
		let deleteAllText = window.document.createTextNode('Delete All');

		// Create The Completed All Button Span Text
		let completedAllText = window.document.createTextNode('Completed All');

		// Add Text To Main Span
		mainSpan.appendChild(text);

		// Add Class To Main Span
		mainSpan.classList.add('task-box');

		// Add Text To Delete Button
		deleteElement.appendChild(deleteText);

		// Add Text To Delete Button
		completeAlldSpan.appendChild(completedAllText);

		// Add Text To Delete Button
		deleteAllElement.appendChild(deleteAllText);

		// Add Class To Delete Button
		deleteElement.classList.add('delete');

		// Add Class To Completed All Button
		completeAlldSpan.classList.add('completed-all');

		// Add Class To Delete All Button
		deleteAllElement.classList.add('delete-all');

		// Add Delete Button To Main Span
		mainSpan.appendChild(deleteElement);

		// Add Delete Button To Main Span
		mainSpan.appendChild(completeAlldSpan);

		// Add Delete Button To Main Span
		mainSpan.appendChild(deleteAllElement);

		mainSpan.setAttribute('data-content' , theInput.value);

		// mainSpan.textContent.slice(0 , theInput.value.length);

		function loopOnElement(){

			for(i = 0 ; i < blocks.length ; i = i + 1){

				if (blocks[i].dataset.content === theInput.value) {


					stopClicking(msgContentSpan , 'found-content' , 2000);

					e.preventDefaulte();

				}else{

					tasksContaier.style.paddingBottom = '40px';

					// Add The Task To The Container
					tasksContaier.appendChild(mainSpan);

					// Empty The Input
					theInput.value = '';

					// Focus On Input Field
					theInput.focus();

					// Calculate Tasks
					calculateTasks();

				}

			}

		}

		loopOnElement();

	}
}

/////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('click' , function(e){

	// Delete Task
	if(e.target.className == 'delete'){

		// Remove Current Task
		e.target.parentNode.remove();

		// Check Number Of Tasks Inside The Container
		if(tasksContaier.childElementCount == 0){

			CreateNoTasks();

		}

		// Focus On Input Field
		theInput.focus();
	}

	// Finish Task
	if(e.target.classList.contains('task-box')){

		// Toggle Class Finish
		e.target.classList.toggle('finished');
	}

	// Calculate Tasks
	calculateTasks();

	let	blockscontainer = window.document.querySelector('.tasks-content'),
		i,
		blocks = Array.from(blockscontainer.children);

	
		// Delete All Tasks
		if (e.target.className == 'delete-all') {

			for(i = 0 ; i < blocks.length ; i = i + 1){

				if (blocks[i].classList.contains('task-box')) {}

				blocks[i].remove();
			}



			// Check Number Of Tasks Inside The Container
			if(tasksContaier.childElementCount == 0){

				CreateNoTasks();

				tasksContaier.style.paddingBottom = '15px';

			}

			// Focus On Input Field
			theInput.focus();

		}

		// Finish All Tasks
		if (e.target.className == 'completed-all') {

			for(i = 0 ; i < blocks.length ; i = i + 1){

				if (blocks[i].classList.contains('task-box')) {

					blocks[i].classList.toggle('finished');

				}
			}

		}
		// Calculate Tasks
		calculateTasks();

});



/////////////////////////////////////////////////////////////////////////////////////////

// Function To Create No Tasks Message
function CreateNoTasks(){

	// Create Message Span Element
	let msgSpan = window.document.createElement('span');

	// Create The Text Message
	let msgText = window.document.createTextNode('No Tasks To Show');

	// Add Text To Message Span Element
	msgSpan.appendChild(msgText);

	// Add Class To Message Span
	msgSpan.classList.add('no-tasks-message');

	// Add The Message Span Element To The Task Container
	tasksContaier.appendChild(msgSpan);
}

/////////////////////////////////////////////////////////////////////////////////////////

// Function To Calculate Tasks
function calculateTasks(){

	// Calculate All Tasks
	tasksCount.innerHTML = window.document.querySelectorAll('.tasks-content .task-box').length;


	// Calculate Completed Tasks
	tasksConpleted.innerHTML = window.document.querySelectorAll('.tasks-content .finished').length;

}

/////////////////////////////////////////////////////////////////////////////////////////

function stopClicking(errorPlace , myClass , seconds){

	// Add Class no-clicking On Main Container
	errorPlace.classList.add(myClass);

	window.document.body.style.pointerEvents = 'none';

	setTimeout( (e) => {

		// Remove Class no-clicking After The Duration
		errorPlace.classList.remove(myClass);

		window.document.body.style.pointerEvents = 'auto';

	}, seconds );

};