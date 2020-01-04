import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../containers/Header";
import { Container, Row, Col } from "react-bootstrap";

const NoMatch = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="leaderboard mt-5 text-center h-75">
              <h2 className="text-center">404</h2>
              <p>The page is missing.</p>
              <Link
                to="/home"
                className="btn btn-primary rounded-pill py-2 px-5 text-uppercase mt-5"
              >
                Go home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NoMatch;
