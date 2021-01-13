import React, { Component } from 'react';
import HeaderFile from './HeaderFile';

// Use Class Alternate Function
function Header(){

	const client = "Designer";

	const title ={
		designer: "Designing",
		programmer: "Programing"
	}

	const info = {
		first: "Mohmad",
		last: " Gamal"
	}

	return(
		// Inline Style { JSX }
		<div className="text-white">
			
			<h1 style={
					{
						color:'red',
						fontSize: "70px",
						backgroundColor:"black",
						padding:"10px"
					}
				}
			>

			<HeaderFile 
				name1="Mohmad" 
				name2="Gamal" 
			/>
			
			<HeaderFile 
				name1="Mohmad" 
				name2="Gamal" 
			/>
			
			<HeaderFile 
				name1="Mohmad" 
				name2="Gamal" 
			/>
			

			Hello {`${info.first} ${info.last} `}
			From Header </h1>
			<p className="bg-dark text-center p-3">
				{client === "Designer" ? title.designer : title.programmer} 
				is my life.
			</p>
		</div>
	);


}

export default Header