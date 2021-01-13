/*global console */ 



var myDiv = document.querySelector('div');

if(myDiv.classList.length == 4){
	console.log('The Number Of Classes Is 4');
}

if(myDiv.classList.item(1) == 'click'){

	console.log('The Classes has click class');
}

if(myDiv.classList.contains('show')){

	console.log('The Classes has show class');
}


console.log(myDiv.classList);