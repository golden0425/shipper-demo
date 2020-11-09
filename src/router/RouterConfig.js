import asyncComponent from '@/utils/asyncComponent'

let RouterConfig = [
  {
    path: '/Login',
    meta: 'Login',
    name: '',
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'Login' */ '@/pages/Login')
    )
  },
  {
    path: '/',
    meta: 'Home',
    name: '首页',
    role: [], //  适用权限
    component: asyncComponent(() => import('@/pages/Home'))
  },

  {
    path: '/CodeLogin',
    meta: 'CodeLogin',
    name: '',
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'CodeLogin' */ '@/pages/Login/CodeLogin')
    )
  },
  {
    path: '/PwdLogin',
    meta: 'PwdLogin',
    name: '',
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'PwdLogin' */ '@/pages/Login/PwdLogin')
    )
  },
  {
    path: '/Order',
    meta: 'Order',
    name: '订单',
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'Order' */ '@/pages/Order')
    )
  },
  {
    path: '/My',
    meta: 'My',
    name: '我的',
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'My' */ '@/pages/My')
    )
  }
]
export default RouterConfig
