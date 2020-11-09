import * as user from './action-type'

// 保存用户信息
export const setUserInfo = (value, datatype) => {
  return {
    type: user.SET_USER_INFO,
    value,
    datatype
  }
}

export const clearUserInfo = () => {
  return {
    type: user.CLEAR_USER_INFO
  }
}
