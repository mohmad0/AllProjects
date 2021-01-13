/*

	Destructuring_Function

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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// New Way


function showInfo1({name , age , city , skills:{html , css , js:{vue , react , angular}}} = user){

	console.log(`${name} ${age} ${city} ${html} ${css} ${vue} ${react} ${angular}`);

}

showInfo1(user);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Old Way


function showInfo2(user){

	console.log(`${user.name} ${user.age} ${user.city} ${user.skills.html} ${user.skills.css} ${user.skills.js.vue} ${user.skills.js.react} ${user.skills.js.angular}`);

}

showInfo2(user);