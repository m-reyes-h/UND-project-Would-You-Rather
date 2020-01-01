import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../containers/Header";

const QuestionForm = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="questionf-content mt-4 text-center">
              <span className="poll-avatar user1 mb-2"></span>
              <h4 className="mb-5 p-0 questionf-title">Michel Reyes asks</h4>
              <Form className="shadow-sm bg-white">
                <div className="p-4 px-5">
                  <h5 className="questionf-subtitle mb-4">
                    Would you rather...
                  </h5>
                  <label
                    className="question-control-group d-flex align-items-center"
                    htmlFor="question1"
                  >
                    <input id="question1" name="question" type="radio" />
                    <span className="question-control-checkmark mx-3"></span>
                    <span className="question-control-text">
                      Option Two is a large option visible in this component but
                      we can meke it a little big longer. rge option visible in
                      this component but we can meke
                    </span>
                    <span className="question-control-border"></span>
                  </label>
                  <div className="my-4">OR</div>
                  <label
                    className="question-control-group d-flex align-items-center"
                    htmlFor="question2"
                  >
                    <input id="question2" name="question" type="radio" />
                    <span className="question-control-checkmark mx-3"></span>
                    <span className="question-control-text">Option One</span>
                    <span className="question-control-border"></span>
                  </label>
                </div>
                <Button type="submit" className="flat-button w-100">
                  Submit Question
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default QuestionForm;
