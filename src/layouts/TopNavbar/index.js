import React, { useEffect } from 'react'
import { NavBar, Icon } from 'antd-mobile'

const TopNavbar = () => {
  useEffect(() => {})

  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        NavBar
      </NavBar>
    </div>
  )
}

export default React.memo(TopNavbar)
