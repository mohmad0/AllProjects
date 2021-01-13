/*

	Symbol Iterator Vs For Loop

	[ Map , Set , String , Array ] Has Imbelement Iterable

	[ Object  , Number ]  Has Not Imbelement Iterable

	Iterable Object Has Symbol.Iterator

	Iterator
		- Object With Interface Designed For Iteration [ Loop ]
		- All Iterators Has Next() Method That Return Result Object
		- The Result Object Has Tow Properties
		--- [1] Value => The Next Value
		--- [2] Done => Boolean Value To Tell If The Next Value Exists Or No


	For ... Of Loop 

	[1] Call Symbol.Iterator With Next Method
	[1] Save Value Inside Variable 
	[3] Check For Done If Its [ True Or False ] If True Exit The Loop If False Not Exit The Loop



*/


let myArray = [1 , 2 , 3];

let myString = 'mohmad';

let myNumber = 1000;

let myObject = {};


console.log(typeof(myArray[Symbol.iterator]));
console.log(typeof(myString[Symbol.iterator]));
console.log(typeof(myNumber[Symbol.iterator]));
console.log(typeof(myObject[Symbol.iterator]));

let theIterator = myString[Symbol.iterator]();

console.log(`${"#".repeat(30)}`);

console.log(theIterator);
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());

console.log(`${"#".repeat(30)}`);

for(let char of myString){

	console.log(` This Is The String ==> ${char}`);

}

console.log(`${"#".repeat(30)}`);

for(let arr of myArray){

	console.log(` This Is The Array ==> ${arr}`);

}

console.log(`${"#".repeat(30)}`);

// for(let num of myNumber){

// 	console.log(num);

// }

// for(let obj of myObject){

// 	console.log(obj);

// }