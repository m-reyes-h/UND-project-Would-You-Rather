import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import QuestionResult from "../components/QuestionResult";
import QuestionForm from "../components/QuestionForm";
import NoMatch from '../components/NoMatch'

class QuestionContainer extends Component {
  componentDidMount() {}
  render() {
    const { users, authedUser, match, questions } = this.props;
    const qid = match.params.question_id;
    const question = questions[qid];

    if (!question) {
      return <Redirect to="/404" Component={NoMatch} />;
    }

    const isPollResult =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser);

    return isPollResult ? (
      <QuestionResult
        authedUser={authedUser}
        users={users}
        question={question}
      />
    ) : (
      <QuestionForm authedUser={authedUser} users={users} question={question} />
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    questions,
    authedUser,
    users
  };
}

export default withRouter(connect(mapStateToProps)(QuestionContainer));
