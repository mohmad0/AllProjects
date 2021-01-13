console.log('lesson 44') // String

console.log('hello \'mohmad\' ') // 'hello 'mohmad' ' it is does't be &&& "hello "mohmad" "

console.log('hello \n \'mohmad\'') // \n for new line

console.log('hello mohmadailsia\x40gmail.com') // \x for converting to hexa decimal (40 ==> @ )

console.log('hello \u4444')  // \u this main unicode 

//////////////////////////////
console.log('lesson 45') //  Template Literals ===> ` `

let st = `hello   
mohmad`  // i do'nt need to wright ==> \n for new line

let st1 = 'hello\nmohmad'

console.log(st)

console.log(st1)

let sq = 10

let qw = `hello ${sq}` // this for concatenate i don't need to wright ==> (+) 

let qw1 = 'hello ' + sq

let qw2 = `hello ${sq + 3}` // this for concatenate i don't need to wright ==> (+) 

let qw3 = 'hello ' + (sq + 3) // when i adding i do this

let qd = `hello ${sq > 5 ? 'big' : 'small'}` // And I Can Wright condition or function or... in ==> ${}

console.log(qw)

console.log(qw1)

console.log(qd)

console.log(qw2)

console.log(qw3)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////
console.log('lesson 31')

//  Hoisting


//////////////////////
console.log('lesson 46') // Characters 

let a = 'mohmad'

console.log(a.length) // for number of my string

console.log(a.charAt(2)) // in ==> ( index of string)

console.log(a.charCodeAt(3)) // in ==> ( index of string) this for bring code from decimal number

console.log(a.charCodeAt(3).toString(16)) // this ==> 6d

console.log('\x6d')

//////////////////////
console.log('lesson 47') // Search in String

let b = 'mohmad_gamal'

console.log(b.indexOf('h')) // search from left to right 

console.log(b.indexOf('h' , 1)) // start from index (1) then search from left to right 

console.log(b.lastIndexOf('h')) // search from right to  left && wright index from left to right

console.log(b.includes('h')) // search for this charactar in the String then bring (true or false) 

//////////////////////
console.log('lesson 48') // Slicing String 

let c = 'hello'

console.log(c.slice(1,3)) // ===> el

console.log(c.substring(1,3)) // ===> el

console.log(c.slice(1)) // ====> ello

console.log(c.substring(1)) // ====> ello

console.log(c.slice(3,1)) // this can't ===> ""

console.log(c.substring(3,1)) // this will do alternate ==> (1,3)

console.log(c.slice(-3,-1)) // will adding the length of string on it ==> (5-3, 5-1) ==> (2, 4)

console.log(c.substring(-3,-1)) // this can't 

console.log(c.substr(1,3)) // this will start from index (1) then will pring (3 character) this not favarable

console.log(c.split('e')) // this will split from ('e') and adding in Array ==> ["h", "llo"]

console.log(c.split('' , 3)) // this will split  and adding (3) in array ==>  ["h", "e", "l"]

console.log(c.split('')) // this will split  and adding in array ==> ["h", "e", "l", "l", "o"]

//////////////////////
console.log('lesson 49') // Shaping String  ==> UpperCase && LowerCase && trim

d = 'ali'
f = '    ahmed         '
console.log(d.toUpperCase())  

console.log(d.toLowerCase())

console.log(f.trim())  // for removing spacing

//////////////////////
console.log('lesson 50')

let g = 'koko'
let e = 'foo'

console.log(g.localeCompare(e)) // this = 1 this maen (g) after (e) in character english words

console.log(e.localeCompare(g)) // this = 1- this maen (e) befour (g) in character english words

// when == ( 0 ) this main eqal in characters

//////////////////////