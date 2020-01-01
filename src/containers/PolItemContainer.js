import React from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import PollItem from '../components/PollItem'

const PollItemContainer = ({ authedUser, question, users }) => {
  return (
    <PollItem authedUser={authedUser} question={question} users={users} />
  );
};

function mapStateToProps({ authedUser, questions, users }, { questionId }) {
  return {
    authedUser,
    question: questions[questionId],
    users
  };
}

export default withRouter(connect(mapStateToProps)(PollItemContainer));
