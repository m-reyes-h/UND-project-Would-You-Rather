import { _saveQuestion } from "../utils/_DATA";
import {showLoading, hideLoading} from 'react-redux-loading-bar'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function saveQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUserd } = getState();

    dispatch(showLoading());

    return _saveQuestion({ optionOneText, optionTwoText, authUserd })
      .then(question => {
        dispatch(saveQuestion(question));
      })
      .then(() => {
        dispatch(hideLoading())
      })
      .catch(error => {
        dispatch(hideLoading());
        console.log("There was an error adding the question", error);
      });
  };
}
