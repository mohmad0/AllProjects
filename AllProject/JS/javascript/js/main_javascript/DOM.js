//////////////////////
console.log('lesson 79') // DOM (intro)

// pdf about DOM (intro)


//////////////////////
console.log('lesson 80') // Select elements 


	document.getElementById('mydiv')

	document.getElementsByClassName('mydiv2')

	document.getElementsByTagName('div')

	document.querySelector('.test') // this will do select on first ==> ( test class )

	document.querySelectorAll('.nav') // this will select all ==> ( nav class )






	let a =	document.documentElement

	 console.log(a)

	let b = document.head

	 console.log(b)

	let c = document.body

	 console.log(c)

	 document.title = 'mohmad'

	 console.log(d )

	console.log(document.forms) // this will do when found ==> <form> </form>

	console.log(document.images) // this will return all images in html page


	console.log(document.links) // this will return ==> <a>  </a>  ==> when content ==> href="" only


	console.log(document.anchors) // this will return ==> <a>  </a>  ==> when content ==> name="" only



//////////////////////
console.log('lesson 81') // Dealing with CSS


	let e = document.getElementById('mydiv3')

	e.style.backgroundColor = 'red' // this use when you know your style in line in the tag only 

	console.log(window.getComputedStyle(e).backgroundColor) // this use to control in style && this is favarable in general



//////////////////////
console.log('lesson 82') // Dimentions 


	let f = document.getElementById('mydiv4')

	console.log(f.clientHeight) // this show the main height that client is show it && not all of height

	console.log(f.clientWidth) // this show the main Width that client is show it && not all of Width

	console.log(f.clientTop) // this for border 

	console.log(f.clientLeft)

	console.log(f.scrollHeight) // this show the Height of sroll 

	console.log(f.scrollWidth) // this show the width of sroll 

	console.log(f.offsetHeight) // this show where the div or section or ... is stoping && return number of space it 

	console.log(f.offsetWidth)

	console.log(f.offsetTop) // this show the space from top of page html to my stop

	console.log(f.offsetLeft)



//////////////////////
console.log('lesson 83')  // HTML (Content & Value) 



	let div = document.getElementById('mydiv5')

	console.log(div.innerHTML) // this for show all things tags && text  for html page

	console.log(div.innerHTML = '<div> </div>')

	console.log(div.innerText) // this for show the text for the div selected && this is not favarable 

	console.log(div.innerText = 'hello mohmad')

	console.log(div.textContent) // this for show the text for the div selected && this is favarable 

	console.log(div.textContent = 'hello mohmad')

	console.log(input.value) // this for show the value from this input

	console.log(input.value = 'hello mohmad')

	console.log(radio.value)

	console.log(radio.checked) // this return ==> ( true or false)

	console.log(radio.checked = 'true')



//////////////////////
console.log('lesson 84')

