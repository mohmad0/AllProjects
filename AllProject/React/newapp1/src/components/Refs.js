import React, { Component } from 'react';
import ForwardRef from './ForwardRef'

// This Will Be Render Only One
class Refs extends Component{

	constructor(props){
		super(props)
		this.inputRef = React.createRef()
		this.cbRef = null
		this.setCbRef = element => {
			this.cbRef = element
		}
	}

	componentDidMount(){
		if (this.cbRef) {
			this.cbRef.focus()
		}
		// this.inputRef.current.focus()
		// console.log(this.inputRef)
	}

	clickHandler = () => {
		alert(this.inputRef.current.value)
	}

	render(){
		return(
			<div>
				<ForwardRef ref={this.inputhisRef} />
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}> Click</button>
			</div>
		);
	}
}

export default Refs