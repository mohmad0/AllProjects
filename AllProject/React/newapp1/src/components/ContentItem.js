import React, {Component} from 'react';

// Useing Props
class ContentItem extends Component{


	render(){
		return(

			// Useing Props
			<li className="list-group-item">
				<img src={this.props.p.img} alt={`Icon Of ${this.props.p.media}`} />
				<input type="checkbox" className="mr-2" id={this.props.p.id}/>
				<label htmlFor={this.props.p.id}> {this.props.p.media} </label>
			</li>
		);
	}
}

export default ContentItem