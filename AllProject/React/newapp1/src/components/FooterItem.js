import React, {Component} from 'react';

class FooterItem extends Component {
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

/*

<div style={{  backgroundColor: props.p.website === "Website:There Is no" ? "#155804" : "black", margin:"10px",color:"#999", width:"400px" , padding: "10px" ,textAlign:"center"}}>
	<img src={props.p.img} alt="" />
	<h2>{props.p.name}</h2>
	<h3 style={{fontSize:"25px"}}>{props.p.nameJob}</h3>
	<span style={
		{
			display:"block",
			textAlign:"left",
			paddingLeft:"80px"
		}
	}>{props.p.phone === "Phone:There Is no" ? '' : props.p.phone}</span>

	<span style={
		{
			display:"block",
			textAlign:"left",
			paddingLeft:"80px"
		}
	}>{props.p.email === "Email:There Is no" ? '' : props.p.email}</span>

	<span style={
		{
			display:"block",
			textAlign:"left",
			paddingLeft:"80px"
		}
	}>{props.p.website === "Website:There Is no" ? '' : props.p.website}</span>

</div>

*/


export default FooterItem