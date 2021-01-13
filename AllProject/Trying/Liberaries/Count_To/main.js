// global, $
$(function () {

	'use strict';

	$('.timer1').countTo({
    from: 0,
    to: 2500,
    speed: 3000,
    refreshInterval: 50
  });

	$('.timer2').countTo({
    from: 50,
    to: 25000,
    speed: 5000,
    refreshInterval: 100
  });

});
