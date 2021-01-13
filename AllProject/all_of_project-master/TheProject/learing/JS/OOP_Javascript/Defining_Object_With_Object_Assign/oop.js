/*
	Defining Object:

	With Object.assign()

*/

const src1 = {

	prop1 : "Val1",
	prop2: "Val2",
	method1: function(){
		return `Method 1`;
	}
}




const src2 = {

	prop3 : "Val3",
	prop4: "Val4",
	method2: function(){
		return `Method 2`;
	}
}

const target = {

	prop5: "val5"
}




// This Will Take Copy From One Object Or More And Add It In Target
Object.assign(target, src1 , src2 , {prop6 : "Val6",});

console.log(target);



// This Will Create New Object And Will Take Copy From One Object Or More And Add It In The New Object
const myObject = Object.assign({} , target , {prop7 : "Val7",})

console.log(myObject);
console.log(myObject.prop1);
console.log(myObject.prop2);
console.log(myObject.prop3);
console.log(myObject.method1());
console.log(myObject.method2());