/*
	Arrow Function

	Identifier => Expression

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Regular Function With No Parameters

let regularTestOne = function() {

	return 2;
}

console.log(regularTestOne());

// Arrow Function With No Parameters


let arrowTestOne = () =>{

	return 2;
}

console.log(arrowTestOne());

let arrowTestTow = () => 2; // This Wright If The Function Has One Statment

console.log(arrowTestTow());

let arrowTestThree = _ => 2; // This Wright If The Function Has One Statment

console.log(arrowTestThree());

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Regular Function With One Parameters

let regularTestTow = function(param) {

	return param * 2;
}

console.log(regularTestTow(10));


// Arrow Function With One Parameters
let arrowTest4 = (param) =>{

	return param * 2;
}

console.log(regularTestTow(20));

let arrowTest5 = (param) => param * 2; // This Wright If The Function Has One Statment

console.log(arrowTest5(30));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Regular Function With Multiple Parameters

let regularTestThree = function(param1,param2) {

	return param1 * param2;
}

console.log(regularTestThree(10,10));


// Arrow Function With Multiple Parameters

let arrowTest6 = (param1,param2) =>{

	return param1 * param2;
}

console.log(arrowTest6(11,11));

let arrowTest7 = (param1,param2) => param1 * param2; // This Wright If The Function Has One Statment

console.log(arrowTest7(12,12));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

