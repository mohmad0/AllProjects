import React, {Component} from 'react';
import FooterItem from './FooterItem';

class Footer extends Component{

	constructor(){
		super()
		this.state = {
						info :[
								{id:1,		img:'https://picsum.photos/300',		name:'Mohmad Gamal',		nameJob:'Web Designer',		phone:'Phone:01223072359',		email:'Email:mohmadailsia@gmail.com',		website:'Website:There Is no'},
								{id:2,		img:'https://picsum.photos/300',		name:'Mohmad Gamal',		nameJob:'Web Designer',		phone:'Phone:01223072359',		email:'Email:mohmadailsia@gmail.com',		website:'Website:There Is no'},
								{id:3,		img:'https://picsum.photos/300',		name:'Mohmad Gamal',		nameJob:'Web Designer',		phone:'Phone:01223072359',		email:'Email:mohmadailsia@gmail.com',		website:'Website:There Is no'},
								{id:4,		img:'https://picsum.photos/300',		name:'Mohmad Gamal',		nameJob:'Web Designer',		phone:'Phone:01223072359',		email:'Email:mohmadailsia@gmail.com',		website:'Website:There Is no'}
							]			
					}
	}

	// const styleFooter = 	{
	// 					color:'red',
	// 					fontSize: "70px",
	// 					backgroundColor:"black",
	// 					padding:"10px"
	// 				}

	maping(x){
		const members = x.map(member =>
									<FooterItem

										key={member.id}
										img={member.img}
										name={member.name}
										nameJob={member.nameJob}
										phone={member.phone}
										email={member.email}
										website={member.website}
									/>
								);

		return members
	}

	render(){


		return(
			// Internal Style [ JSX ]
			<div className="row">
				{this.maping(this.state.info)}
			</div>
		);
	}
}

/*

			<FooterItem
				p = {{
					img: 'https://picsum.photos/300',
					name: 'Mohmad Gamal',
					nameJob: 'Web Designer',
					phone: 'Phone:01223072359',
					email: 'Email:mohmadailsia@gmail.com',
					website: 'Website:There Is no',
				}}
			/>
			<FooterItem
				p = {{
					img: 'https://picsum.photos/300',
					name: 'Mohmad Gamal',
					nameJob: 'Web Designer',
					phone: 'Phone:01223072359',
					email: 'Email:mohmadailsia@gmail.com',
					website: 'Website:There Is no',
				}}
			/>
			<FooterItem
				p = {{
					img: 'https://picsum.photos/300',
					name: 'Mohmad Gamal',
					nameJob: 'Web Designer',
					phone: 'Phone:01223072359',
					email: 'Email:mohmadailsia@gmail.com',
					website: 'Website:There Is no',
				}}
			/>
			<FooterItem
				p = {{
					img: 'https://picsum.photos/300',
					name: 'Mohmad Gamal',
					nameJob: 'Web Designer',
					phone: 'Phone:01223072359',
					email: 'Email:mohmadailsia@gmail.com',
					website: 'Website:There Is no',
				}}
			/>

*/

// <h1 style={styleFooter}> Hello World From Footer </h1>

export default Footer