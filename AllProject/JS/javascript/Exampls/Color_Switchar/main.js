// Get The Color From local Storage 

window.document.body.classList.add(localStorage.getItem("pageColor") || 'green');

// window.console.log(window.document.body.classList.add(document.localStorage.getItem("pageColor")));

var el 			= window.document.querySelectorAll("ul.color-switcher li");

var	classesList = [];


// Loop On ELements

for(var i = 0; i < el.length; i++){

	// Get Classes List

	classesList.push(el[i].getAttribute("data-color"));

	el[i].addEventListener("click" , function(){

		// Remove All Old Classes

		window.document.body.classList.remove(...classesList);

		// Add Current Class From li Data Attribute

		window.document.body.classList.add(this.getAttribute("data-color"));

		// Add Data To Local Storage

		window.console.log(localStorage.setItem("pageColor" , this.getAttribute("data-color")));

		},
		false

	);

}

window.console.log(localStorage.getItem("pageColor"));
