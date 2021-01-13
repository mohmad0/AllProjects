console.log('lesson 51') //  Arrays

let ar = [1,2,3,4,5,6]

console.log(ar)

console.log(ar[3])

console.log(ar[3] = 'mohmad')

console.log(ar)

//////////////////////
console.log('lesson 52') // Add & Delete Elements

let ar1 = ['ali', 'ahmed' , 'safe', 'malek']

console.log(ar1.push(1,2,3)) // For Adding in last Array

console.log(ar1)

console.log(ar1.pop())  //  For removing last element in Array 

console.log(ar1)

console.log(ar1.unshift(1,2,3)) // For Adding In First Array

console.log(ar1)

console.log(ar1.shift()) // For removing from First Array

console.log(ar1)

console.log(ar1.splice(3, 2 , 'yasen', 'gamal'))  // splice(index, element deleted, element added) ==> when element deleted == 0 this will do adding only but it == 1,2,3,4..... this will do deleted then adding

console.log(ar1)

//////////////////////
console.log('lesson 53') // Filling Elements

let ar2 = ['koko', 'food','deed']

console.log(ar2.fill('good' , 1, 2)) // this will adding => (good) in index (1) 

console.log(ar2.copyWithin(1 , 2 , 3))  // this do copy for ==> deed &&& alternate it by index 1 ==> good

console.log(ar2)

//////////////////////
console.log('lesson 54') // slice, concat & reverse

let ar3 = ['jo' , 'w3']

console.log(ar3.slice(1,2)) // for taking element from Array

console.log(ar3.concat([2,3], [5,6]))  // for concatinate with onther Array 

console.log(ar3.reverse())  // for changing sorting Array

//////////////////////
console.log('lesson 55') // toString & join

let ar4 = [1,23,4,5,6]

console.log(ar4.toString()) // this will do convert to String

console.log(ar4.join('@')) // this will do convert to String and Adding (@) Between The Element

let t4 = 'hello'

console.log(t4.split('').reverse().join(''))

//////////////////////
console.log('lesson 56') // Sorting Array

let ar5 = [99,24,5,1,35,7,8,3,88]

console.log(ar5.sort((a,b) => a-b)) // for sorting ===> (up)

console.log(ar5.sort((a,b) => b-a)) // for sorting ===> (down)

console.log(ar5.sort((a,b) => {
	/*
		0
		+ ==> b
		- ==>
	*/
	if(a < b) return 1 // for sorting ===> (up)

	else if(a > b) return -1// for sorting ===> (down)

	else return 0

})) 

//////////////////////
console.log('lesson 57') // Search by Value

let ar6 = [1,2,3,56,73,2]

console.log(ar6.indexOf(2)) // this wll return  ==>>    (1) this main this number is  found

console.log(ar6.indexOf(7)) // this wll return  ==>>    (-1) this main this number is not found

console.log(ar6.lastIndexOf(73)) // this will return ==> index of this number in the Array

console.log(ar6.includes(73)) // this will return ==> true it mean this number is found

//////////////////////
console.log('lesson 58') // Search by Testing

let ar7 = [1,2,3,454,3,4,98]

console.log(ar7)

let result = ar7.find(e => e > 100) // this will return the first number > 100 == > 454

console.log(result)

let result1 = ar7.findIndex(e => e > 100) // this will return the first number Index > 100 == > 454

console.log(result1)

let result2 = ar7.filter(e => e > 50) // this will return All numbers > 50 == > 454 , 98

console.log(result2)

let result3 = ar7.every(e => e > 50) // this will check All Numbers > 50 Or Not if one number < 50 will return ==> (false)

console.log(result3)

let result4 = ar7.some(e => e > 50) // this will check from some numbers > 50 Or Not if one number only or more > 50 will return ==> (true)
 
console.log(result4)

//////////////////////
console.log('lesson 59') // Looping Throw Elements

let ar8 = ['more' , 'mohmad' ,'mohmad_gamal' ,'ali' ,'ahmed']

for(let e of ar8) console.log(e) // this for looping Array 

//////////////////////
console.log('lesson 60') // Maping Methods

let ar9 = [1,2,3,4,5,6,7,8,9,10]

console.log(ar9.forEach(e => console.log(e))) // this will do looping on elements in array only

console.log(ar9)

console.log(ar9.map(e => ++e)) // this will do Adding => (1) on elements && Adding them in a New Array

console.log(ar9)

console.log(ar9.reduce((p,c) => p+c)) // this will start from left && do (+) All Of Elements Of Array

console.log(ar9.reduce((p,c,i) => p+c)) // this will start from left && do (-) All Of Elements && Index Of Array

console.log(ar9.reduce((p,c) => p-c)) // this will start from left && do (-) All Of Elements Of Array

console.log(ar9.reduce((p,c,i) => p-c)) // this will start from left && do (-) All Of Elements && Index Of Array


console.log(ar9.reduceRight((p,c) => p-c)) // this will start from Right && do (-) All Of Elements Of Array

console.log(ar9.reduceRight((p,c) => p+c)) // this will start from Right && do (+) All Of Elements Of Array



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////
console.log('lesson 61') // typeof [array]

let arr = [1,2,4,5,6,'mohmad']

console.log(Array.isArray(arr)) // this Specific to Array for Know Array Or Not 

/////////////////////
console.log('lesson 62') // Multidimensional Arrays

let arr1 = [
	[1,2],
	[3,4],
	[5,6]
]

console.log(arr1[2][1]) // this will print number 6 

for(a of arr1) { // this will print All arr1
	for(d of a) console.log(d) 
}

/////////////////////
console.log('lesson 63') // Destructing Assignment

let arr2 = [1,2,3,4,5,6]

let [a1,b1,c1,d1,e1,f1] = arr2 // this will make variable for elements in arr2

console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)
console.log(e1)
console.log(f1)

/////////////////////
console.log('lesson 64') // Spread Operator

let arr3 = [1,2,3,4,5,6,7]

function dor(a2,b3,c4){
	console.log(a2+b3+c4)
}

dor(...arr3) // this will do ==> a2 = 1 && b3 = 2 && c4 = 3

let [ad,bd,...cd] = arr3

console.log(ad)

console.log(bd)

console.log(cd)

/////////////////////
console.log('lesson 65') // Array Constructor

let arr4 = Array(2,3,4,5) // this for adding many elements in Array But Not one Element

console.log(arr4)

let arr5 = Array.of(2) // this for adding one or many elements in Array

console.log(arr5)

let arr6 = Array.from('hello' , (e,i) => e) // e ==> elements of string or array or object && i ==> the index && you can add in first ==> (oject or array or string have length properties) && in second ==> (function)

console.log(arr6)

/////////////////////
console.log('lesson 66') // Arrays are by Reference

let arr7 = [1,2,3]

let b = Array.from(arr7) // this for taking copy of array to ==> b from arr7

b[1] = 5

console.log(b)

console.log(arr7)

/////////////////////