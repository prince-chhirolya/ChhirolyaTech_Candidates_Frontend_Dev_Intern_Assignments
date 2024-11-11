import React from 'react';
import Page1 from './Page1.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './home.css';
import headerBackground from '../assets/header.svg';
import Button from 'react-bootstrap/esm/Button.js';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


export default function Home() {
  return (
    <div>
        <div className='header'></div>
        <Navbar collapseOnSelect className='custom-navbar' expand="lg"  data-bs-theme="dark">
             <Navbar.Brand href="#home">GIT CLONE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <NavDropdown title="Product" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Features" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{display:'flex',gap:'10px'}}>
            <button  className='login-btn'>Login</button>
            <button className='start-btn'><span className='start-btn-text'>Start for free</span><span className='start-btn-icon'><LiaLongArrowAltRightSolid /></span></button>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
 
        <Page1/>
    </div>
  )
}
