import { RECEIVE_QUESTIONS } from '../Helpers/Constants'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      default :
      return state
  }
}