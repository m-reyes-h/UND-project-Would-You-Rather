import React, { Fragment } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Header from "./Header";

const PollResult = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="poll-result-content mt-4 text-center">
              <span className="poll-avatar user1 mb-2"></span>
              <h4 className="mb-5 p-0 poll-result-title">
                Asked by Michel Reyes
              </h4>
              <div className="poll-result-inner shadow-sm bg-white p-4 px-5">
                <h5 className="poll-result-subtitle mb-4">
                  Would you rather...
                </h5>
                <div className="poll-result-box active">
                  <small className="poll-box-voted text-uppercase">Your vote</small>
                  <div className="d-flex justify-content-between mt-3">
                    <span className="poll-box-title">
                      Be front end developer
                    </span>
                    <span className="poll-box-percent">60%</span>
                  </div>
                  <ProgressBar now={60} />
                  <small className="w-100 text-center">2 out of 3 votes</small>
                </div>
                <div className="my-4">VS</div>
                <div className="poll-result-box">
                  <div className="d-flex justify-content-between mt-3">
                    <span className="poll-box-title">
                      Be front end developer
                    </span>
                    <span className="poll-box-percent">40%</span>
                  </div>
                  <ProgressBar now={40} />
                  <small className="w-100 text-center">2 out of 3 votes</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PollResult;
