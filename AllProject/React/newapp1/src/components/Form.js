import React , { Component } from 'react';

class Form extends Component{

	state = {
		name: ''
	}

	handelChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	handelSubmit = (e) => {
		e.preventDefault();

		console.log(this.state.name)
	}


	render(){
		return(
			<div>
				Form Part 1
				<form onSubmit={this.handelSubmit}>
				
					<input type="text" onChange={this.handelChange} />
					<button>Submit</button>
					<br />
					<hr />

					<textarea type="text" onChange={this.handelChange} />
					<input type="submit" value="Send" />


					<br />
					<hr />


					<select onChange={this.handelChange}>
						<option value="Value1"> Value1 </option>
						<option value="Value2"> Value2 </option>
						<option value="Value3"> Value3 </option>
					</select>
					<input type="submit" value="Send" />

				</form>
				{this.state.name}
			</div>
		)
	}
}

export default Form