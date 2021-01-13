/*

	Custom_Iterable_Object

*/

let myObject = {

	name: 'mohmad',
	age:23,
	city:'Cairo',
	favSkills: 'Javascript',
	[Symbol.iterator] () {

		let step = 0,

			properties = Object.keys(this); // This Is Keys Of ==> [ myObject ]

		// console.log(properties);

		return {
			next() {
				return {
					value:`${properties[step]} => ${myObject[properties[step]]}`,
					done: step++ === properties.length // If Step === properties.length This Mean ==> [ Done Is ] ==> True && The Loop Will Be Stoping
				}
			}
		}

	}
}

for(let info of myObject){

	console.log(info);
}