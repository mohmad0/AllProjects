/*global console , $*/

var app = new Vue({
	el: "#mo-app",
	data: {
		maxlength: 10,
		remChar: 10,
		msg: null,
		reachZero: false,
	},
	methods: {
		countChar() {
			this.remChar = this.maxlength - this.msg.length;
			this.reachZero = this.remChar === 0;
		},
	},
});
