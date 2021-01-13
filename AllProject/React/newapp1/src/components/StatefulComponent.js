import React , { Component } from 'react';
import Stateless from './StatelessComponent';

/*
	//// The Name For This Component Is Stateful Component
	/// Becouse The Component Is Based On Class And Contain { State }
*/
class Stateful extends Component{

	state = {
		name: "mohmad From Stateful Component"
	}

	render(){
		return(
			<div>
				<Stateless test={this.state.name} />
			</div>
		)
	}
}

export default Stateful