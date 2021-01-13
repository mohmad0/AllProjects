/*

	:odd

	:even

	:first

	:last

	:last

	:first-child 

	:last-child 

	:first-of-type 

	:last-of-type 

	:nth-child(3) 

	:nth-last-child(3) 

	:nth-of-type(3) 

	:nth-last-of-type(3) 

	:only-child

	:only-of-type

	:header
	
	:animated

	:focus

	:contains

	:has

	:empty

	:hidden

	:visible

	:root

	:lang('ar or en or ...')

	[Attribute] => [Value]
	
	Element[Attribute] => img[src]

	Element[Attribute="Value"] => p[lang="ar"]

	Element[Attribute!="Value"] => div[lang!="ar"]

	Element[Attribute^="Value"] => a[href^="start"]

	Element[Attribute*="Value"] => a[href*="link"]	

	Element[Attribute~="Value"] => a[href~="Contains"]

	:input

	:[type of input] ==> text or password or ...

	:disabled

	:enabled

	:checked

	:selected


*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//											[ jQuery In Arabic ] #20 - Selectors Reference Part 1

$(function(){
	$('.feed div:odd').css('background','#ddd') // this will leav odd div && coloring even div

	$('.feed div:even').css('background','#ddd') // this will leav even div && coloring odd div
	$('.feed div:first').css('background','#ddd') // this will coloring the first div && alternate ==> first() 
	$('.feed div:last').css('background','#ddd') // this will coloring the last div && alternate ==> last() 
	$('.feed div:last , .feed div:first , .feed div:odd').css('background','#ddd') // this mix between others 
	$('.feed * ').css('background','#ddd') // this will do coloring on any thing in .feed class 
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//											[ jQuery In Arabic ] #21 - Selectors Reference Part 2
/*
==> [ 
		- p:first-child 
		- p:last-child 
		- p:first-of-type 
		- p:last-of-type 
		- p:nth-child(3) 
		- p:nth-last-child(3) 
		- p:nth-of-type(3) 
		- p:nth-last-of-type(3) 
	]

*/

