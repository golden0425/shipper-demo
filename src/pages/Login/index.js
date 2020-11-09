import React, { useState } from 'react'
import { List, InputItem, Toast, Button } from 'antd-mobile'

import { checkPhone } from '@/utils/checkData'
import styles from './index.scss'
import WeChat from '@/assets/icon/login/WeChat.png'

const Login = ({ history }) => {
  const [hasError, setHasError] = useState(false)
  const [phone, setPhone] = useState('')

  // 输入手机号校验
  const onChange = phone => {
    if (!checkPhone(phone.replace(/\s/g, ''))) {
      setHasError(true)
    } else {
      setHasError(false)
    }
    if (!phone) {
      setHasError(false)
    }
    setPhone(phone)
  }
  const getCode = () => {
    if (hasError || !phone) {
      Toast.info('手机号格式不正确')
      return
    }
    let userPhone = phone.replace(/ /g, '')
    sessionStorage.setItem('phone', userPhone)
    history.push({ pathname: '/CodeLogin', phone: userPhone })
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
          onChange={onChange}
          value={phone}
          clear
        ></InputItem>
      </List>

      <Button onClick={getCode} className={styles.getCodeButton} type="primary">
        获取短信验证码
      </Button>

      <div className={styles.slogan}>未注册过的手机号验证后自动注册</div>
      <div className={styles.pwdLogin}>密码登录</div>
      <div className={styles.otherLogin}>第三方登录</div>
      <img alt="WeChat" width="80px" height="80px" src={WeChat} />
      <div className={styles.agreement}>
        登录即代表同意 <span>《隐私政策》</span> 和
        <span>《天地汇平台用户服务协议》</span>
      </div>
    </div>
  )
}

export default Login
