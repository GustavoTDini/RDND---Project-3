import { SET_AUTHED_USER, ADD_USER } from '../Helpers/Constants'

const loginChecker = (store) => (next) => (action) => {
  if (action.type === SET_AUTHED_USER) {
    if (action.id === null) {
      return next(action)
    }
    if (action.id === '') {
      return store.getState()
    } else if
      (store.getState().users.hasOwnProperty(action.id)) {
      if (store.getState().users[action.id].password === action.password) {
        return next(action)
      } else {
        return alert("Wrong Password!")
      }
    } else {
      return alert("User not Found!")
    }
  }
  if (action.type === ADD_USER){
    if (store.getState().users.hasOwnProperty(action.newUser.id)) {
      return alert("Login already in use!")
    } else if (store.getState().users.hasOwnProperty(action.newUser.name)) {
      return alert("Name already in use!")
    }
  }



  return next(action)
}

export default loginChecker