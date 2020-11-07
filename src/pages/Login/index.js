import React, { useState } from 'react'
import { List, InputItem } from 'antd-mobile'
import styles from './index.scss'

const Login = () => {
  const [hasError, setHasError] = useState(false)
  const [value, setValue] = useState('')

  const onErrorClick = () => {
    if (hasError) {
      // Toast.info('手机号格式不正确')
    }
  }

  const onChange = value => {
    console.log(value)
    if (value.replace(/\s/g, '').length < 11) {
      setHasError(true)
    } else {
      setHasError(false)
    }
    setValue(value)
  }

  return (
    <div className={styles.contentBox}>
      <div className={styles.loginTitle}>欢迎登录快运吧</div>
      <List className={styles.form}>
        <InputItem
          className={styles.inputItem}
          type="phone"
          placeholder="请输入手机号"
          error={hasError}
          onErrorClick={onErrorClick}
          onChange={onChange}
          value={value}
          clear
        >
        </InputItem>
      </List>
    </div>
  )
}

export default Login
