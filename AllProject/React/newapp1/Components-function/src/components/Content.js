import React from 'react';
import ContentItem from './ContentItem';

function Content(){
	return(
		<div>
			<h1 className="bg-dark p-2 m-2"> Hello World From Content </h1>

			<ul className="list-group">

				<ContentItem 
					p = {{
						media:"Facebook" ,
						id:"facebook",
						img:"https://picsum.photos/60",
					}}
				/>
				<ContentItem
					p = {{
						media:"Youtube" ,
						id:"youtube",
						img:"https://picsum.photos/61",
					}}

				/>
				<ContentItem
					p = {{
						media:"Gmail",
						id:"gmail",
						img:"https://picsum.photos/62",
					}}
 
				/>
				<ContentItem
					p = {{
						media:"LinkedIn",
						id:"gmail",
						img:"https://picsum.photos/63",
					}}
 
				/>

			</ul>
			
		</div>

	);
}

export default Content