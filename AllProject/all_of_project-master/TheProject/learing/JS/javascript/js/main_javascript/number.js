//////////////////////////////
console.log('lesson 40')   ///  Numbers

/*
	4
	4.5
	Number
	
	312.65
	exponential
		312.65 ====> 3.1265 * 10^+2 (if . moveing towords left => the sign is (+) but if . moveing towords right => the sign is (-))
		e == 10^ 

	===============================
	decimal numbers == 0x
*/

let q = 3.1265e+2
console.log(q)

let q1 = 0xf
console.log(q1)

//////////////////////////////
console.log('lesson 41') // Number Methods

let td = 74.3992

console.log(td.toExponential(2))

console.log(td.toFixed(2))

console.log(td.toPrecision(3))

console.log(td.toString())

//////////////////////////////
console.log('lesson 42')  /// Special Numbers  As  infinity  &&  -infinity && NaN

console.log(5/0)     // infinity
console.log(5**2024) // infinity

console.log(-5/0)     // -infinity
console.log(-(5**2024)) // -infinity

console.log('mohmad'*4) // NaN  && olso / , - 

console.log(isNaN(4)) // this for check NaN Or Not

//////////////////////////////
console.log('lesson 43')  // 0.1 + 0.2 != 0.3

console.log(0.1 + 0.2 != 0.3)  // true

console.log(0.1 + 0.2) // false  ====> 0.30000000000000004

console.log((0.1*10 + 0.2*10)/10 == 0.3) // true

//////////////////////////////