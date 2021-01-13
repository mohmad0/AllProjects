/*

	Generators Part 1

*/

function * generateTickets() {

	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	yield 6;

}

let iterator = generateTickets();

console.log(typeof iterator);

console.log(iterator.next().value);

console.log(`${"#".repeat(30)}`);

console.log(`generateTicket 1`);

console.log(iterator.next().value);

console.log(`${"#".repeat(30)}`);

console.log(`generateTicket 2`);

console.log(iterator.next().value);

console.log(`${"#".repeat(30)}`);

console.log(`generateTicket 3`);

console.log(iterator.next().value);

console.log(`${"#".repeat(30)}`);

console.log(`generateTicket 4`);

console.log(iterator.next().value);

console.log(`${"#".repeat(30)}`);

console.log(`generateTicket 5`);

console.log(iterator.next().value);

console.log(`${"#".repeat(30)}`);

/////////////////////////////////////////////////////////////////////////////////

let myNumbers = [1 , 2  , 3 ,4 ,5 ,6];

function * generateNumbers(nums) {

	for(let i = 0; i < nums.length; i++){

		yield nums[i];
	}

}

let generators = generateNumbers(myNumbers);

console.log(generators.next().value);
console.log(generators.next().value);
console.log(generators.next().value);
console.log(generators.next().value);
console.log(generators.next().value);
console.log(generators.next().value);


console.log(`${"#".repeat(30)}`);

/////////////////////////////////////////////////////////////////////////////////

function * generateNums() {

	yield * [1 , 2  , 3 ,4 ,5 ,6];
	yield 7
}

let thegenerators = generateNums();

console.log(thegenerators.next().value);
console.log(thegenerators.next().value);
console.log(thegenerators.next().value);
console.log(thegenerators.next().value);
console.log(thegenerators.next().value);
console.log(thegenerators.next().value);
console.log(thegenerators.next().value);

console.log(`${"#".repeat(30)}`);

function * gene(create) {

	yield create;
}

console.log(gene(1).next().value);
console.log(gene(2).next().value);
console.log(gene(3).next().value);
console.log(gene(4).next().value);
console.log(gene(5).next().value);
console.log(gene(6).next().value);
console.log(gene(7).next().value);

console.log(`${"#".repeat(30)}`);

/////////////////////////////////////////////////////////////////////////////////

/*

	Generators Part 2

*/

// Test Return

function * sayNames() {

	yield 'mohmad';
	return 'ail'; // This Will Do Stoping For Function Generator And Print ==> done: true
	yield 'ahmed'; // The Value: undefinied
}

let names = sayNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());

console.log(`${"#".repeat(30)}`);

function * skills() {

	yield 'PHP';
	yield 'CSS';
	yield 'HTML';

}

let theskills = skills(); // Iterator

for(let skill of theskills){

	console.log(skill);
}


console.log(`${"#".repeat(30)}`);

function * myskills() {

	alert('skill PHP');
	console.log('PHP');
	alert('skill CSS');
	console.log('CSS');
	alert('skill HTML');
	console.log('HTML');

}

let theskillsWithoutYield = myskills(); // Iterator

console.log(myskills().next());

/////////////////////////////////////////////////////////////////////////////////

/*

	Generators Part 3
	
	Generators Infinite
*/

// Infinite Loop To Take Any Number

function * createInfinite() { // Do Not Loop On This


	let i = 0;

	while(true){

		yield i++;
	}

}

let infiniteIterator = createInfinite();

console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next()); // Will Print Number 5

for(let num of infiniteIterator){

	if (num > 60) {

		break;
	}

	console.log(num); // Will Start From Number 6

}

/////////////////////////////////////////////////////////////////////////////////

/*

	Generators Part 4
	
	Delegating Generators
*/

function * generateNumbers1() { // Generator 1


	yield 1;
	yield 2;
	yield 3;

}

function * generateNams() { // Generator 2


	yield 'Mohmad';
	yield 'Ali';
	yield 'Ahmed';

}

function * generateAll() { // This Is responsible of Do ==> [ Generator 1 Then Generator 2 ]


	yield * generateNumbers1(); // Do This First
	yield * generateNams();	// Do This Second
}

let genAll = generateAll();

console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());