import * as user from './action-type'

let defaultState = {
  userInfo: {}
}
// 首页表单数据
export const userData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case user.SET_USER_INFO:
      return { ...state, ...{ userInfo: action.value } }
    case user.CLEAR_USER_INFO:
      return { ...state, ...defaultState }
    default:
      return state
  }
}
