import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PollResult from "../components/PollResult";
import QuestionForm from "../components/QuestionForm";

const PollDetails = props => {
  const { isPollResult, question } = props.location.state;
  const { users, authedUser } = props;

  return isPollResult ? (
    <PollResult authedUser={authedUser} users={users} question={question} />
  ) : (
    <QuestionForm />
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default withRouter(connect(mapStateToProps)(PollDetails));
