import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect, Link } from "react-router-dom";
import LoginUser from "../components/LoginUser";

class Login extends Component {
  state = {
    redirect: false
  };

  handleSignInUser = id => {
    this.props.dispatch(setAuthedUser(id));
    this.setState({
      redirect: true
    });
  };

  render() {
    const { referrer } = this.props.location.state || {
      referrer: { pathname: "/home" }
    };

    if (this.state.redirect === true) {
      return <Redirect to={referrer} />;
    }

    return (
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="login-content mt-4 text-center">
              <span className="logo mb-2"></span>
              <h5 className="text-muted font-weight-light">Wellcome to the</h5>
              <h4 className="mb-4 p-0 login-title font-weight-normal">
                Would You Rather App
              </h4>
              <div className="login-content-inner shadow-sm bg-white py-5 px-4">
                <h5 className="login-subtitle mb-3">
                  Select one character to login
                </h5>
                <div className="d-flex flex-wrap justify-content-center pb-2">
                  {Object.values(this.props.users).map(user => (
                    <LoginUser
                      key={user.id}
                      user={user}
                      signInUser={this.handleSignInUser}
                    />
                  ))}
                </div>
              </div>
              <Link
                to="/newuser"
                className="d-inline-block flat-button flat-button-hero rounded-pill text-uppercase mt-4 shadow-sm"
              >
                Create new user
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: users || {}
  };
}

export default connect(mapStateToProps)(Login);
