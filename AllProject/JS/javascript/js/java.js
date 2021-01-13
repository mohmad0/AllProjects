/*

 [i] case inseneitive
 [g] globale search
 [m] multi line search
 [...]  
 [^...] Not Characetar
 [a-z]
 [A-Z]
 [0-9]
 [^0-9]
 [A-g]
 [0-9a-z]
 Letter+ ==> 					(/d+/gi)

 Letter{number} 				(/d{2}/gi)   		this will search ==> dd only

 Letter{number, number} 		(/d{2,3}/gi) 		this will search ==> dd or ==> ddd

 Letter{number,} 				(/d{2,}/gi)  		this will search at lest ==> dd or ddd or dddd or .....
 
*/

var nam = 'mohmad'
	res = nam.replace(/[^m]/gi , '@')

console.log(res)
















