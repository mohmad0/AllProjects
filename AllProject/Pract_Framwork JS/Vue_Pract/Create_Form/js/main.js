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
		formErrors: [],
		username: null,
		subject: null,
		message: null,
		maxChars: 10,
	},
	methods: {
		valdateForm: function (e) {
			this.formErrors = []; // Empty Errors To Start Fresh

			// [1] Check If Username Is Empty
			if (!this.username) {
				this.formErrors.push("Username Cant Be Empty");
			}

			// [2] Check If Subject Is Empty
			if (!this.subject) {
				this.formErrors.push("Subject Cant Be Empty");
			}

			// [3] Check If Message Is Empty
			if (!this.message) {
				this.formErrors.push("Message Cant Be Empty");
			}

			// [4] Check Username Characters Count
			if (this.username && this.username.length > this.maxChars) {
				this.formErrors.push(
					`Username Cant Be More Than ${this.maxChars} Characters`
				);
			}

			// If No Errors Return True
			if (!this.formErrors.length) {
				return true
			}

			e.preventDefault();
		},
	},
});
