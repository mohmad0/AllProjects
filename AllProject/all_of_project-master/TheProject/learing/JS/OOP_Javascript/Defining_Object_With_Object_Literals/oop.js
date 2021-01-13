/*
	Defining Object:

	Object Literal	

*/

let user = {
	// Properties
	firstName: "Mohmad",
	lastName: "Gamal",
	age: 23,
	addresses: {
		eg: "Giza",
		usa: "California",
		ksa: "Riyadh",
		getAgeInDays: () => `Your Age Is: ${user.age}`,
		getMainAddresses: () => `The Main Addresse Is: ${user.addresses.ksa}`
	},

	// Methods
	// getFullName: function () {
	// 	return `Hello Your Full Name Is: ${user.firstName} ${user.lastName} `;
	// },
	getFullName:  () => `Hello Your Full Name Is: ${user.firstName} ${user.lastName} `
};

// Accessing Object Properties
console.log(user.firstName); // Dot Notation
console.log(user["lastName"]); // Bracket Notation

console.log(user.addresses.eg);
console.log(user["addresses"]["ksa"]);

console.log(typeof user.firstName); // String

// Accessing Object Methods
console.log(user.getFullName());

console.log(typeof user.getFullName); // Function

console.log(user.addresses.getAgeInDays());

console.log(user.addresses.getMainAddresses());
