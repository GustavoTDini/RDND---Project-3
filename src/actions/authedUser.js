import { SET_AUTHED_USER } from '../Helpers/Constants'

export function setAuthedUser(id , password) {
  return {
    type: SET_AUTHED_USER,
    id: id,
    password: password,
  }
}