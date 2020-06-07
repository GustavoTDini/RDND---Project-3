import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER, REMOVE_QUESTION_ANSWER } from '../Helpers/Constants'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

      case ADD_QUESTION :
        const { question } = action
        return {
          ...state,
          [question.id]: question,
        }

        case ADD_QUESTION_ANSWER :
          const { questionId, user, answer } = action
          return {
            ...state,
            [questionId]: {
              ...state[questionId],
              [answer]:{
              ...state[questionId][answer],
              votes: state[questionId][answer].votes.concat([user])
            }
          }
        }

        case REMOVE_QUESTION_ANSWER :
          return {
            ...state,
            [action.questionId]: {
              ...state[action.questionId],
              [action.answer]:{
              ...state[action.questionId][action.answer],
              votes: state[action.questionId][action.answer].votes.filter((user) => user !== action.user)
            }
          }
        }

      default :
      return state
  }
}