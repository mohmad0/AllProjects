import React, { Component } from 'react';

// The Class Have More Options Than Function
class HeaderFile extends Component{

	method(){
		return <h2>Mohmad Gamal</h2>
		
	}

	// method(name1){
	// 	return <h3>{name1}</h3>
		
	// }

	// Must Be Find
	render(){

		// const name1 = this.method();
		// const name2 = "Test From Header File";

		return(
			<h1> { this.props.name1 } { this.props.name2 } </h1>
		);
	}
}

export default HeaderFile