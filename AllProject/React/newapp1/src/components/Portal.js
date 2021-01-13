import React from 'react';
import ReactDOM from 'react-dom';

// This Will Added In Another Div In DOM Tree In HTML
function Portal() {

	return ReactDOM.createPortal(
		<h1> PortalDemo </h1>,
		document.getElementById("portal-root")
	);

}

export default Portal