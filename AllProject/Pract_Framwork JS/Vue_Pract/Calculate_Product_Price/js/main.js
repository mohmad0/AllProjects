/*global console , $*/

var app = new Vue({
    el:"#mo-app",
    data:{
        amount:1,
        price:50,
    },
    computed:{
        totalPrice:function(){
            return this.amount * this.price;
        }
    }
});