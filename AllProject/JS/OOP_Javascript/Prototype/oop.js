/*
	
	Prototype

*/

function User(name){

	this.name = name;
	this.welcome = function(){
		return `Welcome ${this.name}`;
	}
}

let user1 = new User("Mohmad")
let user2 = new User("Gamal")

console.log(User.prototype);

const arr = [ 1 , 2 , 3 , 4 , 5 ]; // This Is Has Constructor ==> Array()

console.log(Array.prototype);  //  The Constructor ==> Array() Will Be Can Access On All Methods That Be In ==> Prototype

console.log(arr.reverse()); // This Method In ==> Prototype


console.log("#".repeat(30));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Add New Methods In Prototype

User.prototype.addTitle = function(){ // This Method Will Find With All Methods That Be In Prototype Has ==> [ User ]
	return `Mr. ${this.name}`;
}

console.log(user1.addTitle())

console.log(Object.prototype);

Object.prototype.Mo = "Mohmad Gamal Ali"; // This Property Will Find With All Properties That Be In Prototype Has ==> [ Object ]

const myObject = { a: 1 , b:2 };

console.log(myObject.Mo)

console.log("#".repeat(30));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let myString = "Mohmad";

console.log(String.prototype);

String.prototype.zFill = function(width) {

	let theResult = this;

	while(theResult.length < width){
		theResult = `0${theResult}`;
	}

	return theResult.toString();
}

console.log("12".zFill(6));
console.log("123".zFill(6));
console.log("1234".zFill(6));
console.log("1235".zFill(6));
console.log("1236".zFill(6));


String.prototype.sayHello = function(){
	return `Hello ${this}`;
}

console.log("Mohmad".sayHello());

console.log("#".repeat(30));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
	[1] Every Object Has A Prototype
	[2] Prototype Chain Ends With Object.prototype
	[3] In Javascript ==> Function Is Object
*/

function Users(name){

	/*
		[1] Create Empty Object
		[2] Assign The New Object To this Context
		[3] New Object Created Prototype = Function Prototype

		this = {}
		this.__proto__ = Users.__proto__
	*/

	this.name = name;

	/*
		[4] Return The New Object
		return this
	*/

	// if(!(this instanceof Users)){
	// 	throw new Error("Must Added new Keyword Before Name Of Object To Make Instance From Users");
	// 	console.log("Error");
	// }

	// ES6
	if(!this.target){
		throw new Error("Must Added new Keyword Before Name Of Object To Make Instance From Users");
		console.log("Error");
	}
}

let go = Users();