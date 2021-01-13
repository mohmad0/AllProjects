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
        photos:photos,
        selected:null
    },
    methods:{
        rondomImgs: function(img) {

                return img[Math.floor(Math.random() * photos.length)];
            }
    	},
    	created(){

    		this.selected = this.rondomImgs(this.photos)
    	}
});