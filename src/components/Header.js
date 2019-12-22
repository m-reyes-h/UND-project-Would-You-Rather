import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="app-navbar shadow-sm" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <span className="logo"></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link">New Question</Nav.Link>
            <Nav.Link href="#link">New Question</Nav.Link>
            <Nav.Link href="#link">Leaderboard</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#link">User</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
