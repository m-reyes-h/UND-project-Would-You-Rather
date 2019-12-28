import { _saveQuestion } from "../utils/_DATA";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

/**
 * receiveQuestions
 * receive questions when the initial data is loaded from the API
 * fill the questions store
 *
 * @param {array of objects} questions
 * @return Redux action
 */
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


//-----------------------------------------------------------------------------------------


/**
 * handleSaveQuestion
 * save question in the API
 * add the new question to the store
 *
 * @param {string} optionOneText
 * @param {string} optionTwoText
 * @return {redux thunk}
 */
export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUserd } = getState();

    // loading

    return _saveQuestion({ optionOneText, optionTwoText, authUserd })
      .then(question => {
        dispatch(saveQuestion(question));
      })
      .then(() => {
        //loading
      })
      .catch(error => {
        // loading
        console.log("There was an error adding the question", error);
      });
  };
}
