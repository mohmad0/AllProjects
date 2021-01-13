var myh1 = window.document.querySelector('div h1'),

	myParagragh = window.document.querySelector('div p'),

	myTextHead = 'This Is Your Dreem Home',

	myTextParagragh = 'Choose Your Dreem Home';


function Type_Wrighter(text , text_output){

		var i = 0,

		typeWright = setInterval(function(){

			text_output.textContent += text[i];

			i = i + 1;
			
			if(i > text.length -1){

				clearInterval(typeWright);
			}

		},100);

	};


Type_Wrighter(myTextHead , myh1);

Type_Wrighter(myTextParagragh , myParagragh);

