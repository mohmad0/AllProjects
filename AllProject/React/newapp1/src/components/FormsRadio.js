import React, { Component } from 'react';

class Header extends Component{

	state = {
		radioval:"2"
	}

	setRadioValue = (event) => {
		this.setState({
			radioval: event.target.checked
		})
	}

	render(){

		return(
			
			<div>
				<div onChange={this.setRadioValue}>
					<input type="radio" value="1" checked={this.state.radioval == "1"} /> One
					<input type="radio" value="2" checked={this.state.radioval == "2"} /> Two
				</div>
			</div>
		);
	}


}

export default FormsControlled