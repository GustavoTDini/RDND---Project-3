import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData, saveQuestion, saveQuestionAnswer , deleteQuestionAnswer} from '../Helpers/HelperFunctions'
import { receiveUsers, addQuestionToUser, addAnswerToUser, removeUserAnswers } from './users'
import { receiveQuestions, addQuestion, addQuestionAnswer, removeQuestionAnswer } from './questions'
import { setAuthedUser } from './authedUser'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(null, null))
        dispatch(hideLoading())
      })
  }
}

/* This Action includes changing data in user and question, as os is in the shared actions*/
export function handleAddQuestionAndUser(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOne,
      optionTwo,
      authedUser
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addQuestionToUser(question))
        dispatch(hideLoading())
      })
  }
}

/* This Action includes changing data in user and question, as os is in the shared actions*/
export function handleAddAnswerToQuestion(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      questionId,
      answer,
    })
      .then(() => {
        dispatch(addAnswerToUser(questionId, authedUser, answer))
        dispatch(addQuestionAnswer(questionId, authedUser, answer))
        dispatch(hideLoading())
      })
  }
}

/* This Action includes changing data in user and question, as os is in the shared actions*/
export function handleDeleteAnswerToQuestion (questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return deleteQuestionAnswer({
      authedUser,
      questionId,
      answer,
    })
    .then(() =>{
      dispatch(removeUserAnswers(questionId, authedUser, answer))
      dispatch(removeQuestionAnswer(questionId, authedUser, answer))
      dispatch(hideLoading())
    })
  }
}