import { combineReducers } from 'redux'
import users from './user'
import tests from './test'

export default combineReducers({
  users,
  tests
})