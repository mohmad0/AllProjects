import React , { Component } from 'react';
import classnames from 'classnames';

// sudo npm i classnames

// https://github.com/JedWatson/classnames

class ClassNames extends Component{

	render(){
		let classs = classnames( 'test1' , 'test2' {green: 1 < 2 , whiteText: 3 > 2 , boldText: 5 < 7})

		// let classs = [];

		// if ( 1 < 2) 
		// {
		// 	classs.push('green')
		// }

		// if ( 3 > 2) 
		// {
		// 	classs.push('whiteText')
		// }

		// if ( 5 < 7) 
		// {
		// 	classs.push('boldText')
		// }

		return(
			// Inline Style { JSX }
			<div className={classs}>
				Test
			</div>
		);
	}


}

export default ClassNames