/*
	Class ==> Is === Constructor Function But Is Different In Some Points:

		1- Constructor Function I Can Take Instance From It Before Make Declear For It But ==> Class Is Cant
		2- Class Must Be Find In First ==> constructor But Constructor Function ==> Not Must
*/


class User{
	constructor(name , email){
		this.name = name;
		this.email = email;
	}
	sayHello(){
		return `Hello ${this.name}`;
	}

	showEmail(){
		return `Your Email Is ${this.email}`;
	}
	writeMsg() {

		return "Message From Parent Class";
	}
}

let user1 = new User("Mohmad" , "Mohmadailsia@gmail.com");

let user2 = new User("Ahmed");

console.log(user1.name)

console.log(user1.sayHello())

console.log(user1.showEmail())


console.log(user2.name)

console.log(user2.sayHello())

console.log(user2.showEmail())

console.log("#".repeat(30));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
	Static Property & Method
*/


class Users{

	// Static Property	
	static counter = 0; // This Special To This Class Only Not For The Instances

	constructor(name , email){
		this.name = name;
		this.email = email;
		Users.counter++;
	}
	sayHello(){
		return `Hello ${this.name}`;
	}

	showEmail(){
		return `Your Email Is ${this.email}`;
	}

	// Static Method
	static countObject = function(){

		return `${this.counter} Object Created`;
	}
}

let user3 = new Users("Mohmad" , "Mohmadailsia@gmail.com");

let user4 = new Users("Ahmed");

let user5 = new Users("Mohmad" , "Mohmadailsia@gmail.com");

let user6 = new Users("Ahmed");

let user7 = new Users("Mohmad" , "Mohmadailsia@gmail.com");

let user8 = new Users("Ahmed");

console.log(user3.name)

console.log(user3.sayHello())

console.log(user3.showEmail())


console.log(user4.name)

console.log(user4.sayHello())

console.log(user4.showEmail())

console.log(Users.countObject())

console.log("#".repeat(30));

console.log("#".repeat(30));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
	Inheritance
*/

class Admin extends User {
	constructor(name , email){
		super(name , email); // This To Not Wright ==> this.name = name & this.email = email
	}
	adminMsg() {

		return "Your Is Admin";
	}

	// Method Overide
	writeMsg() { // This Will Be Do Overide On The Function That Be In The Parent

		return "Message From Child Class";
	}
}

let admin1 = new Admin("Safe" , "Safe@yahoo.com");


console.log(admin1.name)
console.log(admin1.email);
console.log(admin1.adminMsg())
console.log(admin1.writeMsg())



console.log("#".repeat(30));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
	Javascript Accessors

	Getters & Setters
*/

class infos{

	constructor(name, email){
		this.name = name;
		this.email = email;
	}

	get sayHello(){ // This Is Used To Private Informations That Be In The Parent Class Constructor

		return `Hello ${this.name}`;
	}

	set changeEmail(newEmail){ // This Is Used To Private Informations That Be In The Parent Class Constructor

		this.email = newEmail;
	}
}

let info = new infos("Mohmad" , "mmmm@gmail.com");

console.log(info.name);

console.log(info.sayHello);

info.changeEmail = "mohmadailsia@gmail.com";

console.log(info.name);

console.log(info.email);

console.log(info.sayHello);


