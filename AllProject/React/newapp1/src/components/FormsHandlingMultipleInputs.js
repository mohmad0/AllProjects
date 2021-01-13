import React, { Component } from 'react';

/*
	first make variable [ name ] that be store name in tags form
	then take it in setState function and change it to value in tags form
	example 1 when name == value 
	this.setState({
		value: event.target.value [ The That Be In Self Tag Of Form ]
	})

	example 2 when name == checked 
	this.setState({
		checked: event.target.checked [ The That Be In Self Tag Of Form ]
	})

	Ect...

*/

class Header extends Component{

	state = {
		radioval:"2",
		checked:true,
		value:"Default",
		selected:"2"
	}

	setValue = (event) => {
		const 	name   = event.target.name;
		const 	type   = event.target.type;
		let 	value  = "";
		if(type == "checkbox")
				value = event.target.checked;
		else
				value = event.target.value;
		this.setState({
				[name]: value
		})
	}

	render(){

		return(
			
			<div>
				<input name="value" value={this.state.value} onChange={this.setValue} />
				<hr />
				<select name="selected" value={this.state.selected} onChange={this.setValue} >
					<option value="1" >One</option>
					<option value="2" >Tow</option>
				</select>
				<hr />
				<textarea name="value" value={this.state.value} onChange={this.setValue} />
				<hr />
				<label>Change
					<input name="checked" type="checkbox" checked={this.state.checked} onChange={this.setValue}  />
				</label>
				<hr />
				<div name="radioval" onChange={this.setValue}>
					<input name="radioval" type="radio" value="1" checked={this.state.radioval == "1"} /> One
					<input name="radioval" type="radio" value="2" checked={this.state.radioval == "2"} /> Two
				</div>
			</div>
		);
	}


}

export default FormsControlled