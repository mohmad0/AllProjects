import React, {Component} from 'react';

class Event extends Component{
	constructor(){
		super()
		this.state = { namber: 0 , name: "Ahmed" , age: 7 }

		this.eventHandler = this.eventHandler.bind(this);
	}

	// If You Not Use The Arrow Function Add This this.nameFunction = this.nameFunction.bind(this) In The constructor
	eventHandler(){
		this.setState(prevState => {
			return { namber: prevState.namber + 1 }
		} )
	}

	changeNameAndAge = () => {
		this.setState({
			name: "Mohmad",
			age:23
		})
	}

	handelClick = () => {
		console.log("Clicked")
	}

	handelDoubleClick = () => {
		console.log("Double Clicked")
	}

	handelMouseMove = () => {
		console.log("Mouse Moved")
	}

	render(){
		return(
			<div>
				<h2> {this.state.namber} </h2>
				<button onClick={this.eventHandler}>Click Here</button>

				<button onClick={this.handelClick}>Click Here </button>

				<button onDoubleClick={this.handelDoubleClick}>Double Clicked</button>

				<button onMouseMove={this.handelMouseMove}>Mouse Moved</button>

				<button onClick={this.changeNameAndAge}>Click To Change</button>

				<p>
					{this.state.name}
					<br/>
					{this.state.age}
				</p>
			</div>
		);
	}
}

export default Event