import React from 'react';

const Form = (props) => {

	return(
		<form onSubmit={props.getwether}>
			<input type="text" name="city" placeholder="City..." />
			<input type="text" name="country" placeholder="Country" />
			<button> Get Wether </button>
		</form>
	)
}

export default Form