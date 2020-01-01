import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { unsetAuthedUser } from "../actions/authedUser";

class Header extends Component {
  handleSignOutUser = event => {
    event.preventDefault();
    this.props.dispatch(unsetAuthedUser());
    this.props.history.push("/");
  };

  render() {
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
              <span className="navbar-text">{this.props.user}</span>
              <Nav.Link href="#link" onClick={this.handleSignOutUser}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser].name
  };
}
export default withRouter(connect(mapStateToProps)(Header));
