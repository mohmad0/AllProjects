import React, { Component , Fragment } from 'react';

// Fragment Is Not Apper At DOM

/*	This Another Method To Write The ==> Fragment [ But This Is Not Support To Another Browsers ]
		<>
			<td>Mohmad</td>
			<td>Gamal</td>
		</>

*/

class Col extends Component {

	render(){

		return(
			<Fragment>
				<td>Mohmad</td>
				<td>Gamal</td>
			</Fragment>
		)
	}
}

export default Col