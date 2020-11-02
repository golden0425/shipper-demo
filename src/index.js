import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import * as serviceWorker from '@/serviceWorker'



// import LifeCircleContainer from '@/pages/demo'

import FastClick from 'fastclick'
import { Provider } from 'react-redux'
import store from '@/store/store'
import './utils/setRem'
import '@/assets/style/global.scss' /*  + 引入全局公用样式global.scss文件 */

FastClick.attach(document.body)

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      {/* <TopNavbar /> */}
      <Component />
      {/* <BottomNavMenu  /> */}
    </Provider>,
    document.getElementById('root')
  )
}

render(App)


// ReactDOM.render(<LifeCircleContainer />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
