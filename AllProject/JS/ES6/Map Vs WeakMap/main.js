/*
	Map Vs WeakSet
	
	==============

	Garpaeg Colector ==> This Is Responsible for Memory Management [ When I Clean The Data ]

	Map  Vs   [Garpaeg Colector] Will Not Remove The Element That Has Referance And That Not Has Referance

	- [ Contain Any Type Of Values ]
	- Get Elements Count With Size
	- ForEach Available To Iterate
	- You Can Get Its Keys

	WeakMap  Vs   [Garpaeg Colector] Will Remove The Element That Only Not Has Referance
	- [ Contain Only Object ]
	- You Can't Use Size To Get Elements Count
	- ForEach Not Available To Iterate
	- You Can Not Get Keys

*/

let myMap = new Map();

let objectOne = {a:1};

myMap.set(objectOne , "Test");
myMap.set('a' , 2);
myMap.set('c' , 3);
myMap.set(1 , 15);

console.log(myMap);
console.log(myMap.get(objectOne));
console.log(myMap.get('a'));

console.log(myMap.has('c'));

myMap.delete('c');

console.log(myMap.has('c'));

objectOne = null;

console.log(myMap.get(objectOne));

console.log(myMap.size);


console.log(`${"#".repeat(30)}`);
////////////////////////////////////////////////////////////////////


let myWeakMap = new WeakMap();

let objectWeakMapOne = {a:1};

let objectWeakMapTow = {a:1};

// myWeakMap.set(objectOne , "Test");
// myWeakMap.set('a' , 2);
// myWeakMap.set('c' , 3);
// myWeakMap.set(1 , 15);

console.log(myWeakMap);
console.log(myWeakMap.get(objectWeakMapOne));

console.log(myWeakMap.has(objectWeakMapTow));

myWeakMap.delete(objectWeakMapTow);

console.log(myWeakMap.has(objectWeakMapTow));

objectWeakMapOne = null;

console.log(myWeakMap.get(objectWeakMapOne));

console.log(myWeakMap);

// console.log(myWeakMap.size);