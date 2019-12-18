import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'

function App() {
  return (
    <Navbar expand="lg" fixed="top" variant="light" className="main-navbar">
      <Container>
        <Navbar.Brand href="#home">Title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">New question</Nav.Link>
            <Nav.Link href="#link">Leader board</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home">User</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
