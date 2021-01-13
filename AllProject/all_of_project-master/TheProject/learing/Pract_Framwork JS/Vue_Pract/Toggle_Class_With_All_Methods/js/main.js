/*global console , $*/

var photos = [
		"./imgs/landing1.jpeg",
		"./imgs/landing2.jpg",
		"./imgs/landing3.jpg",
		"./imgs/landing4.jpg",
		"./imgs/landing5.jpg"
	];

var app = new Vue({
    el:"#mo-app",
    data:{
        isSelected:false
    },
    methods:{
        toggle: function(event) {

                event.target.classList.toggle('active');
            },
        toggleAddvanced: function(event, nameClass) {

                event.target.classList.toggle(nameClass);
            }
        }
});