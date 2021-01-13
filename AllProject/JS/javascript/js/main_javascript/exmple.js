
console.log('lesson 75') // Exercise 2 (Prime numbers Generator) 

// prime number ==> % of number === 0 && != number / 1

/*
	* make list for results
	* give numbers of loop 
	* make loop 
	* lock if number % 0 && number / number != number / 1 
		push number in list
		return list


*/

function printedNumbers(numberOfLooping){
	let listForPrimeNumbers = []
	let currentNumer = 2
	while(listForPrimeNumbers.length < numberOfLooping) {
		if(checkForPrimeNumbers(currentNumer)){
			listForPrimeNumbers.push(currentNumer)
			
		}
		currentNumer++
	
	}
	return listForPrimeNumbers
}	


function checkForPrimeNumbers(number){
	for(let i = 2 ; i < number ; i++ ){
		if(number % i === 0){
			return false
		}
	
	}
	return true
}	

console.log(printedNumbers(5))

console.log(printedNumbers(10))

console.log(printedNumbers(12))


