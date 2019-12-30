import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {NavLink} from 'react-router-dom'

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
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/add" className="nav-link">
              New Question
            </NavLink>
            <NavLink to="/leaderboard" className="nav-link">
              Leaderboard
            </NavLink>
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
