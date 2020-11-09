import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './index.scss'

export const CodeLogin = ({ history }) => {
  const [phone, setPhone] = useState(
    history.location.phone || sessionStorage.getItem('phone')
  )
  const [inputIndex, setInputIndex] = useState('')
  const [codeNumber, setCodeNumber] = useState([])

  useEffect(() => {
    let inputs = Array.from(document.getElementsByTagName('input'))

    inputs.forEach((item, index) => {
      item.addEventListener('keyup', e => {
        let k = e.keyCode || e.which
        if (k == 8) {
          if (inputIndex > 0) {
            const currIndex = inputIndex - 1
            setInputIndex(currIndex)
            let newCodeNumber = codeNumber.splice(currIndex, 1)
            setCodeNumber(newCodeNumber)
          }
        }
      })
    })
  }, [codeNumber, inputIndex])

  const getCurInputItem = value => {
    setInputIndex(value)
  }

  const onChange = value => {
    console.log(value)
  }

  return (
    <div className={styles.contentBox}>
      <div className={styles.loginCodeTitle}>验证手机号</div>
      <div className={styles.codeTips}>
        请输入发送至
        <b> {phone} </b>
        的6位验证码，有效期十分钟。如未收到，请尝试重新获取验证码。
      </div>

      <div className={styles.inputBox}>
        <input
          onChange={onChange}
          onFocus={() => {
            getCurInputItem(0)
          }}
          className={`${styles.inputItem} ${
            inputIndex === 0 ? styles.action : ''
          }`}
          type="text"
        />
        <input
          onFocus={() => {
            getCurInputItem(1)
          }}
          className={`${styles.inputItem} ${
            inputIndex === 1 ? styles.action : ''
          }`}
          type="text"
        />
        <input
          onFocus={() => {
            getCurInputItem(2)
          }}
          className={`${styles.inputItem}  ${
            inputIndex === 2 ? styles.action : ''
          }`}
          type="text"
        />
        <div>-</div>
        <input
          onFocus={() => {
            getCurInputItem(3)
          }}
          className={`${styles.inputItem}  ${
            inputIndex === 3 ? styles.action : ''
          }`}
          type="text"
        />
        <input
          onFocus={() => {
            getCurInputItem(4)
          }}
          className={`${styles.inputItem}  ${
            inputIndex === 4 ? styles.action : ''
          }`}
          type="text"
        />
        <input
          onFocus={() => {
            getCurInputItem(5)
          }}
          className={`${styles.inputItem}  ${
            inputIndex === 5 ? styles.action : ''
          }`}
          type="text"
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CodeLogin)
