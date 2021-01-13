/*
	Object Meta Data:
	- writable
	- enumerable
	- configurable
	================
	Object.defineProperty(obj , prop , descriptor)

*/

const myObject = {

	a: 1,
	b: 2
}

Object.defineProperty(myObject, "c", {

	writable:true, // I Can Modifing On The Value 
	enumrable: true, // I Can Looping On The Object And The Value Olso
	configurable:true, // I Can Delete The Value And Canging The descriptor That Be Has To This Value
	value:3
});

myObject.c = 500;

for(let prop in myObject){

	console.log(prop , myObject[prop]);
}

// delete myObject.c;

console.log(myObject);

Object.defineProperty(myObject, "c", { // This Becouse The configurable ==> true

	writable:false // I Can Not Modifing On The Value 
});

myObject.c = 100;

///////////////////////////////////////////////////////////////////////////////////////////////////

// Write This
Object.defineProperty(myObject, "d", {

	writable:false, // I Can Not Modifing On The Value 
	enumrable: false, // I Can Not Looping On The Object And The Value Olso
	configurable:false, // I Can Not Delete The Value And Canging The descriptor That Be Has To This Value
	value:4
});

// Or  Write This
// Object.defineProperty(myObject, "d", {

// 	value:4
// });

myObject.d = 5000;

for(let prop in myObject){

	console.log(prop , myObject[prop]);
}

delete myObject.d;

console.log(myObject);

// Object.defineProperty(myObject, "d", { // This Becouse The configurable ==> true

// 	writable:true // Error Becouse The configurable ==> false
// });

myObject.d = 100;


console.log(Object.getOwnPropertyNames(myObject)) // This Will Get Names Only

console.log(Object.keys(myObject)) // This Will Get Names Only That ===>  I Can Do Loop On It 



// This Will Show ===>[ writable & enumrable & configurable ]
console.log(Object.getOwnPropertyDescriptor(myObject, "c"))





// This Will Show ===>[ writable & enumrable & configurable ]
console.log(Object.getOwnPropertyDescriptor(myObject, "d"))


///////////////////////////////////////////////////////////////////////////////////////////////////

// Object.defineProperties()

Object.defineProperties(myObject , { // This === defineProperty But In Here You Can Adding Multible ==> Property

	e:{
		writable:false, // I Can Modifing On The Value 
		enumrable: false, // I Can Looping On The Object And The Value Olso
		configurable:false, // I Can Delete The Value And Canging The descriptor That Be Has To This Value
		value:10
	},
	f:{

		value:20
	},
	g:{
		writable:true, // I Can Modifing On The Value 
		enumrable: true, // I Can Looping On The Object And The Value Olso
		configurable:true, // I Can Delete The Value And Canging The descriptor That Be Has To This Value
		value:30
	}

});