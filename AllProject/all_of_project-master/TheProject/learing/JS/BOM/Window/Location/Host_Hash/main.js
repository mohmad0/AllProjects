/*
	location.href :
			
			- Absolute URL
			- Page Within The Current Web Page
			- Hash Id Within The Page
			- Protocol [ FTP , Mail , File ]
*/





/*
	You Can Write window.location.hash :

		window.location.hash = 'chat'; // This Mean ==> #chat In href='chat' ==> This Is Set
		
		window.location.hash; // This Mean ==> Get 

	You Can Write window.location.host:
	
		window.location.host ;  // This Mean ==> Get 

		window.location.host = 'www.google.com'; // This Mean ==> Set Name Of Host
*/

if (window.location.hash.indexOf('chat') > -1 ){
	
	window.console.log('You Coming From chat ');

}

// window.console.log(window.location.host);


