import React from "react";
import { Container, Row, Col, Button, Navbar, Card, Nav } from 'react-bootstrap';
export default function Header_2() {
  return (
    <Navbar className="nav-color" expand="lg">
      <Container>

        <Navbar.Brand href="/">
          <img
            src="images/Logo.svg"
            width="200"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/my_cities">My Cities</Nav.Link>
        </Nav>
      </Container>


    </Navbar >
  );
}
