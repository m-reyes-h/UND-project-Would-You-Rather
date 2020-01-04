import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import { handleSaveQuestionAnswer } from "../actions/shared";
import { withRouter } from "react-router-dom";
import QuestionForm from '../components/QuestionForm';

class QuestionFormContainer extends Component {

  onSaveQuestion = (option) => {
    const { authedUser, question, dispatch } = this.props;
    dispatch(
      handleSaveQuestionAnswer(authedUser, question.id, option)
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
                <QuestionForm
                  question={question}
                  onSaveQuestion={this.onSaveQuestion}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(connect()(QuestionFormContainer));
