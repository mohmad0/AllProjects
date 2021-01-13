var myback = window.document.querySelector('div'),
	
	classList = ['url("10.jpg")' , 'url("12.jpg")' , 'url("13.jpg")'],

	change_back = Math.floor(Math.random() * classList.length);


myback.style.backgroundImage = classList[change_back];

myback.style.backgroundSize = 'cover';

myback.style.minHeight = '483px';

window.document.body.style.padding = '0';

window.document.body.style.margin = '0';

