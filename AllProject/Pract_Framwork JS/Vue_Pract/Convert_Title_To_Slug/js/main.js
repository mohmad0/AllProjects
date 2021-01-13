/*global console , $*/

var app = new Vue({
    el:"#mo-app",
    data:{
        input:"",
        output:""
    },
    methods:{
    	convertToSlug(){

    		// Cache The Vars
    		var theSlug = this.input;

    		// [1] Convert To Lower Case
    		theSlug = theSlug.toLowerCase();

    		// [2] Replace White Spaces With Dashes
    		theSlug = theSlug.replace(/\s+/g , '-');

    		// [3] Replace [ & ] to ==> [ -and- ]
    		theSlug = theSlug.replace(/&/g , '-and-');

    		// Add The Result To Output
    		this.output = theSlug
    	}
    }
});