import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarPage , LogoNavbar , NavLogoText  , NavInput , NavLabel , UlList , ListItem , ListItemLink } from './style.js';
      
const Navbar = () => {
		return (
        <NavbarPage>
            
            <div className="container">
                
                <LogoNavbar>
                    <NavLogoText>Ultra Profile</NavLogoText>
                </LogoNavbar>
                
                <NavInput type="checkbox" id="nav" />
                <NavLabel htmlFor="nav"></NavLabel>
                
                <UlList>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><ListItemLink href="#">Work</ListItemLink></ListItem>
                    <ListItem><ListItemLink href="#">Portfolio</ListItemLink></ListItem>
                    <ListItem><ListItemLink href="#">Resume</ListItemLink></ListItem>
                    <ListItem><ListItemLink href="#">About</ListItemLink></ListItem>
                    <ListItem><Link to="/Contact">Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarPage>
		);
	}

export default Navbar;
