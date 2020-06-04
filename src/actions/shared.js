import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion } from '../Helpers/HelperFunctions'
import { getInitialData } from '../Helpers/HelperFunctions'
import { receiveUsers, addQuestionToUser } from './users'
import { receiveQuestions, addQuestion } from './questions'
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