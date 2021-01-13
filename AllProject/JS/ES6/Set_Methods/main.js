/*

	Set Methods:

		add()	==> Normal Add()
				==> Chain Add()
		delete()
		clear()
		has()

*/

let user1 = new Set().add('ali').add('ahmed').add('mohmad'); // This Is Called Chain Add()

user1.delete('ali');

let user2 = new Set();

let user3 = new Set('mohmad'); // If You Add [String , Array , Object ] Will Make As Looping On String [ mohmad ] ==> ['m' , 'o' , 'h' , 'm' , 'a' , 'd']

user2.add('ali'); // This Is Called Normal Add()
user2.add('ahmed'); // This Is Called Normal Add()
user2.add('mohmad'); // This Is Called Normal Add()


console.log(user2.has('Mohmad'.toLowerCase()));

user3.clear();

console.log(user1);

console.log(user2);

console.log(user3);