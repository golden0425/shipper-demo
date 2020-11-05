import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as home from './home/reducer'
import * as production from './production/reducer'
import * as common from './common/reducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({ ...home, ...production, ...common }),
  applyMiddleware(thunk)
)

export default store
