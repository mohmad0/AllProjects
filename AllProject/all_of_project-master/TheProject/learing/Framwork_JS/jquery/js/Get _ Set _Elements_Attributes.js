/*

	html()

	text()

	attr()

	val()

	Append

	AppendTo

	Prepend

	PrependTo

	Before

	After

	Remove

	Empty

	addClass

	removeClass

	toggleClass

	width()

	innerWidth()

	outerWidth()

	height()

	innerHeight()
	
	outerHeight()

	detach()

	hasClass()

	offset()

	position()

	prop()

	replaceWith()

	scrollTop()

	wrap()

	Each()

	has()

	is()

	end()

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//							[ jQuery In Arabic ] #10 - Html - Get / Set Elements And Attributes ==> [ html() && text() && attr() && val() ]
let div = $('div').html()  // ===> text() this will get the text only from the element selected && html() ==> for get element with style his
let div2 = $('div').text()

$(function(){
	$('button').click(function(){
		$('input').val(div2)
		$('a').attr({
			'href': 'https://en-gb.facebook.com/',
			'target':'c3'
		})
	})
		

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//					[ jQuery In Arabic ] #11 - Html - Append / AppendTo / Prepend / PrependTo / Before / After

$(function() {
	$('div').before('hello before')
	$('div').after('hello after')
	$('div').append('</br> hello append ')
	$('div').prepend('hello prepend')
	
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//										[ jQuery In Arabic ] #12 - Html - Remove / Empty Element

$(function(){
	$('button').click(function(){
		$('p').remove('.p1')  // this will remove ==> <p> </p> from === DOM Page

		$('span.span1').empty() // this will delete the contain from  ==> <span> </span>
	})
})





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - Dealing With Css Classes

$(function(){
	$('button').click(function(){
		$('div').addClass('the good') // this will adding ==> ( the good ) as class in any ===>  ( Div )
	})
})

$(function(){
	$('button').click(function(){
		$('p').removeClass('p1 , p3') // this will removing ==> ( p1 && p3 ) as class in any ===>  ( P )
	})
})

$(function(){
	$('button').click(function(){
		$('p').toggleClass() // this will alternate between ==> ( removing && adding) 
	})
})





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//												[ jQuery In Arabic ] #14 - Html - Css Get / Set

$(function(){
	
		
		 
	$('button').click(function(){
		var color = $('input').val()
		 	fontSize = $('input').val()
		  	padding = $('input').val()
		 $('.p14').css( // this will set value 
		 {
		 	'color': color,
		 	'width':'400px',
		 	'height':'30px',
		 	'padding':padding,
		 	'font-size':fontSize
		 	
		 })
		 var col =  $('.p14').css('color') // this will (get) ==> (color) and print it in console
		 console.log(col)
	})
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//											[ jQuery In Arabic ] #15 - Html - Dimensions



$(function(){
 var doc1 = $('.koko').width() // this will calculate width only without padding && margin
 var doc2 = $('.koko').innerWidth() // this will calculate width only with padding 
 var doc3 = $('.koko').outerWidth() // this will calculate width with padding && margin
 var doc4 = $('.koko').height() // this will calculate height only without padding && margin
 var doc5 = $('.koko').innerHeight()// this will calculate height only with padding 
 var doc6 = $('.koko').outerHeight()// this will calculate height with padding && margin
	console.log(doc1 + ' ===> this is width')
	console.log(doc2 + ' ===> this is innerWidth')
	console.log(doc3 + ' ===> this is outerWidth')
	console.log(doc4 + ' ===> this is height')
	console.log(doc5 + ' ===> this is innerHeight')
	console.log(doc6 + ' ===> this is outerHeight')
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - Detach()

$(function(){
	$('button').click(function(){

		$('div').detach() // This Will Remove From DOM Tree With His Event
	})
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - hasClass()

$(function(){
	$('button').click(function(){

		$('div').hasClass() // This Will Git Result [ True Or False ]
	})
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - offset()

$(function(){

	console.log($('div').offset().top) // This Will Git The Result In HTML Page

	console.log($('div').offset().left) // This Will Git The Result In HTML Page

	$('div').offset({  

		left:200,
		top:200
	})

	console.log($('div').offset().top)

	console.log($('div').offset().left)
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - position()

$(function(){

	console.log($('div').position().top) // This Will Git The Result In Parent Element

	console.log($('div').position().left) // This Will Git The Result In Parent Element

	$('div').position({  

		left:200,
		top:200
	})

	console.log($('div').position().top)

	console.log($('div').position().left)
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - prop()

$(function(){

	console.log($('input').prop('type')) // This Will Git The Value Of The Type 

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - replaceWith()

$(function(){

	$('div').click(function(){

		// This Will Replace The Div To Input And Add To It His Text
		$(this).replaceWith('<input type="text" value="' + $(this).text() + "'/>")

		$('button').fadeIn(1000);
	})

	$('button').click(function(){

		// This Will Replace The Input To Div And Add To It His Value
		$('input').replaceWith('<div>'  + $('input').val() + '</div>')
	})
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - scrollTop()



$(function(){

	$(window).scroll(function(){

		console.log('Window Scroll Top = ' + $(this).scrollTop())
	})

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - wrap()

$(function(){

	$('.remove').click(function(){

		$('span').wrap('<div></div>') // This Will Remove Div Element Around Span Element ==> From <div> <spana> </span> </div>  To  <spana> </span> 
	})

	$('.add').click(function(){

		$('span').unwrap() // This Will Add Div Element Around Span Element ==> <div> <spana> </span> </div>
	})
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - Each()

$(function(){

	$('li').each(function(){

		$(this).css('color' , 'red') // This Will Do This On All li Element In HTMl Page
	})

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - has()

// has() Will Return [ True Or False ]

$(function(){

	// This Will Search And If Found ==> Span Element In P Will Do Effect On It
	$('p').has('span').css('color' , 'red')

	// This Will Search And If Found ==> Span Or P Or b Element In P Will Do Effect On It
	$('p').has('span , p , b').css('color' , 'red')

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - is()

// is() Will Return [ True Or False ]

$(function(){

	// This Will Return [ True Or False ]
	console.log($('p').is('span'))

	// This Will Return [ True Or False ] This Will Search And If Found ==> [ Span Or P Or b ] 
	console.log($('p').is('span , p , b'))

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #13 - Html - end()

// end() This Do End To The Event And Return To The First Element

$(function(){

	$('div').css('color' , 'red').end()

		.find('span').css('color' , 'blue').end()

		.css('font-size' , '30px') // This == $('div').css('font-size' , '30px')

})