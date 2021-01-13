import React, {Component} from 'react';
import info from './Info';
import ShowHideItem from './ShowHideItem'

class Showhide extends Component{

	constructor(){
		super()
		this.state = { info: info , increseNumber: 0, myStor: [] }
		this.AddItem = this.AddItem.bind(this);
	}

	AddItem(e){
		if(this.state.increseNumber < this.state.info.length){
			this.setState(preState => {
				return { 
					increseNumber: preState.increseNumber + 1
				}
			})

			this.state.myStor.push(this.state.info[this.state.increseNumber])
			this.newmembers = this.state.myStor.map(member =>
									<ShowHideItem

										key={member.id}
										img={member.img}
										name={member.name}
										nameJob={member.nameJob}
										phone={member.phone}
										email={member.email}
										website={member.website}
									/>
								);

		}
	}

	render(){


		return(
			// Internal Style [ JSX ]
			<div className="row">
				{this.newmembers}
				<div>
					<button className="btn btn-dark text-white" onClick={this.AddItem}>Add Item</button>
				</div>
			</div>
		);
	}
}

export default Showhide