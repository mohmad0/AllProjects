let myObj = {

	"One" : 1,
	"Tow!": 2
};

console.log(myObj.One);

// console.log(myObj."One"); // Syntax Error [ False ]
// console.log(myObj.Tow!); // Syntax Error [ False ]


console.log(myObj["One"]); // This True
console.log(myObj["Tow!"]); // This True 


let myObj2 = {

	 1:"One",
	 2: "Tow"
};

// console.log(myObj2.1); // Syntax Error [ False ]


console.log(myObj2["1"]);
console.log(myObj2["2"]);

let myVar = "name";

let myLastObj = {
	name: "Mohmad"
}

console.log(myLastObj.myVar); // Undefined

console.log(myLastObj[myVar]);  // Mohmad

console.log(myLastObj["name"]);  // Mohmad