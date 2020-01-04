import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "./Header";
import { handleSaveQuestionAnswer } from "../actions/shared";
import { withRouter } from "react-router-dom";

class QuestionForm extends Component {
  state = { option: null };

  handleChange = event => {
    this.setState({ option: event.target.id });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { authedUser, question, dispatch } = this.props;
    dispatch(
      handleSaveQuestionAnswer(authedUser, question.id, this.state.option)
    );
  };

  render() {
    const { users, question } = this.props;

    return (
      <Fragment>
        <Header />
        <Container>
          <Row className="justufy-content-center">
            <Col lg={{ span: 6, offset: 3 }}>
              <div className="questionf-content mt-4 text-center">
                <span
                  className={`poll-avatar ${
                    users[question.author].avatarURL
                  } mb-2`}
                ></span>
                <h4 className="mb-5 p-0 questionf-title">
                  {users[question.author].name} asks
                </h4>
                <Form
                  className="shadow-sm bg-white"
                  onSubmit={this.handleSubmit}
                >
                  <div className="p-4 px-5">
                    <h5 className="questionf-subtitle mb-4">
                      Would you rather...
                    </h5>
                    <label
                      className="question-control-group d-flex align-items-center"
                      htmlFor="optionOne"
                    >
                      <input
                        id="optionOne"
                        name="question"
                        type="radio"
                        onChange={this.handleChange}
                      />
                      <span className="question-control-checkmark mx-3"></span>
                      <span className="question-control-text">
                        {question.optionOne.text}
                      </span>
                      <span className="question-control-border"></span>
                    </label>
                    <div className="my-4">OR</div>
                    <label
                      className="question-control-group d-flex align-items-center"
                      htmlFor="optionTwo"
                    >
                      <input
                        id="optionTwo"
                        name="question"
                        type="radio"
                        onChange={this.handleChange}
                      />
                      <span className="question-control-checkmark mx-3"></span>
                      <span className="question-control-text">
                        {question.optionTwo.text}
                      </span>
                      <span className="question-control-border"></span>
                    </label>
                  </div>
                  <Button
                    disabled={this.state.option ? false : true}
                    type="submit"
                    className="flat-button w-100"
                  >
                    Submit Question
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(connect()(QuestionForm));
