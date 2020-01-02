import { _saveQuestion } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {} from './users'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestion({ optionOneText, optionTwoText, authedUser })
      .then(question => {
        dispatch(saveQuestion(question));
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

export function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}
