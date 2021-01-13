/*
	
	Syntax: window.open(URL , Name Or Attribute , Specification , History Replace) This To Open Other Page
	
	spec:
	- width = Pixels [ Only Number Without Px ]

	Attribute:
	- _blank Or _self

	Name
	- Google Or Youtube Or Facebook Or ....

*/

var myButton = document.querySelector('button');

myButton.onclick = function () {

	window.open('https://www.facebook.com/' , '_blank' , 'width=600 , height=600 , left=500 , top=500 , menubar=yes , status=yes' , 'true');
}