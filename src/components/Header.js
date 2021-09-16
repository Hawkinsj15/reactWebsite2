import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";




export default function Header() {
    return (
        <div class="container" >
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
               
  <Container>
{/*      

  <Navbar.Brand href="#home">BrownTechBae</Navbar.Brand> */}
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    
    <Nav className="mr-auto">
      <Nav.Link href="#features">
      <FontAwesomeIcon
                id="techIconAbout"
                icon={faTwitter}
                style={{ color: "black" }}
              /></Nav.Link>
      <Nav.Link href="#pricing">
      <FontAwesomeIcon
                id="techIconAbout"
                icon={faFacebook}
                style={{ color: "black" }}
              />
      </Nav.Link>
      <Nav.Link href="#pricing">
      <FontAwesomeIcon
                id="techIconAbout"
                icon={faGithub}
                style={{ color: "black" }}
              />
      </Nav.Link>
      <Nav.Link href="#pricing">
      <FontAwesomeIcon
                id="techIconAbout"
                icon={faLinkedinIn}
                style={{ color: "black" }}
              />
      </Nav.Link>
      
    </Nav>
    
    
   
    

    
    
    

    
  </Navbar.Collapse>
  
  
  </Container>
</Navbar>
       
  

        </div>
    )
}
