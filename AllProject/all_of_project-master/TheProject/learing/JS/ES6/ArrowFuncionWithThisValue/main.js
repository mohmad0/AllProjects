function persone1(){

	let that = this;

	that.age = 0;

	let go = setInterval(function(){

		that.age++;

		console.log(that.age);

	},1000);

	clearInterval(go)
}

let user = new persone1();


function persone2(){

	this.age = 10;

	let go2 = setInterval( () => { // Arrow Function Is Using Any ==> [ this ] In The Block That It Found In Here

		this.age++;

		console.log(this.age);

	},1000);

	clearInterval(go2)
}

let user1 = new persone2();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let test = function () {

	window.document.getElementById('show').innerHTML = this; // this In Here Will Give The Content Of test
}

// Window Object Called The Function
window.onload = test;

// Button Object Called The Function
window.document.querySelector('.bt1').addEventListener('click' , test); // this In Here Will Give The Content Of button

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let test1 = () => window.document.getElementById('show').innerHTML = this; // this In Here Will Give The Content That Is Here On It

// Window Object Called The Function
window.onload = test1;

// Button Object Called The Function
window.document.querySelector('.bt2').addEventListener('click' , test1); // this In Here Will Give The Content Of button