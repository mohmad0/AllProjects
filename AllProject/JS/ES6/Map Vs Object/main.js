/*

	Map Vs Object

	Map ==> You Can Add Any Data 
	
	Object ==> You Can Special Data

*/

var user = {}; // Empty Object

user['name'] = 'mohmad';
user.website = 'facebook.com';
user['10'] = 'String';
user[10] = 'Number'; // This Will Be Override On Before

console.log(user);
console.log(user.name);
console.log(user['website']);


// Method 1 To Adding

let myMap = new Map([
	['10' , 'String'],
	[10 , 'Number'],
	[10 , 'Number'], // This Will Be Override On Before
	[false , 'Boolean'],
	[{a:1 , b:2} , 'Object'],
	[function Do() {} , 'Function']
]);

// Method 2 To Adding [Normal Add || Chain Add]

// myMap.set('10' , 'String');
// myMap.set(10 , 'Number');
// myMap.set(false , 'Boolean');
// myMap.set({a:1 , b:2} , 'Object');
// myMap.set(function Do() {} , 'Function');

console.log(myMap);


console.log(` Using Size Method ${myMap.size}`);

console.log(` Using Get Method ${myMap.get(10)}`);
console.log(` Using Get Method ${myMap.get('10')}`);


console.log(` Using Has Method ${myMap.has(false)}`);

console.log(` Using Delete Method ${myMap.delete(false)}`);

console.log(` Using Size Method [Before Clear Method] ==>  ${myMap.size}`);

myMap.clear();

console.log(` Using Size Method [After Clear Method]  ==> ${myMap.size}`);