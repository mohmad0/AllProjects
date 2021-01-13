var myDiv = document.querySelector('.main'),
	
	myid = document.createAttribute('id'),

	mytitle = document.createAttribute('title');

myid.value = 'good';

myDiv.setAttributeNode(myid);
	
mytitle.value = 'My Name';

myDiv.setAttributeNode(mytitle);