import React, { Component } from 'react';

class Header extends Component{

	state = {
		checked:true
	}

	setCheckedValue = (event) => {
		this.setState({
			checked: event.target.checked
		})
	}

	render(){

		return(
			
			<div>
				<label>Change
					<input type="checkbox" checked={this.state.checked} onChange={this.setCheckedValue}  />
				</label>
			</div>
		);
	}


}

export default FormsControlled