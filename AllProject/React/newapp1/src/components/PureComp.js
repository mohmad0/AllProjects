import React, { PureComponent } from 'react';

// This Will Be Render Only One
class PureComp extends PureComponent{

	render(){
		console.log("Rendering PureComponent")
		return(
			<h1> PureComponent </h1>
		);
	}
}

export default PureComp