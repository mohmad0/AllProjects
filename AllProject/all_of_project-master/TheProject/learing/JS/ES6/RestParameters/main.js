/*

	Rest Parameters

*/

function addAll(...param) {

	let num = 0;

	for(let N of param) num += N;

	return num;

}

console.log(addAll(1));
console.log(addAll(1,2));
console.log(addAll(1,2,3));
console.log(addAll(1,2,3,4,5));
console.log(addAll(1,2,3,4,5,6,7));


function showInfo(a,b,c,...myOther) {

	console.log('first' , a);
	console.log('second' , b);
	console.log('three' , c);

	console.log('This Should Be Not Wright  ' , myOther);

	return 'Done...';

}

console.log(showInfo('mohmad' , 23 , 'Cool' , 'Good' , 'Done' , 'Lower'));