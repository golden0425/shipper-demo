import * as common from './action-type'
import RouterConfig from '@/router/RouterConfig'

let defaultState = {
  currRoutePath: 'Login', //当前地址
  currRouteName: '登录'
}
// 当前路由
export const routePathData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case common.GET_CURR_ROUTE_PATH:
      return { ...state, ...{ [action.datatype]: action.value } }
    case common.SET_CURR_ROUTE_PATH:
      return {
        ...state,
        ...{
          currRoutePath: action.currRoutePath,
          currRouteName: RouterConfig.filter(
            item => item.meta === action.currRoutePath
          )[0].name
        }
      }
    default:
      return state
  }
}
