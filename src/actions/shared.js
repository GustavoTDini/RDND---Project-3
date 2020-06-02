import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../Helpers/HelperFunctions'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ users, questions }) =>{
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
      dispatch(setAuthedUser(null, null))
    })
  }
}
