import React from 'react';

// Useing Props
function ContentItem(props){


	return(

		// Useing Props
		<li className="list-group-item">
			<img src={props.p.img} alt={`Icon Of ${props.p.media}`} />
			<input type="checkbox" className="mr-2" id={props.p.id}/>
			<label htmlFor={props.p.id}> {props.p.media} </label>
		</li>
	);
}

export default ContentItem