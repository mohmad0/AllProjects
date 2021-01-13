/*
	Set Vs WeakSet
	
	==============

	Garpaeg ==> This Is Responsible for Memory Management [ When I Clean The Data ]

	Set
	- Contain Any Type Of Values
	- Get Elements Count With Size
	- ForEach Available To Iterate
	- You Can Get Its Keys

	WeakSet
	- Contain Only Object
	- You Can't Use Size To Get Elements Count
	- ForEach Not Available To Iterate
	- You Can Not Get Keys

*/

let mainObject = {A:1};

let mySet = new Set([ mainObject ]);

let objectOne = {B:2};

let objectTow = {C:3};

mySet.add(objectOne);
mySet.add(objectTow);

console.log(mySet);

console.log(mySet.has(objectOne));

console.log(mySet.has(objectTow));

console.log(mySet.size);

console.log(mySet.keys());

mySet.delete(objectOne);

console.log(mySet.has(objectOne));

objectTow = null;

console.log(mySet.has(objectTow));

console.log(mySet);

mySet.add('String');

mySet.add(12);

console.log(mySet);

mySet.forEach(v => {

	console.log(v)

});

console.log(`${"#".repeat(30)}`);

/////////////////////////////////////////////////////////////////////////////////

let mainWeakObject = {A:1};

let myWeakSet = new WeakSet([ mainWeakObject ]);

let objectWeakOne = {B:2};

let objectWeakTow = {C:3};

myWeakSet.add(objectWeakOne);
myWeakSet.add(objectWeakTow);

console.log(myWeakSet);

console.log(mySet.has(objectWeakOne));

console.log(mySet.has(objectWeakTow));

// console.log(mySet.size);

// console.log(mySet.keys());

mySet.delete(objectWeakOne);

console.log(mySet.has(objectWeakOne));

objectWeakTow = null;

console.log(mySet.has(objectWeakTow));

console.log(myWeakSet);

// myWeakSet.add('String');

// myWeakSet.add(12);

// myWeakSet.forEach(v => {

// 	console.log(v)

// });
