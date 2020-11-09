import React, { useEffect, useState } from 'react'
import { TabBar } from 'antd-mobile'
import { navMenuList } from './navMenuList'
import { connect } from 'react-redux'
import styles from './index.scss'

const BottomNavMenu = ({ state, dispatch }) => {
  let currRoutePath = state.routePathData.currRoutePath
  const [hidden, setHidden] = useState(true)
  const [selectedTab, setSelectedTab] = useState('Login')
  let blackList = ['Login', 'PwdLogin', 'CodeLogin']

  useEffect(() => {
    setSelectedTab(currRoutePath)
    if (blackList.includes(currRoutePath)) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }, [blackList, currRoutePath])

  const navigetaTo = path => {
    window.location.hash = path
  }

  return (
    <nav className={styles.navBox}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={hidden}
      >
        {navMenuList.map(item => {
          return (
            <TabBar.Item
              title={item.title}
              key={item.key}
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.icon}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.selectedIcon}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selected={selectedTab === item.key}
              onPress={() => {
                setSelectedTab(item.key)
                navigetaTo(item.toPage)
              }}
            ></TabBar.Item>
          )
        })}
      </TabBar>
    </nav>
  )
}
const mapStateToProps = state => ({ state })
export default connect(mapStateToProps)(BottomNavMenu)
