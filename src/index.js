import React from 'react'
import ReactDOM from 'react-dom'
import App from './router'
import * as serviceWorker from './serviceWorker'
import './assets/style/global.scss' /*  + 引入全局公用样式global.scss文件 */

import TopNavbar from './layouts/TopNavbar'

ReactDOM.render(
  <React.StrictMode>
    <TopNavbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
