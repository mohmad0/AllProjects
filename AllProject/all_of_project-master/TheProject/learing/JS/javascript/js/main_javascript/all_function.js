///////////////////////////////

console.log('lesson 21')

function power(){ // this function for powering to number Ex:  => 2**3
	let e1 = 2, w1 = 3, r1 =1  // this for powering to number Ex:  => 2**3
	for(let h1 = 0 ; h1 < w1 ; h1++) r1 *= e1
	console.log(r1)
}

console.log('power 1')

power()

console.log('power 2')

power()

console.log('power 3')

power()

///////////////////////////////

console.log('lesson 22')

function power(e = 1 , w = 0){ // this function with parametar for powering to number Ex:  => 2**3
	console.log(arguments)
	let r =1  // this for powering to number Ex:  => 2**3
	for(let h = 0 ; h < w ; h++) r *= e
	return r
}

console.log('power 1')

console.log( power(2,5) )

console.log('power 2')

console.log( power(3,4) )

console.log('power 3')

console.log( power(2,8) )


console.log( power() )

///////////////////////////////

console.log('lesson 23')

// after (return) => the code does't work 

// the all of parameters in function are in array is nameing by => (arguments) => console.log(arguments) in function

///////////////////////////////

console.log('lesson 24')

let mypower = function (o = 1 , u = 0){ // this function with parametar for powering to number Ex:  => 2**3
	console.log(arguments)
	let p =1  // this for powering to number Ex:  => 2**3
	for(let s = 0 ; s < u ; s++) p *= o
	return p
}

console.log( mypower(3,4) )

function the_Powering() {
	return function (g = 1 , d = 0){ // this function with parametar for powering to number Ex:  => 2**3
		console.log(arguments)
		let l =1  // this for powering to number Ex:  => 2**3
		for(let t = 0 ; t < d ; t++) l *= g
		return l
		}
}
var pow = the_Powering()
console.log( pow(2,9) )

///////////////////////////////

console.log('lesson 25') // Arrow function

var powers =  (e = 1 , w = 0) => { // ( => ) == function with parametar or without for powering to number Ex:  => 2**3
	
	let r =1  // this for powering to number Ex:  => 2**3
	for(let h = 0 ; h < w ; h++) r *= e
	return r
}

console.log( powers(2,3) )

///////////////////////////////

console.log('lesson 26')  // pure function 
  
function incrment(ss){  // this is pure function 
	return ++ss 
}

console.log(incrment(12))

///////////////////////////////

console.log('lesson 27')  // Scopes 

let x5 = 20  // this in the globle Scope 
function logX(){
	console.log(x5)
	let y9 = 50  // this in the local Scope
}
console.log()

//////////////////////////////

console.log('lesson 28')  // Var &&& Let

   
function logXc(){
	var x5 = 20 // this is function Scope

	if (true) {

		var x5 = 25
		console.log(x5)
	}

	console.log(x5)

	return 'done'
}

console.log(logXc())

function logXc(){
	let x5 = 20 // this is Block Scope

	if (true) {

		let x5 = 25
		console.log(x5)
	}

	console.log(x5)

	return 'done'
}

console.log(logXc())

//////////////////////////////

console.log('lesson 29') // IIFE => Immediately Invoked Function Expressions

!function() {  // this use one once only  like ( let )  block scope
  console.log('Welcome to the Internet. Please follow me.');
}();

//////////////////////////////
console.log('lesson 30')

// Operators are Functions ===>>> ( + , - ,* , / , > , < , && , ||  )


//////////////////////////////

console.log('lesson 32')

// Semicoln  &&  ASI

//////////////////////////////

(function() {  // this use one once only  like ( let )  block scope
  console.log('Welcome to the Internet. Please follow me.');
})();

(function() {  // this use one once only  like ( let )  block scope
  console.log('Welcome to the Internet. Please follow me.');
})();



console.log('lesson 37')  // Factory & Constructor

function Person(name , age) { // this is Factory && i not use it
	return {
		name,
		age
	}
}
let me = Person('mohmad' , 23)

let freind = Person('ahmed' , 6)
console.log(me)
console.log(freind)

//////////////////////////

function person2(name2 , age2){ // this is Constructor && i will use it all time
	this.name2 = name2
	this.age2 = age2
}

let me2 = new person2('mo_gamal' , 22.7)
let freind2 = new person2('ah_gamal' , 6.6)

console.log(me2)

console.log(freind2)

//////////////////////////////
console.log('lesson 38') // By Value & By Reference

let g = 8  // (8) this is Value
let r = g  // (r) this is Reference

console.log(g, r)

//////////////////////////////
console.log('lesson 39')  //  Named Parameters

function ro(l){
	let {m, n} = l
	console.log(m,n)
}

ro({
	m:2,
	n:7
})
