import React, {Component} from 'react';

class ShowHideItem extends Component {
	render(){
		return(

			<div className="col-md-4 col-sm-6">

				<div className="card" style={{backgroundColor: this.props.website === "Website:There Is no" ? "#155804" : "black" , marginBottom:"10px"}}>

					<div className="card-header">
						<img style={{maxWidth:"100%"}} src={this.props.img} alt="" />
					</div>

					<div className="card-body text-white">
						<h2>{this.props.name}</h2>
						<h5>{this.props.nameJob}</h5>

						<div>{this.props.phone === "Phone:There Is no" ? '' : this.props.phone}</div>
						<div>{this.props.email === "Email:There Is no" ? '' : this.props.email}</div>
						<div>{this.props.website === "Website:There Is no" ? '' : this.props.website}</div>
					</div>

				</div>

			</div>
		);
	}
}

export default ShowHideItem