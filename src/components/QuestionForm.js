import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class QuestionForm extends Component {
  state = { option: null };

  handleChange = event => {
    this.setState({ option: event.target.id });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSaveQuestion(this.state.option);
  };

  render() {
    const { question } = this.props;

    return (
      <Form className="shadow-sm bg-white" onSubmit={this.handleSubmit}>
        <div className="p-4 px-5">
          <h5 className="questionf-subtitle mb-4">Would you rather...</h5>
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
    );
  }
}

export default QuestionForm;
