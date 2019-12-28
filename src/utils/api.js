import { _getQuestions, _getUsers } from "./_DATA";

export function getInitialData() {
  return new Promise.all([_getQuestions, _getUsers]).then(
    ([questions, users]) => ({
      questions,
      users
    })
  );
}
