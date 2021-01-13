// Var Let Const

/*

	var
	- Function Scope
	- Can Be ReDeclare
		var x = 2;
		var x = 5;
		console.log(x) ===> 5
	- Undefined When Accessing A Variable Before It's Declare
		console.log(x)
		var x = 4; ===> Undefined
	- Create Propertes In The Window Object
		var mohmad = 3;
		var ahmed = 10;
		console.log(mohmad);
		console.log(ahmed);
			Undefined


	let
	- Block Scope
	- Cannot Be ReDeclare
		let x = 2;
		let x = 5;
		console.log(x) ===> Cannot Be ReDeclare
	- ReferanceError When Accessing A Variable Before It's Declare
		console.log(x)
		let x = 4; ===> ReferanceError
	- Does Not Create Propertes In The Window Object
		var mohmad = 3;
		var ahmed = 10;
		console.log(mohmad);
		console.log(ahmed);
			Error


	
	const
	- Block Scope
	- Cannot Be ReDeclare
		const x = 2;
		const x = 5;
		console.log(x) ===> Cannot Be ReDeclare
	- ReferanceError When Accessing A Variable Before It's Declare
		console.log(x)
		const x = 4; ===> ReferanceError
	- Does Not Create Propertes In The Window Object
		var mohmad = 3;
		var ahmed = 10;
		console.log(mohmad);
		console.log(ahmed);
			Error



*/

function go(){

	// This Is Other Block Scope

	var x = 2;

//////////////////////////////////////////////////////////  This Is Block Scope

	if (true) {

		var x = 5;

		console.log(x);
	}

//////////////////////////////////////////////////////////

	console.log(x);

	return true;

}

go(); // This Will Product 5  5  true



function good(){

	// This Is Other Block Scope

	let x = 2;

//////////////////////////////////////////////////////////  This Is Block Scope

	if (true) {

		let x = 5;

		console.log(x);
	}

//////////////////////////////////////////////////////////

	console.log(x);

	return true;

}

good(); // This Will Product 2  5  true

const info = {
	'name' : 'mohmad',
	'age'  : 22.9
}

console.log(info.name = 'ali');

Object.freeze(info);

const info = {

	'name' : 'ahmed'
}


console.log(info);