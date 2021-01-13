import React, { Component } from 'react';

/*

function HeaderFile(){
	return(
		<h2>Test From Header File </h2>
	);
}

*/

// The Class Have More Options Than Function
class HeaderFile extends Component{

	method(){
		return <h3>Mohmad Gamal</h3>
		
	}

	// method(name1){
	// 	return <h3>{name1}</h3>
		
	// }

	// Must Be Find
	render(){

		// const name1 = this.method();
		// const name2 = "Test From Header File";

		return(
			<h2> { this.props.name1 } { this.props.name2 } </h2>
		);
	}
}

export default HeaderFile

/*

import React, { Component } from 'react';


function HeaderFile(){
	return(
		<h2>Test From Header File </h2>
	);
}



class HeaderFile extends Component{
	render(){
		return(
			<h2>Test From Header File </h2>
		);
	}
}

export default HeaderFile

*/