import React, { Fragment } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Home'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route name="Home" exact path="/" component={Home}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Home" component={Home}></Route>
          <Redirect to="/Home"></Redirect>
        </Switch>
      </HashRouter>
    </Fragment>
  )
}
export default App
