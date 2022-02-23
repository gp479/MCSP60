import React, { useState } from 'react';
import { Navbar,Nav,NavDropdown,Image, Container} from 'react-bootstrap';
import { BrowserRouter as  NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../images/logo.png' 
export default function Header() {
  
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" defaultActiveKey="/index">
        <Container>
        <Navbar.Brand href="/"><Image src={logo} alt="" className="img-fluid whiteimg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>      
            <NavDropdown title="tenanent" id="collasible-nav-dropdown">
              <NavDropdown.Item href="availableproperty">Available for rent</NavDropdown.Item>
              <NavDropdown.Item href="#">complaints for property</NavDropdown.Item>
              <NavDropdown.Item href="viewstatuscomplains">view status complains</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="property" id="collasible-nav-dropdown">
              <NavDropdown.Item href="availableproperty">Available for property</NavDropdown.Item>
              <NavDropdown.Item href="#">tenants/changes status</NavDropdown.Item>
              <NavDropdown.Item href="#">verify/Generate lease</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="investor">investor</Nav.Link>
            <Nav.Link href="contactus"> contact us</Nav.Link>
            <Nav.Link href="login"><FaUserAlt/></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}