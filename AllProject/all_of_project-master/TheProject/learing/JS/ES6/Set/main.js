/*

	Set ==> new Set(Iterable) ==> The Iterable  ===> Is Something I Can Do On it Looping [ Object , Array , String ]
 
	Set Is Be Simelar To For Object But It Has No Key
*/

let myArray = [1,2,3,44,4,44,1,2,3,4,5,55,55,555,55,55];

let mySet = new Set([1,2,3,44,4,44,1,2,3,4,5,55,55,555,55,55]); // This Has Only Unice Content

let mySet1 = new Set(myArray); // This To Convert The [Array] To ==> [Set]


console.log(myArray);

console.log(myArray[2]); // You Can Be Access On It

console.log(mySet); // You Not Can Be Access On It

console.log(mySet1);

console.log([...mySet1]); // This To Convert The [Set] Into ===> [Array]

console.log(typeof mySet);