import React from 'react';
import {NavLink} from 'react-router-dom';
// {Link , NavLink}


// React Router ==> sudo npm i react-router-dom


// You Can Add ==> [ Link Or NavLink ] 
// NavLink Will Do Add active class on the selected Link
// Change name active class from ==> activeClassName="name the new active class"

const Nav = () => {
	return(
		<div className="navbar-nav">
			<div className="container-nav">
				<a href="#:void(0)" className="logo-nav">Logo</a>
				<ul className="nav">

					<NavLink activeClassName="selected" exact to="/">Home</NavLink>
					<NavLink activeClassName="selected"  to="/About">About</NavLink>
					<NavLink activeClassName="selected"  to="/Blog">Blog</NavLink>
				</ul>
			</div>
		</div>
	)
}

export default Nav