/*
	Protocol :
			
		- http  = Hypertext Transfer Protocol
		- https = Hypertext Transfer Protocol Secured
		- FTP`  = File Transfer Protocol`
		- File
		- Mailto
		
*/





/*
	You Can Write window.location.Protocol :

		window.location.Protocol = 'https or file or ...'; // This Mean ==> #chat In href='chat' ==> This Is Set
		
		window.location.Protocol; // This Mean ==> Get 

	You Can Write window.location.location.search:
		
		window.location.search ;  // This Mean ==> Get 

		window.location.search = "?tab=wm&ogbl"; // This Mean ==> Set search Of Your Website
*/

if (window.location.hash.indexOf('chat') > -1 ){
	
	window.console.log('You Coming From chat ');

}

window.console.log(window.location.pathname); // This Will Git The path After Name Host In Your Link

window.console.log(window.location.protocol);

window.console.log(window.location.search); // Write This Code in Other page in the website he will Git Link Of Search But Not Wright This Code In Home page In Website He Not Give For You Any Thing