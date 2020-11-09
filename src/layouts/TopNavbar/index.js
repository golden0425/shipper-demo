import React, { useEffect } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { connect } from 'react-redux'

import styles from './index.scss'

const TopNavbar = ({ currRoutePath, currRouteName, history }) => {
  let whiteList = ['Home', 'Login', 'Order', 'My']
  let iconList = ['Home', 'Login', 'Order', 'My', 'CodeLogin']

  const goBack = () => {
    window.history.back()
  }

  return (
    <>
      <NavBar
        mode="light"
        icon={!whiteList.includes(currRoutePath) ? <Icon type="left" /> : ''}
        onLeftClick={goBack}
        rightContent={
          !iconList.includes(currRoutePath)
            ? [
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />
              ]
            : ''
        }
      >
        {currRouteName}
      </NavBar>
    </>
  )
}

let mapStateToProps = state => ({
  currRoutePath: state.routePathData.currRoutePath,
  currRouteName: state.routePathData.currRouteName
})

export default connect(mapStateToProps)(TopNavbar)
