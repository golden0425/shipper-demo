import asyncComponent from '@/utils/asyncComponent'

let RouterConfig = [
  {
    path: '/',
    meta: 'Home',
    icon: '', //  所用icon
    role: [], //  适用权限
    component: asyncComponent(() => import('@/pages/Home'))
  },
  {
    path: '/Login',
    meta: 'Login',
    icon: '', //  所用icon
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'home' */ '@/pages/Login')
    )
  },
  {
    path: '/Order',
    meta: 'Order',
    icon: '', //  所用icon
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'home' */ '@/pages/Order')
    )
  },
  {
    path: '/My',
    meta: 'My',
    icon: '', //  所用icon
    role: [], //  适用权限
    component: asyncComponent(() =>
      import(/* webpackChunkName: 'home' */ '@/pages/My')
    )
  }
]
console.log(RouterConfig)

export default RouterConfig
