import React, { Component } from 'react';

class Header extends Component{

	state = {
		selected:"2"
	}

	setSelectedValue = (event) => {
		this.setState({
			selected: event.target.value
		})
	}

	render(){

		return(
			
			<div>
				<select value={this.state.selected} onChange={this.setSelectedValue} >
					<option value="1" >One</option>
					<option value="2" >Tow</option>
				</select>
			</div>
		);
	}


}

export default FormsControlled