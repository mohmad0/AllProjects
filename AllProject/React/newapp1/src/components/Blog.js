import React, { Component } from 'react';
import axios from 'axios';
import theImg from "./mohmad.jpg";

// https://jsonplaceholder.typicode.com/

// sudo npm i axios

class Blog extends Component {

	state = {
		users: []
	}

	componentDidMount(){

		axios.get("https://jsonplaceholder.typicode.com/users")
		.then(res => {
			console.log(res.data)

			this.setState({
				users: res.data
			})
		})
		console.log(this.props.match.path)
	}

	render(){

		const {users} = this.state;
		const userList = users.map(user => {
			return (
				<div key={user.id}>
					<div className="containt_blog">
						<div>Name: {user.name}</div>
						<div>UserName: {user.username}</div>
					</div>
				</div>
			)
		})

		return(
			<div>
				<h2>Blog</h2>
				<img src={theImg} alt="" className="img_blog" />
				<p> Text From Blog Section </p>
				<div>
					{userList}
				</div>
			</div>
		)
	}
}

export default Blog