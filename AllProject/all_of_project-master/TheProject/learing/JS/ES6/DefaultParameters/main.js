/*
	
	Default Parameters

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////// ES6 New Way

function showInfo(user = 'mohmad', age = '22'){

	return `Hello ${user} Your Age Is: ${age}`;
}

console.log(showInfo());
console.log(showInfo('Ahmed'));
console.log(showInfo('Ahmed' , 23));

//////////////////////////////////////////////////////////////////////////////////////////////////////////// Old Way


function showInfo1(user, age){

	user = user === undefined ? 'mohmad' : user;

	age = age === undefined ? 22 : age;

	return `Hello ${user} Your Age Is: ${age}`;
}

console.log(showInfo1());
console.log(showInfo1('Ahmed'));
console.log(showInfo1('Ahmed' , 23));


function showInfo2(user, age){

	// This Name Way Is ===> [ True C False C Patern ]
	user = user || 'mohmad';

	// This Name Way Is ===> [ True C False C Patern ]
	age = age || 22 ;

	return `Hello ${user} Your Age Is: ${age}`;
}

console.log(showInfo2());
console.log(showInfo2('Ahmed'));
console.log(showInfo2('Ahmed' , 23));