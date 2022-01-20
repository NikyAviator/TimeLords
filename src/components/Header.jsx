import React from "react";
import { Container, Row, Col, Button, Navbar, Card } from 'react-bootstrap';
export default function Header() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">TimeLords</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
