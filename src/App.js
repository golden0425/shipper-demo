import React, { Fragment } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import RouterConfig from '@/router/RouterConfig'

import { Provider } from 'react-redux'
import store from './store/store.js'

import TopNavbar from '@/layouts/TopNavbar/index'
import BottomNavMenu from '@/layouts/BottomNavMenu/index'

function RouteComponent(props) {
  return (
    <Fragment>
      <HashRouter>
        <Provider store={store}>
          {/* <TopNavbar /> */}
          <Switch>
            {RouterConfig.map(router => {
              return (
                <Route
                  exact
                  path={router.path}
                  key={router.path}
                  component={router.component}
                />
              )
            })}
            <Redirect to="/"></Redirect>
          </Switch>
          {/* <BottomNavMenu /> */}
        </Provider>
      </HashRouter>
    </Fragment>
  )
}

export default RouteComponent
