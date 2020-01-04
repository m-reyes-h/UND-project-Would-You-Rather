import { showLoading, hideLoading } from "react-redux-loading-bar";
import { receiveQuestions, addQuestionAnswer, addQuestion } from "./questions";
import { receiveUsers, addUserAnswer, addUserQuestion, addUser } from "./users";
import {
  getInitialData,
  saveQuestion,
  saveQuestionAnswerAPI,
  saveUser
} from "../utils/api";

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

    return saveQuestionAnswerAPI({ authedUser, qid, answer })
      .then(response => {
        dispatch(addQuestionAnswer(authedUser, qid, answer));
        dispatch(addUserAnswer(authedUser, qid, answer));
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

    return saveQuestion({ optionOneText, optionTwoText, author: authedUser })
      .then(question => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question.author, question.id));
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

export function handleSaveUser(firstName, lastName, avatarURL) {
  return dispatch => {
    dispatch(showLoading());

    return saveUser({ firstName, lastName, avatarURL })
      .then(user => {
        dispatch(addUser(user));
      })
      .then(() => {
        dispatch(hideLoading());
      })
      .catch(error => {
        dispatch(hideLoading());
        console.log("There was an error adding a new user", error);
      });
  };
}
