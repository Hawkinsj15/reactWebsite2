import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export default function Header() {
    return (
        <div>
       
  <Navbar expand="lg" variant="light" bg="dark">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>

        </div>
    )
}
