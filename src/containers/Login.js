import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect, withRouter } from "react-router-dom";
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

    if (this.state.redirect === true ) {
      return <Redirect to={referrer} />;
    }

    return (
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 4, offset: 4 }}>
            <div className="login-content mt-4 text-center">
              <span className="logo mb-2"></span>
              <h5 className="text-muted font-weight-light">Wellcome to the</h5>
              <h4 className="mb-4 p-0 login-title font-weight-normal">
                Would You Rather App
              </h4>
              <div className="login-content-inner shadow-sm bg-white p-5">
                <h5 className="questionf-subtitle mb-5">
                  Select one character to login
                </h5>
                <div className="d-flex justify-content-center pb-4">
                  {Object.values(this.props.users).map(user => (
                    <LoginUser
                      key={user.id}
                      user={user}
                      signInUser={this.handleSignInUser}
                    />
                  ))}
                </div>
              </div>
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

export default withRouter(connect(mapStateToProps)(Login));
