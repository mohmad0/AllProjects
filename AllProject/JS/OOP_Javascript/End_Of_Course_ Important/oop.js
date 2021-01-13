/*
	Important Notes And The End
	[1] Arrow Functions Do Not Have A Prototype Property
	[2] You Can Use Objects Inside Constructor Freely
	[3] f = function () {}  ==== f() {}

*/

class User{
	constructor(fName , lName , age , email ){
		this.name = {  // You Can Write Object In The Constructor
			first: fName,
			last: lName
		};
		this.age = age
		this.email = email
	}

	sayHello = function(){
		return "Say Hello"
	}

	sayHi(){
		return "Say Hi"
	}
}

let user1 = new User("Mohmad" , "Gamal" , 23 , "mmmm@gmail.com");

console.log(user1.name.first)
console.log(user1.name.last)
console.log(user1.age)
console.log(user1.email)
console.log(user1.sayHello())
console.log(user1.sayHi())