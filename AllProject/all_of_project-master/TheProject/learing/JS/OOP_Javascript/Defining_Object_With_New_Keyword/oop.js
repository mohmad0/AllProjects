/*
	Defining Object:

	With New Keyword

*/

let user = new Object();

user.firstName = "Mohmad";
user.lastName = "Gamal";

user["age"] = 23;

user.getFullName = () => `Your Full Name Is: ${user.firstName} ${user.lastName}`;


console.log(user);

console.log(user.firstName);

console.log(user["lastName"]);

console.log(user.age);

console.log(user.getFullName());