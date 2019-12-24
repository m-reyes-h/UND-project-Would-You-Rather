import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
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
                <span
                  role="button"
                  className="poll-avatar user1 mr-4"
                  tabIndex="1"
                ></span>
                <span
                  role="button"
                  className="poll-avatar user2 mr-4"
                  tabIndex="2"
                ></span>
                <span
                  role="button"
                  className="poll-avatar user3"
                  tabIndex="3"
                ></span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
