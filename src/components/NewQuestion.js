import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "./Header";

const NewQuestion = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="newq-content mt-5 text-center">
              <h3 className="mb-5 p-0 newq-title">Create New Question</h3>
              <Form className="shadow-sm bg-white">
                <div className="p-4 px-5">
                  <h5 className="newq-subtitle mb-4">Would you rather...</h5>
                  <Form.Control
                    className="question-control"
                    name="question1"
                    type="text"
                    placeholder="Question 1"
                  />
                  <div className="my-4">OR</div>
                  <Form.Control
                    className="question-control"
                    name="question2"
                    type="text"
                    placeholder="Question 2"
                  />
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

export default NewQuestion;
