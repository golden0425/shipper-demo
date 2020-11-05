import asyncComponent from '@/utils/asyncComponent'

let RouterConfig = [
  {
    path: '/',
    meta: 'Home',
    name: '首页',
    role: [], //  适用权限
    component: asyncComponent(() => import('@/pages/Home'))
  },
  {
    path: '/Login',
    meta: 'Login',
    name: '登录',
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'home' */ '@/pages/Login')
    )
  },
  {
    path: '/Order',
    meta: 'Order',
    name: '订单',
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'home' */ '@/pages/Order')
    )
  },
  {
    path: '/My',
    meta: 'My',
    name: '我的',
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'home' */ '@/pages/My')
    )
  }
]
export default RouterConfig
