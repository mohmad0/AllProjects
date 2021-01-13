/*

	ForEach(CurrentValue, index , Array) 

	The ForEach Will Be Do Scape For =====> [ Empty Element ] && Will Do Only On The Element That Be Found

*/

const  arr 	= ['A' , 'B' , 'C' , 'D' , , 'F'];

for (let i = 0; i < arr.length; i++) { // The ForEach Will Not Be Do Scape For =====> [ Empty Element ] 

	console.log(`${i} - ${arr[i]}`);

}

console.log(`${"#".repeat(30)}`);

arr.forEach((el , i) => { // The ForEach Will Be Do Scape For =====> [ Empty Element ] && Will Do Only On The Element That Be Found	

	console.log(`${i} - ${el}`); 


});

console.log(`${"#".repeat(30)}`);

let calBack = 0;

arr.forEach((el , i) => {

	console.log(`${i} - ${el}`);	

	calBack++

});

console.log(`This Number Of CalBack ==> ${calBack} `);

console.log(`${"#".repeat(30)}`);

function makeLoop(Element , Index) {

	console.log(`${Element} - ${Index}`);
}

arr.forEach(makeLoop);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//													[ Set && Map ] In ForEach

console.log(`${"#".repeat(30)}`);

/*

	Set

	Set.forEach(Value1 Of Set ,Value2 Of Set , ...)


*/

const mySet = new Set([1, 2, 3 , 4 , 5 , 5 ,5 , 44, 7,  7 ,6,8]);

mySet.forEach((item1 , item2) => {

	console.log(`${item1} - ${item2}`);

});

console.log(`${"#".repeat(30)}`);


/*

	Map

	Map.forEach(Key , Value )


*/

const myMap = new Map([['A' , 1] , ['C' , 3] , ['B' , 2]  , ['X' , {}]]);

myMap.forEach((Value , Key) => {

	console.log(`${Key} => ${Value}`);

});