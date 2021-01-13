/*
	Defining Object:

	With Object.create()

*/

let mainObj = {

	hasDiscount: true,
	showMsg:function() {

		return `You${this.hasDiscount ? "" : " Don't"} Have Discount`;
	}
}


console.log(mainObj.hasDiscount);

console.log(mainObj.showMsg());


let otherObj = Object.create(mainObj); // This Will Take Copy From [ mainObj Only And Add On It And So On


otherObj.hasDiscount = false;

console.log(otherObj.hasDiscount);

console.log(otherObj.showMsg());




let lastObj = Object.create(mainObj); // This Will Take Copy From [ mainObj Only And Add On It And So On


console.log(lastObj.hasDiscount);

console.log(lastObj.showMsg());