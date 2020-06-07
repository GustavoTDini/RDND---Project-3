import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER, REMOVE_QUESTION_ANSWER} from '../Helpers/Constants'

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

export function addQuestionAnswer (questionId, user, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    questionId,
    user,
    answer
  }
}

export function removeQuestionAnswer (questionId, user, answer) {
  return {
    type: REMOVE_QUESTION_ANSWER,
    questionId,
    user,
    answer
  }
}