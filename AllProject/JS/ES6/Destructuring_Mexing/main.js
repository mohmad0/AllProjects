/*

	Destructuring_Mexing

*/

let user = {

	name: 'mohmad',
	age:23,
	city: 'cairo',
	skills:{
		html: '99%',
		css: '98%',
		js:{vue:'70%',react:'80%',angular:'90%'}
	}
}

const {name , age , city , skills:{html , css , js:{vue , react , angular}}} = user;


console.log(`${name} ${age} ${city} ${html} ${css} ${vue} ${react} ${angular}`)