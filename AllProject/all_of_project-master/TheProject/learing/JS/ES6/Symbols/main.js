/*

	Symbols

*/

const mySymbols = Symbol();

console.log(typeof mySymbols);

const oneSymbols = Symbol('test');

const towSymbols = Symbol('test');

console.log(oneSymbols === towSymbols) // Unique

const newSymbol = Symbol(); // This Use To make Data Private [Hidden]

const myObject = {
	name: 'mohmad',
	age:23,
	[newSymbol]: 'The Hidden Value'
}

console.log(myObject);

for(let val of Object.entries(myObject)){

	console.log(val);
}

console.log(Object.getOwnPropertyNames(myObject));

console.log(Object.keys(myObject));

console.log(Object.getOwnPropertySymbols(myObject));

console.log(JSON.stringify(myObject));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mySymbolOne = Symbol.for('testing'); // Symbol Not Exist , Create It
const mySymbolTow = Symbol.for('testing'); // Symbol Is Exist , Select It

const mySymbolThree = Symbol.for('one'); // Symbol Not Exist , Create It
const mySymbolFour = Symbol.for('one'); // Symbol Is Exist , Select It

alert(mySymbolFour.toString()); // By Default The Symbol Can Not By Convert To String But This Only Method To Convert It To String

console.log(mySymbolOne.description); // This Will Show Value That In Symbol

console.log(Symbol.keyFor(mySymbolTow)); // This Will Show Value That In Symbol

Symbol.iterator

console.log(mySymbolOne === mySymbolTow);


console.log(mySymbolThree === mySymbolFour);


