import React, { Component } from 'react';

class Header extends Component{

	state = {
		value:"Default"
	}

	setValue = (event) => {
		this.setState({
			value: event.target.value
		})
	}

	render(){

		return(
			
			<div>
				<textarea value={this.state.value} onChange={this.setValue} />
			</div>
		);
	}


}

export default FormsControlled