/*
	
	Parent

	Parents

	ParentsUntil

	Children

	Find

	Siblings

	Next

	Previous

	First

	Last

	Eq

	Filter

	Not

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//								[ jQuery In Arabic ] #16 - Traversing - Parent / Parents / ParentsUntil



$(function(){
	 $('.top div p span').parent().css('border','5px solid blue') // this will do effect on ==> ( p ) only
	 $('.top div p span').parents('div').css('border','5px solid blue') // this will do effect on ==> ( div ) only
	 $('.top div p span').parentsUntil().css('border','5px solid blue') // this ==>  === parents()
	 $('.top div p span').parentsUntil('.top').css('border','5px solid blue') // this will do effect on ( p && div && will End in .top )
	 $('.top div p span').parents().css('border','5px solid blue') // this will do effect from ==> ( p & div & section ... to html )
})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//											[ jQuery In Arabic ] #17 - Traversing - Children / Find

$(function(){
	$('.top').children().css('border','5px solid blue') // this will do effect on direct child  ==> (div) only 
	$('.top').children('.go').css('border','5px solid blue') // this will do effect on direct child that taking ==> go class
	$('.top').find('p').css('border','5px solid blue') // this will search about ===> ( p ) in .top class
	find($('.top p').css('border','5px solid blue')) // this will search about ===> ( p ) in .top class
}) 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//									[ jQuery In Arabic ] #18 - Traversing - Siblings / Next / Previous

$(function(){
	$('div , p').click(function(){
		$(this).siblings() // this will do effect on the brathers for the ==> div or p only but he can't 
		.fadeOut(2000)
		$(this).next() // this will do effect on the next direct for div or p
		.fadeOut(2000)
		$(this).nextAll() // this will do effect on the All next elements for div or p 
		.fadeOut(2000)
		$(this).nextUntil('.s') // this will do effect on the All next elements for div or p but Until ===> (.s) class 
		.fadeOut(2000)
		$(this).prev() // this will do effect on the Previous direct for div or p 
		.fadeOut(2000)
		$(this).prevAll() // this will do effect on the Previous direct for div or p 
		.fadeOut(2000)
		$(this).prevUntil('.q') // this will do effect on the All Previous elements for div or p but Until ===> (.q) class 
		.fadeOut(2000)
	})
	
})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//								[ jQuery In Arabic ] #19 - Traversing - First / Last / Eq / Filter / Not

$(function(){
	
	$('.feed p').first().css('color','red') // this will search about the first p && coloring him
	$('.feed p').last().css('color','red') // this will search about the last p && coloring him
	$('.feed div').eq(2).css('color','red') // this will search about div is taking index ==> 2 && coloring him
	$('.feed div').filter(':contains("div 2")').css('color','red') // this will filter div contain text ( div 2 ) && coloring him
	$('.feed div').not(':contains("div 2")').css('color','red') // this will filter div contain text ( div 2 ) && not coloring him but will coloring the others
})


