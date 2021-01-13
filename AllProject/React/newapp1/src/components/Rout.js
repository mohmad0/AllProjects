import React from 'react';

const Rout = (props) => {

	console.log(props)

	let x = props.match.params.test_params
	return(
		<div>
			<h2>Rout</h2>
			<p> {x} </p>
		</div>
	)
}

export default Rout