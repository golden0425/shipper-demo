import * as common from './action-type'

// 获取当前 页面路径
export const getCurrRoutePath = (value, datatype) => {
  return {
    type: common.GET_CURR_ROUTE_PATH,
    value,
    datatype
  }
}

export const setCurrRoutePath = currRoutePath => {
  return {
    type: common.SET_CURR_ROUTE_PATH,
    currRoutePath
  }
}
