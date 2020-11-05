import React, { Fragment, useEffect, useCallback } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import RouterConfig from '@/router/RouterConfig'
import { connect } from 'react-redux'
import TopNavbar from '@/layouts/TopNavbar'
import BottomNavMenu from '@/layouts/BottomNavMenu'

import { setCurrRoutePath } from '@/store/common/action.js'

let RouteComponent = ({ props, setCurrRoutePath, currRoutePath }) => {
  const onHashChange = useCallback(() => {
    let currPath = window.location.hash.split('/')[1]
    if (currPath) {
      setCurrRoutePath(currPath)
    } else {
      setCurrRoutePath('Home')
    }
  }, [setCurrRoutePath])

  useEffect(() => {
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
  }, [onHashChange, setCurrRoutePath])

  return (
    <Fragment>
      <HashRouter>
        <TopNavbar />
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
        <BottomNavMenu />
      </HashRouter>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrRoutePath(path) {
      dispatch(setCurrRoutePath(path))
    }
  }
}
const mapStateToProps = state => ({
  currRoutePath: state.routePathData.currRoutePath
})

export default connect(mapStateToProps, mapDispatchToProps)(RouteComponent)
