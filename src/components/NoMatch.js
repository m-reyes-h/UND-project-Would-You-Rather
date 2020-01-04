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
                className="d-inline-block flat-button flat-button-hero rounded-pill text-uppercase mt-5 shadow-sm"
              >
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="#4285f4"
                    d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                  />
                </svg>
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
