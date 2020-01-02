import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PollResult from "../components/PollResult";
import QuestionForm from "../components/QuestionForm";

const PollDetails = props => {
  const { users, authedUser, questions, match } = props;
  const question = questions[match.params.question_id];

  const isPollResult =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  return isPollResult ? (
    <PollResult authedUser={authedUser} users={users} question={question} />
  ) : (
    <QuestionForm authedUser={authedUser} users={users} question={question} />
  );
};

function mapStateToProps({ authedUser, users, questions }) {
  return {
    questions,
    authedUser,
    users
  };
}

export default withRouter(connect(mapStateToProps)(PollDetails));