$(function(){
	
	
	$('p:first-child').css( // this will effect on the first child has parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('p:last-child').css( // this will effect on the last child has parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('p:first-of-type').css( // this will effect on the first child from type ==> ( p )  has parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('p:last-of-type').css( // this will effect on the last child from type ==> ( p )  has parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('p:nth-child(3)').css( // this will effect on the child ==> ( p ) has number ==> ( 3 ) start from top to bottom && has parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('p:nth-last-child(3)').css( // this will effect on the last child ==> ( p ) has number ==> ( 3 ) start from bottom to top && has parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('p:nth-of-type(3)').css( // this will effect on the child from type ==> ( p ) has number ==> ( 3 ) start from top to bottom && has parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('p:nth-last-of-type(3)').css( // this will effect on the child from type ==> ( p ) has number ==> ( 3 ) start from bottom to top && has parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//										[ jQuery In Arabic ] #22 - Selectors Reference Part 3

/*
	- p:only-child 
	- p:only-of-type
*/

$(function(){
	
	$('p:only-child').css( // this will effect on the only child for any parent in this page && is ==> ( p ) 
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('p:only-of-type').css( // this will effect on the only p for any parent in this page 
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('div > p').css( // this will effect on p is the direct child for any  div in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('div p').css( // this will effect on p in any div in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('div + p').css( // this will effect on ( p ) is direct after any div in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('div ~ p').css( // this will effect on ( p ) are brathers for any div && are have them same parent in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('div p:eq(4)').css( // this will effect on ( p ) for any div && index 4 in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('div p:gt(1)').css( // gt ==>(gretar than) this will effect on ( p ) for any div && start from index > 1 ==> 2 to the end of index in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$('div p:lt(3)').css( // gt ==>(less than) this will effect on ( p ) for any div && start from index < 3 ==> 2 to the end of index in this page
	{
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
	
	$("div p:not(:contains('good'))").css( //this will search about p has div as parent && return him then coloring for others in the div
		border   :  '5px solid #000',
		padding  :  '10px',
		fontSize :  '20px'
	})
	
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//											[ jQuery In Arabic ] #23 - Selectors Reference Part 4

/*
	:header
	
	:animated

	:focus

	:contains

	:has

	:empty

	:hidden

	:visible

	:root

	:lang('ar or en or ...')
*/

$(function(){
	// $(':header').css({color:'red'}) // this for any h1 or h2 or .... in any place in html page
	$('div').animate({width:'300px',background:'#ddd'},3000)
	$(':animated').css(width:'400px',background:'#080') // This Will Effect On All Of Element That Has Animate

	$(':focus').css(width:'400px',background:'#080')  // This Will Effect On All Of Element That Has Focus

	$('div:contains("PHP")').css(width:'400px',background:'#080')  // This Will Effect On All Of Div Element That Has Contains PHP Word

	$(':contains("PHP")').css(width:'400px',background:'#080')  // This Will Effect On All Of Element That Has Contains PHP Word

	$(':has("p")').css(width:'400px',background:'#080')  // This Will Effect On All Of Element That Has [ p ]

	$(':empty').css(width:'400px',background:'#080')  // This Will Effect On All Of Element That Is Empty

	$(':hidden').css(width:'400px',background:'#080')  // This Will Effect On All Of Element That Is Hidden

	$(':visible').css(width:'400px',background:'#080')  // This Will Effect On All Of Element That Is Visible

	$(':root').css(width:'400px',background:'#080')  // This Will Effect On HTML Element

	$(':lang("ar")').css(width:'400px',background:'#080')  // This Will Effect On All Of Element That Is Has Attribute lang('ar')
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//											[ jQuery In Arabic ] #24 - Selectors Reference Part 5

/*
	[Attribute] => [Value]
	
	Element[Attribute] => img[src]

	Element[Attribute="Value"] => p[lang="ar"]

	Element[Attribute!="Value"] => div[lang!="ar"]

	Element[Attribute^="Value"] => a[href^="start"]

	Element[Attribute*="Value"] => a[href*="link"]	

	Element[Attribute~="Value"] => a[href~="Contains"]	

*/

$(function(){

	$('[src]').css(width:'400px',background:'#080') // This Will Effect On All Of Element That Has Attribute ==> [ src ]

	$('img[src]').css(width:'400px',background:'#080') // This Will Effect On All Of Img Element That Has Attribute ==> [ src ]

	$('p[lang="ar"]').css(width:'400px',background:'#080') // This Will Effect On All Of P Element That Has Attribute ==> [ lang="ar" ]

	$('p[lang!="ar"]').css(width:'400px',background:'#080') // This Will Effect On All Of P Element That Not Has Attribute ==> [ lang="ar" ]

	$('a[href^="start"]').css(width:'400px',background:'#080') // This Will Effect On All Of a Element That Has Attribute ==> [ href ] And Has String Start With ==> [ Start ]

	$('a[href*="link"]').css(width:'400px',background:'#080')  // This Will Effect On All Of a Element That Has Attribute ==> [ href ] And Has String Has ==> [ link ]

	$('a[href~="Contains"]	').css(width:'400px',background:'#080')  // This Will Effect On All Of a Element That Has Attribute ==> [ href ] And Has String Contains Wrod ==> [ link ]

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//											[ jQuery In Arabic ] #25 - Selectors Reference Part 6

/*

	:input

	:[type of input] ==> text or password or ...

	:disabled

	:enabled

	:checked

	:selected

*/


$(function(){

	$(':input').css(width:'400px',background:'#080') // This Will Effect On All Of Inputs

	$(':text').css(width:'400px',background:'#080')  // This Will Effect On All Of Inputs Has Type ==> Text

	$('div:text').css(width:'400px',background:'#080')  // This Will Effect On All Of Div Has Inputs Has Type ==> Text

	$(':password').css(width:'400px',background:'#080')  // This Will Effect On All Of Inputs Has Type ==> password

	$('div:password').css(width:'400px',background:'#080')  // This Will Effect On All Of Div Has Inputs Has Type ==> password

	$(':disabled').css(width:'400px',background:'#080') // This Will Effect On All Of Element Has ==> disabled

	$(':enabled').css(width:'400px',background:'#080') // This Will Effect On All Of Element Has ==> enabled

	$(':checked').css(width:'400px',background:'#080') // This Will Effect On All Of Element Has ==> checked

	$(':selected').css(width:'400px',background:'#080') // This Will Effect On All Of Element select Has Option ==> selected
})















