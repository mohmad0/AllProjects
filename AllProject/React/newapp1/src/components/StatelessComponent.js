import React  from 'react';

/*
	//// The Name For This Component Is Stateless Component
	/// Becouse The Component Is Based On { Function Or Class }
	But Function Is Faverable And Not Contain { State }
*/
const Stateless = (props) => {

	return(
		<div>
			<h1> {props.test} </h1>
		</div>
	)
}

export default Stateless