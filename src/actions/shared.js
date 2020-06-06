import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData , saveQuestion, saveQuestionAnswer  } from '../Helpers/HelperFunctions'
import { receiveUsers, addQuestionToUser, addAnswerToUser } from './users'
import { receiveQuestions, addQuestion, addQuestionAnswer } from './questions'
import { setAuthedUser } from './authedUser'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ users, questions }) =>{
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(null, null))
      dispatch(hideLoading())
    })
  }
}

 export function handleAddQuestionAndUser (optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOne,
      optionTwo,
      authedUser
    })
    .then((question) =>{
      dispatch(addQuestion(question))
      dispatch(addQuestionToUser(question))
      dispatch(hideLoading())
    })
  }
}

export function handleAddAnswerToQuestion (questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      questionId,
      answer,
    })
    .then(() =>{
      dispatch(addAnswerToUser(questionId, authedUser, answer))
      dispatch(addQuestionAnswer(questionId, authedUser, answer))
      dispatch(hideLoading())
    })
  }
}