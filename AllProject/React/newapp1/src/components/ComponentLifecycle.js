import React, { Component } from 'react';


/*

	1-constructor
	2-render
	3-componentDidMount
	4-componentDidUpdate

*/

class Lifecycle extends Component{
	constructor(){
		super()
		console.log("constructor")
	}

	state = {
		memb: [
			{key:Math.random()},
			{id:1, name:"Hallo"},
			{id:2, name:"Good"},
			{id:3, name:"Nice"}
		]
	}

	componentDidMount = () => {
		console.log("componentDidMount" , this.state.memb[2])
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log("componentDidUpdate", prevProps, prevState)
	}

	handelAdd = (e) => {
		let memb = this.state.memb;
		memb.push({id:4, name:"Koko"})
		this.setState({
			memb: memb
		})
	}

	handelDelete = (e) => {
		this.setState({
			memb: [
				{id:1, name:"Lolo"}
			]
		})
	}

	render(){


		const {memb} = this.state;
		const TheMem 	= memb.map((mem) => {

								return(
									<div key={Math.random()}>
										<h1> {mem.id} </h1>
										<h1> {mem.name} </h1>
									</div>
								)

							})

		return(
			<div>
				console.log("render")
				<div>
					<div>
						{TheMem}
					</div>
				</div>
				<button onClick={this.handelAdd}>Add</button>
				<button onClick={this.handelDelete}>Delete</button>
			</div>
		)
	}
}

export default Lifecycle