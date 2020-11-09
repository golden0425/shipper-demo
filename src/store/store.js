import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as home from './home/reducer'
import * as user from './user/reducer'
import * as common from './common/reducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({ ...home, ...user, ...common }),
  applyMiddleware(thunk)
)

export default store
