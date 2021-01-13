/*

	New String Methods

	startsWith => string.startsWith(Search String, Position = 0)

	endsWith => string.endsWith(Search String, End Position = string.length)

*/


let x = 'Video - Learn How To Learn';

console.log(x.endsWith('Learn')); // This Mean ==> Do The String End With [Learn] ??

console.log(x.endsWith('To', x.length - 6));

console.log(x.endsWith('To', 20)); // This Mean ==> Do The String End With [Learn] From Index [ 20 ] ??

console.log(('Video - Learn How To'.length));


console.log(x.startsWith('Video')); // This Mean ==> Do The String Start With [Video] ??

console.log(x.startsWith('Learn' , 8)); // This Mean ==> Do The String Start With [Learn] From Index [ 8 ] ??