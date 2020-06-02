import { RECEIVE_USERS } from '../Helpers/Constants'

export function receiveUsers (users){
  return{
    type: RECEIVE_USERS,
    users,
  }
}