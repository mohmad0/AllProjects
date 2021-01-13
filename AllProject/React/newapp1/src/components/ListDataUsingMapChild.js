import React , { Component } from "react";

class Child extends Component{

	render(){

		const {items} 	= this.props;
		const TheItems 	= items.map((item) => {

								// // If Condition
								// if (item.id > 1)
								// {
								// 	return (
								// 		/// If Using Map Function Add This { item.id } Or { Math.random() } At Each Element
								// 		<div key={Math.random()}>
								// 			<p> {item.id} </p>
								// 			<p> {item.name} </p>
								// 			<p> {item.age} </p>
								// 		</div>
								// 	)

								// }else{
								// 	return(
								// 		<div> No Item Has Id > 1  </div>
								// 	)
								// }

								// Anther If Condition
								return item.id > 1 ? (
											/// If Using Map Function Add This { item.id } Or { Math.random() } At Each Element
											<div key={item.id}>
												<p> {item.id} </p>
												<p> {item.name} </p>
												<p> {item.age} </p>
											</div>
									) : <div> No Item Has Id > 1  </div>

							})

		return (
			<div> {TheItems} </div>
		)
	}
}

export default Child