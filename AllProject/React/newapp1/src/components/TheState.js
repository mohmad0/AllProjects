import React, {Component} from 'react';

class State extends Component{

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