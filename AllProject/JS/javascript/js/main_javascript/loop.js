/////////////////////////////////


console.log('lesson 16')

let i = 0
for(;i <= 10;){
	console.log('hello mohmad')
	i++
}
/*

or this method

for(let i = 0 ; i <= 10 ; i++){
	console.log('hello mohmad')
}
*/


////////////////////////////////


console.log('lesson 17')

let d = 0 
while(d < 10){ // look at condition then working
	console.log('hello mohmad' + ' ' + d)
	d++
}
let f = 0
do {  // working then look at condition 
	console.log('hello ali' + ' ' + f) 
	f++
}while(f < 10)


////////////////////////////////
console.log('lesson 18')

for(let i = 0 ; i <= 10 ; i++){
	console.log('hello mohmad')
	if(i == 5) break  // this do stop for process
	console.log(i)
}


for(let q = 0 ; q <= 10 ; q++){
	console.log('hello mohmad')
	if(q == 5) continue // this do ignore for  => 5 then go
	console.log(q)
}

////////////////////////////////


console.log('lesson 19')  //  Loop Naming 

outerLoop:
		for (var z = 0; z <= 10; z++) {
		innerLoop:
				for (var j = 0; j <= 10; j++) {
						console.log('hello lesson 19' + ' ' + z + ' ' + j)
						if (j == 7) break innerLoop
					}
			}

////////////////////////////////


console.log('lesson 20')

let e = 2, w = 3, r = 1  // this for powering to number Ex:  => 2**3

for(let h = 0 ; h < w ; h++) r *= e
	console.log(r)