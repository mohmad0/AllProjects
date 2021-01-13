import React from 'react';
import FooterItem from './FooterItem';

function Footer(){

	// const styleFooter = 	{
	// 					color:'red',
	// 					fontSize: "70px",
	// 					backgroundColor:"black",
	// 					padding:"10px"
	// 				}

	const info =[
			{id:1,		img:'https://picsum.photos/300',		name:'Mohmad Gamal',		nameJob:'Web Designer',		phone:'Phone:01223072359',		email:'Email:mohmadailsia@gmail.com',		website:'Website:There Is no'},
			{id:2,		img:'https://picsum.photos/300',		name:'Mohmad Gamal',		nameJob:'Web Designer',		phone:'Phone:01223072359',		email:'Email:mohmadailsia@gmail.com',		website:'Website:There Is no'},
			{id:3,		img:'https://picsum.photos/300',		name:'Mohmad Gamal',		nameJob:'Web Designer',		phone:'Phone:01223072359',		email:'Email:mohmadailsia@gmail.com',		website:'Website:There Is no'},
			{id:4,		img:'https://picsum.photos/300',		name:'Mohmad Gamal',		nameJob:'Web Designer',		phone:'Phone:01223072359',		email:'Email:mohmadailsia@gmail.com',		website:'Website:There Is no'}
	]

	const elements = info.map(member =>
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

	return(
		// Internal Style [ JSX ]
		<div className="row">
			{elements}
		</div>
	);
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