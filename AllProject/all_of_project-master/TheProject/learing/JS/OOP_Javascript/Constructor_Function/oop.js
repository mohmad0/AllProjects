/*
	Constructor Function


*/

function Phone(serial , color , price){ // This Will Be Controled On Any Object Will Take Any Information From Here

	this.serial = serial;
	this.color = color;
	this.price = price - 100; /// Any Price Will Be Minus From It ==> 100
}

const phone1 = new Phone(123, "Red", 500);
const phone2 = new Phone(654, "Green", 500);
const phone3 = new Phone(231, "Blue", 500);

console.log(phone1.serial)
console.log(phone1.color)
console.log(phone1.price)

console.log(phone2.serial)
console.log(phone2.color)
console.log(phone2.price)

console.log(phone3.serial)
console.log(phone3.color)
console.log(phone3.price)

console.log(`#`.repeat(30))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Phone1(serial){
	// This Is Created Object From The Constructor Function
	console.log(this);

	this.serial = `#${serial}`;

}

let phone4 = new Phone1(123456); // This Will Take Instance From Phone1
let phone5 = new Phone1(223565); // This Will Take Instance From Phone1
let phone6 = Phone1(984732);	 // This Will Not Take Instance From Phone1 But From Window

console.log(phone4.serial);
console.log(phone5.serial);
// console.log(phone6.serial); // This Will Return Error ==> Wright This ==> window.serial


// This For Do Check If Is instance Or Not
console.log(phone4 instanceof Phone1); // Will Return true
console.log(phone5 instanceof Phone1); // Will Return true
// console.log(phone6 instanceof Phone1); // Will Return false


console.log(phone4.constructor === Phone1); // Will Return true 
console.log(phone5.constructor === Phone1); // Will Return true
// console.log(phone6.constructor === Phone1); // Will Return Error

console.log(`#`.repeat(30))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function User(fName , lName , age){
	this.fName = fName; // I Use This If I Want To Modified On It
	this.lName = lName;
	this.age = age;

	this.country = "Egypt"; // This Is Cant Be Modified On It But Can Be Only Access On It 


	this.fullName = function(){
		return `Full Name Is ${this.fName} ${this.lName}`
	}
	this.ageInDays = function(){
		return `Age In Days : ${this.age * 365}`
	}
}


// User.country = "Egypt"; ===>  Wrong To Modifing


let user1 = new User("Mohmad" , "Gamal" , 23);
let user2 = new User("Ali" , "Gamal" , 22);




console.log(user1.fName)
console.log(user1.lName)
console.log(user1.age)
console.log(user1.country)
console.log(user1.fullName())
console.log(user1.ageInDays())







console.log(user2.fName)
console.log(user2.lName)
console.log(user2.age)
console.log(user2.country)
console.log(user2.fullName())
console.log(user2.ageInDays())



console.log(`#`.repeat(30))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Users(name , email , age , showEmail){
	this.name = name;
	this.email = email;
	this.age = age;
	this.updateName = function(newName){
		this.age > 18 ? this.name = newName : console.log("You Cant Be Upate The Name Becouse You Is A Yong");
	}
	this.showEmail = showEmail ? `The Email Is ${this.email}`  : "Data Is Private" ;
}

let user3 = new Users("Mohmad", "Mohmadailsia@gmail.com", 23, true);

console.log(user3.showEmail);
console.log(user3.age);

console.log(user3.name);

user3.updateName("Ali")

console.log(user3.name);

console.log(`#`.repeat(30))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Names(name){

	this.name = name;
	this.welcome = function(){
		return `Welcome ${this.name}`;
	}
}

let user4 = new Names("Mohmad");
let user5 = new Names("Ali");

let obj1 = new Object({a: 1});
let obj2 = new Object({b: 2});
let obj3 = { c : 3};		// This Is The Method True To Wright The String

// obj1  === obj2  === obj3  ==> This Are Coming From Object Function Constructor

console.log(obj1.constructor)
console.log(obj2.constructor)
console.log(obj3.constructor)

let num1 = new Number(1);
let num2 = new Number(2);
let num3 = 3;				// This Is The Method True To Wright The Number

// num1  === num2  === num3  ==> This Are Coming From Number Function Constructor

console.log(num1.constructor)
console.log(num2.constructor)
console.log(num3.constructor)


let str1 = new String("root");
let str2 = new String("tree");
let str3 = "food"; 				// This Is The Method True To Wright The Number


// str1  === str2  === str3  ==> This Are Coming From Sring Function Constructor

console.log(str1.constructor)
console.log(str2.constructor)
console.log(str3.constructor)
