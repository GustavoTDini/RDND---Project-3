import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER , ADD_USER, REMOVE_ANSWER_FROM_USER} from '../Helpers/Constants'
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveUser } from '../Helpers/HelperFunctions'

export function receiveUsers (users){
  return{
    type: RECEIVE_USERS,
    users,
  }
}

export function addNewUser (newUser){
  return{
    type: ADD_USER,
    newUser,
  }
}

export function handleAddNewUser (id, name, password, avatarURL) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveUser({
      id, 
      name, 
      password, 
      avatarURL
    })
    .then((user) =>{
      dispatch(addNewUser(user))
      dispatch(hideLoading())
    })
  }
}

export function addQuestionToUser (question){
  return{
    type: ADD_QUESTION_TO_USER,
    question,
  }
}

export function addAnswerToUser (questionId, authedUser, answer){
  return{
    type: ADD_ANSWER_TO_USER,
    questionId,
    authedUser,
    answer
  }
}

export function removeUserAnswers (questionId, authedUser, answer){
  return{
    type: REMOVE_ANSWER_FROM_USER,
    questionId,
    authedUser,
    answer
  }
}