import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import './navbar.css'

function CollapsibleExample() {

    const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}

  return (
    <>
    <Navbar id='navbar' className='shadow-sm sticky-top' collapseOnSelect expand="lg" 
    variant="light" bg="light" >
      <Container >
        <Navbar.Brand className="navbar-brand " href="#home">
        Digital<span>Solution.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
          </Nav>
          
          <Nav >
            
            <Nav.Link eventKey={2} href="#about">
             About
            </Nav.Link>

                    <Nav.Link href="#platform">Platform</Nav.Link>
                    <Nav.Link href="#service">Services</Nav.Link> 
                    
            <NavDropdown title="Dropdown" 
                         id="collasible-nav-dropdown" 
                         show={show}
                         onMouseEnter={showDropdown} 
                         onMouseLeave={hideDropdown}
                         >

              <NavDropdown.Item href="#pitching" id="dropdown-item" >
                Pitch
                </NavDropdown.Item>
              <NavDropdown.Item href="https://azat.ai" target="_blank" id="dropdown-item">
                Ai
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.ibm.com/watson/about" target="_blank" id="dropdown-item"> 
                IBM Ai
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://aiforbusiness.withgoogle.com/en-GB_uk/assessment" 
               target="_blank" id="dropdown-item">
                Google Ai
              </NavDropdown.Item>
            </NavDropdown>
             
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CollapsibleExample;