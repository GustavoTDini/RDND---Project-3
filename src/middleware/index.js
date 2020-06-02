import thunk from 'redux-thunk'
import logger from './logger'
import loginChecker from './loginChecker'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  loginChecker,
  logger,
  
)