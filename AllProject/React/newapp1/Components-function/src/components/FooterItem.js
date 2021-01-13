import React from 'react';

function FooterItem(props){


	return(

		<div className="col-md-4 col-sm-6">

			<div className="card" style={{backgroundColor: props.website === "Website:There Is no" ? "#155804" : "black" , marginBottom:"10px"}}>

				<div className="card-header">
					<img style={{maxWidth:"100%"}} src={props.img} alt="" />
				</div>

				<div className="card-body text-white">
					<h2>{props.name}</h2>
					<h5>{props.nameJob}</h5>

					<div>{props.phone === "Phone:There Is no" ? '' : props.phone}</div>
					<div>{props.email === "Email:There Is no" ? '' : props.email}</div>
					<div>{props.website === "Website:There Is no" ? '' : props.website}</div>
				</div>

			</div>

		</div>
	);
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