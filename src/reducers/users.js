import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from '../Helpers/Constants'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_TO_USER :
      const { question } = action
      console.log(question, state)
      console.log(state[question.author].questions)
        return {
          ...state,
          [question.author]: {
            ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
          }
        }
    default :
      return state
  }
}