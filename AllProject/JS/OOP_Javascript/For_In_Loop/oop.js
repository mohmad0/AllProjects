/*
	For ... In Loop
	Loop Through The Properties Of The Objects

*/

const user = {
	name: "mohmad",
	age:23
}

let data = '';

for(let info in user){

	data += `<div> The ${info} Is => ${user[info]} </div>`;
}

document.querySelector('.info').innerHTML = data;