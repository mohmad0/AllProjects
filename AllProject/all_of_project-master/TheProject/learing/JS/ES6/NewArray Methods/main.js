/*

	New Array Methods

	Array.of()
	Array.from()
	Array.fill()
	Array.find()
	Array.findIndex()
	Array.copyWithIn()

*/

// Array.of(Elements To Create The Array)

let oldArray = Array(100); // This Will Make Array Has Contain [ 100 Place ]

console.log(oldArray);
console.log(oldArray.length);


let newArray = Array.of(100); // This Will Make Array Has Contain On Element Only ==> 100

console.log(newArray);
console.log(newArray.length);

console.log(`${"#".repeat(30)}`);

////////////////////////////////////////////////////////////////////////////////

// Array.from(Iterable[String , Array , Map], MapFunction , This)

let myName = "Mohmad",
	
	arrayOfLetters = Array.from(myName); // This Will Separate The Element Of This String And Put It On Array

console.log(myName);

console.log(arrayOfLetters);

let myNumber = [10 ,20 , 30 , 40 , 50 , 60 , 70 , 80],
	
	numberMinusTen = Array.from(myNumber , number => number - 10); // This Make Array And Do Function On It

console.log(numberMinusTen);

console.log(`${"#".repeat(30)}`);

////////////////////////////////////////////////////////////////////////////////

// // Array.fill(Value Of Fill , Start Default 0 , End Default Array.length)

let theNumber = [10 ,20 , 30 , 40 , 50 , 60 , 70 , 80];

// theNumber.fill(100); // All Will Be 100

// theNumber.fill(100 , 2); // All Will Be 100 But From [ number 30 To End ]

theNumber.fill(100 , 2 , 6); // Will Replace Index 2 ==> 100 To ==> index 5

console.log(theNumber);

console.log(`${"#".repeat(30)}`);

////////////////////////////////////////////////////////////////////////////////
// Array.find() Not return All Values

let myNumbers1 = [10 ,20 , 30 , 40 , 50 , 60 , 70 , 80],
	
	found1 = myNumbers1.find(Element => Element > 40); // This Will return [ Only ] The First Number Will Be > 40 From The Array 

console.log(found1);

console.log(`${"#".repeat(30)}`);

////////////////////////////////////////////////////////////////////////////////
// Array.findIndex() Not return All Values

let myNumbers2 = [10 ,20 , 30 , 40 , 50 , 60 , 70 , 80],
	
	found2 = myNumbers2.findIndex(Element => Element > 40); // This Will return [ Only ] The First Number Will Be > 40 From The Array 

console.log(found2);

console.log(`${"#".repeat(30)}`);

////////////////////////////////////////////////////////////////////////////////
// Array.copyWithIn(Target, Start Default 0 , End Default Array.length)

let myLetters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G'];

myLetters.copyWithin(2 , 4 , 6); // This Will Make Copy From ==> [ E , F ] Then Will Remove [ B , C ] And Put [ E , F ] 

console.log(myLetters)


console.log(`${"#".repeat(30)}`);