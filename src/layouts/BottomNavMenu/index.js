import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { navMenuList } from './navMenuList'
import { connect } from 'react-redux'

import './index.scss'

export default class BottomNavMenu extends Component {
  state = {
    fullScreen: true,
    hidden: false,
    selectedTab: 'Home',
    dot: false
  }

  setSelectedTab = key => {
    this.setState({ selectedTab: key })
  }

  navigetaTo = () => {
    console.log(this)
  }

  render() {
    return (
      <nav
        style={
          this.state.fullScreen
            ? {
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
              }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.hidden}
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
                selected={this.state.selectedTab === item.key}
                onPress={() => {
                  this.setSelectedTab(item.key)
                  this.navigetaTo(item.toPage)
                }}
              ></TabBar.Item>
            )
          })}
        </TabBar>
      </nav>
    )
  }
}

// const BottomNavMenu = () => {
//   const [fullScreen, setFullScreen] = useState(true)
//   const [hidden, setHidden] = useState(false)
//   const [selectedTab, setSelectedTab] = useState('Home')
//   const [dot, setDot] = useState(false)
//   // useEffect(() => {
//   // }, [history])

//   const navigetaTo = path => {
//     // history.push('/about')
//     window.location.hash = path
//   }

//   return (
//     <nav
//       style={
//         fullScreen
//           ? { position: 'fixed', height: '100%', width: '100%', top: 0 }
//           : { height: 400 }
//       }
//     >
//       <TabBar
//         unselectedTintColor="#949494"
//         tintColor="#33A3F4"
//         barTintColor="white"
//         hidden={hidden}
//       >
//         {navMenuList.map(item => {
//           return (
//             <TabBar.Item
//               title={item.title}
//               key={item.key}
//               icon={
//                 <div
//                   style={{
//                     width: '22px',
//                     height: '22px',
//                     background: `url(${item.icon}) center center /  21px 21px no-repeat`
//                   }}
//                 />
//               }
//               selectedIcon={
//                 <div
//                   style={{
//                     width: '22px',
//                     height: '22px',
//                     background: `url(${item.selectedIcon}) center center /  21px 21px no-repeat`
//                   }}
//                 />
//               }
//               selected={selectedTab === item.key}
//               onPress={() => {
//                 setSelectedTab(item.key)
//                 navigetaTo(item.toPage)
//               }}
//             ></TabBar.Item>
//           )
//         })}
//       </TabBar>
//     </nav>
//   )
// }
// const mapStateToProps = (state, props) => ({ ...state.home })
// export default connect(mapStateToProps)(React.memo(BottomNavMenu))
