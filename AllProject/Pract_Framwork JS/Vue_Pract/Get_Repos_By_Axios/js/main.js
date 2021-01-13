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
		username: null,
		repos: null,
	},
	methods: {
		getRepos: function () {
			/*
				[1] get data From API
				[2] return the respose
				[3] catch Errors
			*/

			return axios
				.get(`https://api.github.com/users/${this.username}/repos`)
				.then((respons) => { this.repos = respons.data })
				.catch((error) => { console.log(error) });
		},
	},
});
