import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class NewQuestionForm extends Component {
  state = { questionOne: "", questionTwo: "" };

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { questionOne, questionTwo } = this.state;
    this.props.onSubmit(questionOne, questionTwo);
  };

  render() {
    const { questionOne, questionTwo } = this.state;
    const hasQuestions =
      questionOne.trim().length > 0 && questionTwo.trim().length > 0;

    return (
      <Form
        autocomplete="off"
        className="shadow-sm bg-white"
        onSubmit={this.handleOnSubmit}
      >
        {/* this input is to prevent autocompleted in the next inputs */}
        <input
          autocomplete="false"
          name="hidden"
          type="text"
          style={{ display: "none" }}
        ></input>

        <div className="p-4 px-5">
          <h5 className="newq-subtitle mb-4">Would you rather...</h5>
          <Form.Control
            autoFocus
            className="question-control"
            name="questionOne"
            type="text"
            placeholder="Question one"
            onChange={this.handleOnChange}
          />
          <div className="my-4">OR</div>
          <Form.Control
            className="question-control"
            name="questionTwo"
            type="text"
            placeholder="Question two"
            onChange={this.handleOnChange}
          />
        </div>
        <Button
          type="submit"
          className="flat-button w-100"
          disabled={!hasQuestions}
        >
          Submit Question
        </Button>
      </Form>
    );
  }
}

export default NewQuestionForm;
