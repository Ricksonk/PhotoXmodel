import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import { StyledNavbar } from "./styles";

export function Navigation() {
  return (
    <StyledNavbar>
      <Navbar  className="nav-menu fixed-top navbar-expand-lg text-light navbar-collapse">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-light "><span className="h2 font-weight-bold">PHOTO</span><span className="h1">X</span></Navbar.Brand>

          <Nav className="justify-content-end ">
            <Nav.Link href="#home" className="m-2 menu-item  text-light">Home</Nav.Link>
            <Nav.Link href="#mission" className="m-2 menu-item text-light">Mission</Nav.Link>
            <Nav.Link href="#collection" className="m-2 menu-item text-light">Collection</Nav.Link>
            <Nav.Link href="#gallery" className="m-2 menu-item  text-light">Gallery</Nav.Link>
            <Nav.Link href="#customers" className="m-2 menu-item text-light">Customers</Nav.Link>
            <Nav.Link href="#pricing" className="m-2 menu-item text-light">Pricing</Nav.Link>
            <Nav.Link href="#contact" className="m-2 menu-item text-light">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </StyledNavbar>
  )
}