/*
	
	Delete Operator

*/

const user = { name: "Mohmad"};

console.log(user);

console.log(user.name);

// delete user; // Delete Property Not Object

// delete user.name; By Dot Notation
// delete user["name"]; By Bracket Notation

console.log(delete user["name"]);

console.log(user);

console.log(user.name);

console.log("#".repeat(30));

const username = "Mohmad";

console.log(username);

console.log(delete username); // This Cant Be Delete It This Is ==> Const 

console.log(username);

const freezeObj = Object.freeze({age:23});

console.log(freezeObj);

console.log( delete freezeObj); // This Cant Be Delete Or Add On It This Is ==> Freeze Object 

console.log(freezeObj);

console.log("#".repeat(30));

const emptyObj = {};

Object.defineProperty(emptyObj,"a",{ value: 1 , configurable:false }); // configurable ==> This Will Do Prevent To Delete This Property

console.log(emptyObj);
console.log(emptyObj.a);

console.log( delete emptyObj.a); // This Will Return ==> False Becouse The configurable ==> False If It Is ==> [ True ] Will Delete It

console.log(emptyObj);
console.log(emptyObj.a);
