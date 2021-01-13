/*
	Template Litrals ==> ``

	[Template String]

*/

let username = 'mohmad',
	
	age = 23;

const myHtmlMarkup = `

	<div class="card">
		<h2> ${username} </h2>
		<span> ${age} </span>
	</div>

`

window.document.body.innerHTML = myHtmlMarkup;

const theKind = 'Male';

let name = "mohmad"

let oldWay = (theKind === 'Male' ? 'Mr' : 'Mrs') + ' ' + name + "\n" + 

"Gamal\n" + 

"Ali";


let newWay = `${theKind === 'Male' ? 'Mr' : 'Mrs'} ${name}
Gamal
Ali`;


console.log(oldWay);

console.log('--------------------------------------------------------------------------------------');

console.log(newWay);