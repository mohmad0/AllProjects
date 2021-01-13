/*

	Destructuring Object

*/




let user = {

	name: 'mohmad',
	age: '23',
	theme: 'red'
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// New Way

const {name , age, theme = 'Default' } = user;


console.log(`Hello ${name} Your Age Is: ${age} And Your Theme Is: ${theme}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Old Way


var n = user.name,
	
	a = user.age,

	t = user.theme;

console.log(`Hello ${n} Your Age Is: ${a} And Your Theme Is: ${t}`);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// New Way

let info = {

	city: 'cairo',
	country: 'Egypt',
	state: 'Student',
	langs: {

		html:'70%',
		css:'80%',
		js:'100%',
		htmllangs:{
			pugjs:'30%',
			hamel: '50%'
		}
	}
}


const {city: theCity , country:thecountry , state:thestate , langs:thelangs , langs:{html , css , js , python = '98%', htmllangs:{pugjs , hamel}}} = info;

console.log(`${theCity} ${thecountry} ${thestate} ${thelangs} ${js} ${hamel} ${python}`);
