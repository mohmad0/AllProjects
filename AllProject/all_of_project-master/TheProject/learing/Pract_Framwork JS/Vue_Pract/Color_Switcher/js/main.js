/*global console , $*/

var app = new Vue({
    el:"#mo-app",
    data:{
        color:"#b71540"
    },
    methods:{
        updateColor:function(e){

            this.color = e.target.getAttribute("data-color");
        }
    }
});