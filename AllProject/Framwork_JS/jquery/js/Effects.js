/*

	Hide

	Show

	Toggle

	FadeIn

	fadeOut

	FadeToggle

	FadeTo

	SlideDown

	SlideUp

	SlideToggle

	Animate

	Stop
	
	Chain

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//										 #04 - Effects - Hide / Show / Toggle

$(function(){

	$('button').click(function(){
		$('p').hide(2000,function(){
			$('span').show(1500)
		})  // this will hide for ===> p   hide(speed, callback) ==> hide(1000 or fast or slow , function(){ // code })
	})

})

$(function(){

	$('button').click(function(){
		$('p').show() // this will show for ===> p show(speed, callback) ==> show(1000 or fast or slow , function(){ // code })
	})

})



$(function(){

	$('button').click(function(){
		$('p').toggle() // this will alternate between ===> (hide && show) for ===> p toggle(speed, callback) ==> toggle(1000 or fast or slow , function(){ // code })
	})

})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//										#05 - Effects - Fade In / Fade Out / Fade Toggle / Fade To


$(function(){

	$('button').click(function(){
		$('p').fadeOut(2000,function(){ // fadeOut(speed,callback) ==== hide() but without opacity

			$('span').fadeIn(1000,function(){ // fadeIn(speed,callback) ==== show() but without opacity

				$('h1').fadeToggle(1000,function(){ // fadeToggle(speed,callback) ==== Toggle() but without opacity
					
					$('h2').fadeTo(2000,0.2) // fadeTo(speed,opacity,callback)
				})
			})
		})  // this will hide for ===> p   hide(speed, callback) ==> hide(1000 or fast or slow , function(){ // code })
	})

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//							[ jQuery In Arabic ] #06 - Effects - SlideDown / SlideUp / SlideToggle


$(function(){

	$('button').click(function(){
		$('p').slideDown(2000,function(){ // slideDown(speed,callback) for use use this method must be the ==> $('p') is hidden

			$('span').slideUp(1000,function(){ // slideUp(speed,callback) for use use this method must be the ==> $('p') is show

				$('h1').slideToggle(1000,function(){ // slideToggle(speed,callback) this alternate between slideUp && slideDown

					$('h2').fadeTo(2000,0.2) // fadeTo(speed,opacity,callback)
				})
			})
		})  // this will hide for ===> p   hide(speed, callback) ==> hide(1000 or fast or slow , function(){ // code })
	})

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//											[ jQuery In Arabic ] #07 - Effects - Animate

$(function(){

	$('button').click(function(){
		$('.maindiv').animate({
			left:'350px',
			top:'100px',
			width:'600px',
			height:'400px',
			fontSize:'40px'
		},2000,function(){ // slideDown(speed,callback) for use use this method must be the ==> $('p') is hidden

			$('h1').slideDown(1000,function(){ // slideUp(speed,callback) for use use this method must be the ==> $('h1') is show

				$('h2').slideDown(1000,function(){ // slideToggle(speed,callback) this alternate between slideUp && slideDown

					$('span').fadeIn(1000,function(){
						$('p').fadeIn(1000)
					}) // fadeTo(speed,opacity,callback)
				})
			})
		})  // this will hide for ===> p   hide(speed, callback) ==> hide(1000 or fast or slow , function(){ // code })
	})

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//											[ jQuery In Arabic ] #08 - Effects - Stop

let x = 1000
let y = $('.maindiv')

$(function(){

	$('button').click(function(){
		y.stop(false,true) // stop() will stop for animation ==> stop(clear queuy, go to end) ==>(true or false , true or false)
	})
	y.animate({
		left:'350px',
		top:'100px',
		width:'600px',
		height:'400px',
		fontSize:'20px'
	},x)

	y.animate({
		left:'300px',
		top:'50px',
		width:'500px',
		height:'200px',
		fontSize:'20px'
	},x) 

	y.animate({
		left:'400px',
		top:'100px',
		width:'700px',
		height:'400px',
		fontSize:'20px'
	},x) 

	y.animate({
		left:'350px',
		top:'80px',
		width:'670px',
		height:'500px',
		fontSize:'20px',
		borderRadius:'50%'
	},x)

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//											[ jQuery In Arabic ] #09 - Effects - Chain
let x = 1000
let y = $('.maindiv')

$(function(){

	$('button').click(function(){
		y.stop(false,true) // stop() will stop for animation ==> stop(clear queuy, go to end) ==>(true or false , true or false)
	})
	y.animate({
		left:'350px',
		top:'100px',
		width:'600px',
		height:'400px',
		fontSize:'20px'
	},x)

	.animate({
		left:'300px',
		top:'50px',
		width:'500px',
		height:'200px',
		fontSize:'20px'
	},x) 

	.animate({
		left:'400px',
		top:'100px',
		width:'700px',
		height:'400px',
		fontSize:'20px'
	},x) 

	.animate({
		left:'350px',
		top:'80px',
		width:'670px',
		height:'500px',
		fontSize:'20px',
		borderRadius:'50%'
	},x)

})

