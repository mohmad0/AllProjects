import React, {Component} from 'react';

class State extends Component{

	// This For Storing Privete Date Spicial In His Component
	state = {
		name:"Malek And Yaseen"
	}

	render(){
		return(
			<h1> {this.state.name} </h1>
		)
	}
}

export default State