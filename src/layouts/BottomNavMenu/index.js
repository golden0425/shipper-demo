import React, { useState, useEffect } from 'react'
import { TabBar } from 'antd-mobile'
import { navMenuList } from './navMenuList'
import './index.scss'

import { useHistory } from 'react-router'

const BottomNavMenu = () => {
  let history = useHistory()
  const [fullScreen, setFullScreen] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [selectedTab, setSelectedTab] = useState('Home')
  const [dot, setDot] = useState(false)

  useEffect(() => {}, [])

  const navigetaTo = path => {
    // history.push('/about')

    console.log(history) // 为什么显示undefined

    window.location.hash = path
  }

  return (
    <div
      style={
        fullScreen
          ? { position: 'fixed', height: '100%', width: '100%', top: 0 }
          : { height: 400 }
      }
    >
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
    </div>
  )
}

export default React.memo(BottomNavMenu)
