import React, { useState } from 'react';
import { Navbar,Nav,NavDropdown,Image, Container} from 'react-bootstrap'; 
import { BrowserRouter as  NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../images/logo.png' 
export default function Header() {

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" defaultactivekey="/index">
        <Container>
        <Navbar.Brand href="/"><Image src={logo} alt="" className="img-fluid whiteimg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>      
            <NavDropdown title="tenanent" id="collasible-nav-dropdown">
              <NavDropdown.Item href="propertyrent">Available for rent</NavDropdown.Item>
              <NavDropdown.Item href="complains">complains</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="property" id="collasible-nav-dropdown">
              <NavDropdown.Item href="availableproperty">Available for property</NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href="investor">investor</Nav.Link>
            <Nav.Link href="contactus"> contact us</Nav.Link>
            
             <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="dashboardmain">My Profile</NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href=""></Nav.Link>
            <Nav.Link href="login"><FaUserAlt/></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );

}