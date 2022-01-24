import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Nav,Navbar,Offcanvas, Container } from 'react-bootstrap';
export default function Header() {
  return (
    <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">TimeLords</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">TimeLords</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/favorites">Favorites</Nav.Link>
          <Nav.Link href="/biggest-cities">Biggest Cities</Nav.Link>
        </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  );
}
