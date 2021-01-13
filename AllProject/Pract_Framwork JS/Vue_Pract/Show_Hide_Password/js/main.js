/*global console , $*/

var app = new Vue({
    el:"#mo-app",
    data:{
        fieldType:"password"
    },
    methods:{
        switchField() {
                this.fieldType = this.fieldType === "password" ? "text" : "password";
            }
    	}
});