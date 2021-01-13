var myInputHead = document.querySelector('.head-content'),
	
	myInputText = document.querySelector('.text-content'),

	myOutPutHead = document.querySelector('div h1'),

	myOutPutText = document.querySelector('div p');

function Live_Output(input_live , output_live) {
	
	input_live.onkeyup = function(){

		output_live.textContent = this.value;
	}

}

Live_Output(myInputHead , myOutPutHead);

Live_Output(myInputText , myOutPutText);