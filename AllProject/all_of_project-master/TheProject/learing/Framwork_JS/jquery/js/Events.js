/*

	Click

	Dblclick

	Mouseenter

	Mouseleave

	mousemove

	Hove

	bind()

	live()

	delegate()

	on()

	preventDefault

	keydown

	keyup

	keypress
	
	change()

	focus()

	blur()

	one()

	select()

	resize()

	scroll()

	pageX

	pageY

	submit()

	delay()


*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//								#03 - Events - Click / Dblclick / Mouseenter / Mouseleave / Hove



$(function(){
	$('button').click(function(){
		$(this).css('color','red') // ===> (this) in here === ('button')
	})
})




$(function(){
	$('button').dblclick(function(){
		$('p').css('color','red') // ===> (this) in here === ('button')
	})
})



$(function(){
	$('button').mouseenter(function(){
		$('p').css('color','red') // ===> (this) in here === ('button')
	})
})



$(function(){
	$('button').mouseleave(function(){
		$('p').css('color','blue') // ===> (this) in here === ('button')
	})
})



$(function(){

	$('html').on('mousemove' ,function(e){ 

		$('span').text(`X-Axis: ${e.pageX} Y-Axis: ${e.pageY}`) // This Will Give This Online

	}); 

});


// hover(mouseenter(),mouseleave()) ===>  hover(function(){ // code } , function(){ // code }) 



$(function(){
	
	$('form i.fa-eye').hover(function(){

		$('form input').attr('type' , 'text')

	},function(){

		$('form input').attr('type' , 'password')

	});
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//								#03 - Events - bind() === on() But it Is Remove From [ Up To 1.7 ]


$(function(){

	// Single Event With Bind
	$('.normal').bind('click' , function(){

		$(this).css('color','red') 
	})

	// Multi Event With Bind
	$('.normal').bind('mouseenter mouseleave' , function(){

		$(this).css('color','red') 

	})


	// Bind With Map

	$('.map').bind({

		click: function(){
				$(this).css('color','red') 
				},
		mouseenter: function(){ $(this).css('color','red') },

		mouseleave: function(){ $(this).css('color','red') }

	});

	// Custom Event 

	$('.custom').bind('myCustomEvent' , function(event , age , name , myback , mycolor){

		$(this).text('hello' + age + name  );

		$(this).css({

			background: myback,

			color: mycolor
		});
	})

	$('button').click(function(){

		$('.custom').trigger('myCustomEvent','["mohmad" , "23" , "red" , "#fff"]') 
		
	})

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//								#03 - Events - live() === on() But it Is Remove From [ Up To 1.7 ]


$(function(){

	// Single Event With live
	$('.normal').live('click' , function(){

		$(this).css('color','red') 
	})

	// Multi Event With live
	$('.normal').live('mouseenter mouseleave' , function(){

		$(this).css('color','red') 

	})


	// live With Map

	$('.map').live({

		click: function(){
				$(this).css('color','red') 
				},
		mouseenter: function(){ $(this).css('color','red') },

		mouseleave: function(){ $(this).css('color','red') }

	});

	// Custom Event 

	$('.custom').live('myCustomEvent' , function(event , age , name , myback , mycolor){

		$(this).text('hello' + age + name  );

		$(this).css({

			background: myback,

			color: mycolor
		});
	})

	$('button').click(function(){

		$('.custom').trigger('myCustomEvent','["mohmad" , "23" , "red" , "#fff"]') 
		
	})

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//								#03 - Events - delegate() === on() But it Is Remove From [ Up To 1.7 ]


$(function(){

	// Single Event With delegate
	$('body').delegate('.normal','click' , function(){ // You Must Be Wright ==> $(parent).(child , event)

		$(this).css('color','red') 
	})

	// Multi Event With delegate
	$('div').delegate('.normal','mouseenter mouseleave' , function(){

		$(this).css('color','red') 

	})


})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//								#03 - Events - on()


$(function(){

	// Single Event With on
	$('.normal').on('click' , function(){

		$(this).css('color','red') 
	})

	// Multi Event With on
	$('.normal').on('mouseenter mouseleave' , function(){

		$(this).css('color','red') 

	})


	// on With Map

	$('.map').on({

		click: function(){
				$(this).css('color','red') 
				},
		mouseenter: function(){ $(this).css('color','red') },

		mouseleave: function(){ $(this).css('color','red') }

	});

	// Custom Event 

	$('.custom').on('myCustomEvent' , function(event , age , name , myback , mycolor){

		$(this).text('hello' + age + name  );

		$(this).css({

			background: myback,

			color: mycolor
		});
	})

	$('button').click(function(){

		$('.custom').trigger('myCustomEvent','["mohmad" , "23" , "red" , "#fff"]') 
		
	})

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//														#03 - Events - preventDefault


$(function(){

	
	$('a').click(function(){ 

		$(this).preventDefault() // This Will preventDefault For Link
	})

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//														#03 - Events - keydown / keyup / keypress


$(function(){

	
	$('a').keydown(function(){ 

		$(this).text('You Are Going To Click The Keybourd Key') 
	})


	$('a').keypress(function(){ 

		$(this).text('You Are Pressed The Keybourd Key') 
	})


	$('a').keyup(function(){ 

		$(this).text('You Are Far Away The Keybourd Key') 
	})

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//														#03 - Events - change()


$(function(){

	
	$('input').change(function(){ 

		$('div p').text($(this).val());
	})

	$('select').change(function(){ 

		$('div').css('background-color' , 'red');
	})

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//														#03 - Events - focus() / blur()


$(function(){

	
	$('input').focus(function(){ 

		$('div').css('background-color' , 'red');
	})

	$('select').blur(function(){ 

		$('div').css('background-color' , 'red');
	})

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//															#03 - Events - one()


// one() == on() But It Is Different In ===> one()  Is Do One Only But on() Is Do Alot


$(function(){

	// Single Event With one
	$('.normal').one('click' , function(){

		$(this).css('color','red') 
	})

	// Multi Event With one
	$('.normal').one('mouseenter mouseleave' , function(){

		$(this).css('color','red') 

	})


	// one With Map

	$('.map').one({

		click: function(){
				$(this).css('color','red') 
				},
		mouseenter: function(){ $(this).css('color','red') },

		mouseleave: function(){ $(this).css('color','red') }

	});

	// Custom Event 

	$('.custom').one('myCustomEvent' , function(event , age , name , myback , mycolor){

		$(this).text('hello' + age + name  );

		$(this).css({

			background: myback,

			color: mycolor
		});
	})

	$('button').click(function(){

		$('.custom').trigger('myCustomEvent','["mohmad" , "23" , "red" , "#fff"]') 
		
	})

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//															#03 - Events - select()



$(function(){


	$('textarea').select(); // This Will Do select For All The Text In textarea

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//															#03 - Events - resize()



$(function(){

	console.log($(window).width() , $(window).height()) // This Will Do After Reload Direct And Changing of size screen

	$('textarea').on('resize' ,function(){ // This Will Do On Changing of size screen Direct

		console.log($(window).width() , $(window).height())

	}); 

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//															#03 - Events - scroll()



$(function(){

	console.log($(window).scrollTop()) // This Will Do After Reload Direct

	$('textarea').on('scroll' ,function(){ // This Will Do On scrolling Direct

		console.log($(window).scrollTop())

	}); 

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//															#03 - Events - pageX && pageY



$(function(){

	$('html').on('mousemove' ,function(e){ 

		$('span').text(`X-Axis: ${e.pageX} Y-Axis: ${e.pageY}`) // This Will Give This Online

	}); 

});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//															#03 - Events - submit()



$(function(){

	$('form').on('submit' ,function(e){ // This Will Do When I Click On Submit Direct


		e.preventDefault();

		$('span').text(`The WOrd Is Not Correct`) 
	}); 

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//															#03 - Events - delay()

// delay(2000) // This Mean It Will Wite ==> 2s Then Do Function

$(function(){

	$('button').on('click' ,function(e){ // This Will Do When I Click On Submit Direct


		e.preventDefault();

		$('span').text(`The WOrd Is Not Correct`).fadeIn(1000).delay(5000).fadeOut(2000);
	}); 

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//															#03 - Events - clone()



$(function(){

	$('button').on('click' ,function(){ 


		$('span').clone(false).appendTo('body') // Is False By Default And This Will Take Copy From Span Element And Add It To Body Without Adding Any Event On The New Span Element 

		$('div').clone(true).appendTo('body') // This Will Take Copy From Span Element And Add It To Body With Adding Any Event On The New Span Element 
	});


	$('span').on('click' ,function(){

		$('span').css('color' , 'red');
	}); 

	$('div').on('click' ,function(){ 

		$('span').css('color' , 'red');
	}); 





});





























































































































