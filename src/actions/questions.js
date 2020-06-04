import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../Helpers/Constants'

export function receiveQuestions (questions){
  return{
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}