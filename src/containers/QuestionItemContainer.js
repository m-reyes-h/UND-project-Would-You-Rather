import React from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import QuestionItem from "../components/QuestionItem";

const QuestionItemContainer = ({ authedUser, question, users }) => {
  return (
    <QuestionItem authedUser={authedUser} question={question} users={users} />
  );
};

function mapStateToProps({ authedUser, questions, users }, { questionId }) {
  return {
    authedUser,
    question: questions[questionId],
    users
  };
}

export default withRouter(connect(mapStateToProps)(QuestionItemContainer));
