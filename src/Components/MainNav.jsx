import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Mainall.css";

function MainNav() {
  return (
    <div>
      <Navbar expand="lg" className="nav-margin" bg="light">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpnaLNuSx-1nQxx12pW0M2UJGZH33g0MiFQ&usqp=CAU" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='textsm'>Home</Nav.Link>
            <Nav.Link href="/downloadapp" className='textsm'>Download App</Nav.Link>
            <Nav.Link href="/rewards" className='textsm'>MyMcDonald's Rewards</Nav.Link>
            <Nav.Link href="/exclusive" className='textsm'>Exclusive Deals</Nav.Link>
            <Nav.Link href="/about" className='textsm'>About Our Food</Nav.Link>
            <Nav.Link href="/locate" className='textsm'>Locate</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning" className='widthadd'>Order Now</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default MainNav;
