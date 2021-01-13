/*

	Spread Operator ==> ...

*/

let arrayOne = [1,2,3],

	arrayTow = [4,5,6],

	customArray = [...arrayTow , 7 , 8 , 9 , 10],

	num1 = arrayOne,

	num2 = [...arrayOne],

	Numbers = [10 , 20 , -49 , 1000 , 399 , -2999];

console.log(Math.min(...Numbers));

console.log(Math.max(...Numbers));

console.log(Math.min.apply(Math,Numbers));

console.log(Math.max.apply(Math,Numbers));

num2.push(4 , 5 , 6);


console.log(num2);



console.log(customArray);

console.log(arrayOne.concat(arrayTow));


let allArray = [...arrayOne,...arrayTow];

console.log(allArray);

function sum(x,y,z) {

	return x + y + z;
}

let myNumbers = [1 , 2 , 3];

console.log(myNumbers);

console.log(...myNumbers);

console.log(sum(...myNumbers)); // New Way


console.log(sum.apply(void 0 , myNumbers)); // Old Way &&& You Can Put [void 0] Or [Null]


console.log(sum.apply(null, myNumbers)); // Old Way &&& You Can Put [void 0] Or [Null]