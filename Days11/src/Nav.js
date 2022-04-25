import React from 'react'
import './nav.css'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { BsFacebook, BsTwitter, BsLinkedin, BsBehance } from "react-icons/bs";
 function Navv() {
  return (
    <Navbar bg="light shadow" expand="lg">
    <Container>

      <Navbar.Brand href="" class='col-6   fs-2 shad'><span>Coding</span><span className='text-primary '> Addict</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <div class='col-3'> <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#home">Project</Nav.Link>
          <Nav.Link href="#home">Contact</Nav.Link>
          <Nav.Link href="#home">Profile</Nav.Link>
          
        </Nav></div>
      </Navbar.Collapse>
    </Container>
    <nav class="px-1 pt-3 text-info text-center col-4  d-none d-lg-block">
          <BsFacebook size={20} class="mx-3" />
          <BsTwitter size={20} class="mx-3" />
          <BsLinkedin size={20} class="mx-3" />
          <BsBehance size={20} class="mx-3" />
        </nav>
  </Navbar>
  )
}
export default Navv;
