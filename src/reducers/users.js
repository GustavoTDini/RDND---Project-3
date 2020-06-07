import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER, ADD_USER, REMOVE_ANSWER_FROM_USER } from '../Helpers/Constants'
import { removeItem } from '../Helpers/HelperFunctions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_USER:
      const { newUser } = action
      return {
        ...state,
        [newUser.id]: newUser,
      }
    case ADD_QUESTION_TO_USER:
      const { question } = action
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
    case ADD_ANSWER_TO_USER:
      const { questionId, authedUser, answer } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer
          }
        }
      }
    case REMOVE_ANSWER_FROM_USER:
      let newAnswersList = removeItem(action.questionId , state[action.authedUser].answers)
      console.log(newAnswersList)
      console.log(action.questionId)
      console.log(state[action.authedUser].answers)
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: newAnswersList,
        }
      }
    default:
      return state
  }
}