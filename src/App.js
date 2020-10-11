import React, { Fragment } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import RouterConfig from '@/router/RouterConfig'

function RouteComponent() {
  return (
    <Fragment>
      <HashRouter>
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
      </HashRouter>
    </Fragment>
  )
}

export default RouteComponent
