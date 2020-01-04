import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer,
  _saveQuestion
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(
    ([questions, users]) => ({
      questions,
      users
    })
  );
}

export function saveQuestion({
  optionOneText,
  optionTwoText,
  author: authedUser
}) {
  return _saveQuestion({ optionOneText, optionTwoText, author: authedUser });
}

export function saveQuestionAnswerAPI({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
