var myInputText = document.querySelector('.text-content'),
	
	mymaxLength = myInputText.getAttribute('maxlength'),

	myOutPutNum = document.querySelector('form span');

myInputText.oninput = function(){

	myOutPutNum.textContent = mymaxLength - this.value.length ;

	var cond_length = myOutPutNum.textContent == 0 ? myOutPutNum.classList.add('Zero') : myOutPutNum.classList.remove('Zero') ;

	// var cond_length = condition ? true : false;
}

