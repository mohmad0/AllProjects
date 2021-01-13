import React from 'react';

// This Will Be Render Only One
function Memo({name}){
		console.log("Rendering Memo Component")
		return(
			{/* // This Will Be Render Only One */}	
			<h1> { name } </h1>
		);
	}
}

export default React.memo(Memo)