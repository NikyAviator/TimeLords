import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Nav,Navbar,NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Button } from 'reactstrap';
export default function Header() {
  return (
    <div>
  <Navbar
    color="faded"
    light>
    <NavbarBrand
      className="me-auto"
      href="/"
    >
      TimeLords
    </NavbarBrand>
    <NavbarToggler
      className="me-2"
      onClick={function noRefCheck(){}}
    />
    <Collapse navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
  );
}
