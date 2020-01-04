import {
  RECEIVE_USERS,
  USER_ANSWER_QUESTION,
  ADD_USER_QUESTION,
  ADD_USER
} from "../actions/users";

export default function users(state = {}, action) {
  const { qid, authedUser, answer } = action;

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;

    case USER_ANSWER_QUESTION:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };

    case ADD_USER_QUESTION:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: [...state[authedUser].questions, qid]
        }
      };

    case ADD_USER:
      return {
        ...state, [action.user.id]: action.user
      }

    default:
      return state;
  }
}
