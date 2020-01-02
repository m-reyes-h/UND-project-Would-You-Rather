import { showLoading, hideLoading } from "react-redux-loading-bar";
import {
  receiveQuestions,
  saveQuestionAnswer,
  saveQuestion
} from "./questions";
import { receiveUsers, saveUserAnswer, saveUserQuestion } from "./users";
import { getInitialData } from "../utils/api";
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());

    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      })
      .then(() => {
        dispatch(hideLoading());
      });
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return dispatch => {
    dispatch(showLoading());

    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then(response => {
        dispatch(saveQuestionAnswer(authedUser, qid, answer));
        dispatch(saveUserAnswer(authedUser, qid, answer));
      })
      .then(() => {
        dispatch(hideLoading());
      })
      .catch(error => {
        dispatch(hideLoading());
        console.log("There was an error adding the question answer", error);
      });
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestion({ optionOneText, optionTwoText, author: authedUser })
      .then(question => {
        dispatch(saveQuestion(question));
        dispatch(saveUserQuestion(question.author, question.id));
      })
      .then(() => {
        dispatch(hideLoading());
      })
      .catch(error => {
        dispatch(hideLoading());
        console.log("There was an error adding the question", error);
      });
  };
}
