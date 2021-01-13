/*global console , $*/

var app = new Vue({
    el:"#mo-app",
    data:{
        name:null,
        email:null,
        phones:null
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