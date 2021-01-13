console.log('lesson 33')  // Object

let obj = {
	name : 'mohmad',
	age : 23 
}
console.log(obj['name']) // [variable ] => obj[name] without ''

console.log(obj.age)

//////////////////////////////
console.log('lesson 34')

let obj1 = {
	name : 'mohmad',
	age : 23,
	walk () {
		console.log('walked')
	},
	getInfo1 () {
		function printInfo1(){
			let that = this   //  this befour ES6
			console.log(that.name + ' ' + that.age)
		} 
		printInfo1()
	},
	getInfo2 () {
		var printInfo2 = () => {   // This after ES6
				return this.name + ' ' + this.age
		}
		console.log( printInfo2() )
	}

}
obj1.getInfo2()


//////////////////////////////
console.log('lesson 35')

let obj4 = {
	name : 'mohmad',
	age : 23 
}
for(let prop in obj4) console.log(prop, obj4[prop])  // this for array or object or ....

console.log('name' in obj4)  //  (in) => for chaking 

console.log('good' in obj4)

//////////////////////////////
console.log('lesson 36')  // Comparing Objects

let obj5 = {
	name : 'mohmad',
	age : 23 
}

let fd = obj5

console.log(fd == obj5)

//////////////////////////////