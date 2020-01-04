export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_ANSWER_QUESTION = "USER_ANSWER_QUESTION";
export const ADD_USER_QUESTION = "SAVE_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addUserAnswer(authedUser, qid, answer) {
  return {
    type: USER_ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function addUserQuestion(authedUser, qid) {
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    qid
  };
}
