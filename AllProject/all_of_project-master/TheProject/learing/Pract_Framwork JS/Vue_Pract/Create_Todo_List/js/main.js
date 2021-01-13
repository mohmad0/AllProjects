/*global console , $*/

var questions = {
	"Question One": {
		open: true,
		title: "One: What Happen When Bla Bla Bla Bla ?",
		reply: "You Can Do What You Want",
	},
	"Question Tow": {
		open: false,
		title: "Tow: What Happen When Bla Bla Bla Bla ?",
		reply: "You Can Do What You Want",
	},
	"Question Three": {
		open: false,
		title: "Three: What Happen When Bla Bla Bla Bla ?",
		reply: "You Can Do What You Want",
	},
	"Question Four": {
		open: false,
		title: "Four: What Happen When Bla Bla Bla Bla ?",
		reply: "You Can Do What You Want",
	},
	"Question Five": {
		open: false,
		title: "Five: What Happen When Bla Bla Bla Bla ?",
		reply: "You Can Do What You Want",
	},
};


var app = new Vue({
	el: "#mo-app",
	data: {
		tasks:[],
		taskText:""
	},
	methods: {
		addTask: function () {

				this.tasks.push({words: this.taskText , done: false});
				this.taskText = "";
		},
		deleteTask: function(index){

			this.tasks.splice(index , 1);
		},
		deleteAll: function(){
			
			this.tasks = [];
		}		
	},
});
