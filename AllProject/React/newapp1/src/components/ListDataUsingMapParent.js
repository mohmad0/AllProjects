import React , { Component } from "react";
import Child from "./ListDataUsingMapChild";

class ParentMap extends Component{

	constructor(){
		super()
		console.log("constructor")
	}


	componentDidMount = () => {
		console.log("componentDidMount")
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log("componentDidUpdate", prevProps, prevState)
	}

	handelAdd = (e) => {
		let memb = this.state.memb;
		memb.push({id:3 , name: "Koko" , age:40})
		this.setState({
			memb: memb
		})
	}

	handelDelete = (e) => {
		this.setState({
			memb: [
				{id:4 , name: "Foo" , age:50}
			]
		})
	}

	state = {
		items: [
			{id:1 , name: "Mohmad" , age:23},
			{id:2 , name: "Ali" , age:22},
			{id:3 , name: "Safe" , age:10}
		]
	}

	render(){
		return (
			<div>
				<Child items={this.state.items} />
			</div>
		)
	}
}

export default ParentMap