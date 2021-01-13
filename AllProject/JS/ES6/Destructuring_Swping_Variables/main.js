/*

	Destructuring_Swaping_Variables


*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// New Way

let book = 'Video',
	
	video = 'Book';

[book , video] = [video , book]; // This Will Swaping Between Variables

console.log(` Your ${book} And Your ${video}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Old Way

let name = 23,
	
	age = 'mohmad';

// Copy First Variable Inro Stach
var stach = name;

// Swaping Variables
name = age;

// Get Name Value From Stach
age = stach;

console.log(` Your ${name} And Your ${age}`);
