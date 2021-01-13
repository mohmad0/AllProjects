var myParent = document.querySelector('.parent');


	console.log(myParent.firstElementChild.nextSibling); // This Will return The Next Only [text or Element or comment]


	console.log(myParent.firstElementChild.nextElementSibling); // This Will return The Next Only [ Element ]


	//////////////////////////////???////////////////////////////////////////////////?/////////////////////////////////////////////////////


	console.log(myParent.lastElementChild.previousElementSibling); // This Will return The previous Only [ Element ]


	console.log(myParent.lastElementChild.previousSibling); // This Will return The previous Only [text or Element or comment]


	