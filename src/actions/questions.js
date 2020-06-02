import { RECEIVE_QUESTIONS } from '../Helpers/Constants'

export function receiveQuestions (questions){
  return{
    type: RECEIVE_QUESTIONS,
    questions,
  }
}