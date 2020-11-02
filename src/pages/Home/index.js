import React, { useContext, useState, useEffect } from 'react'

// const LogContext = React.createContext();

// function LogProvider({ children }) {
//   const [logs, setLogs] = useState([]);
//   const addLog = (log) => setLogs((prevLogs) => [...prevLogs, log]);
//   return (
//     <LogContext.Provider value={{ logs, addLog }}>
//       {children}
//     </LogContext.Provider>
//   );
// }

// function Logger1() {
//   const { addLog } = useContext(LogContext);
//   console.log('Logger1 render')
//   return (
//     <>
//       <p>一个能发日志的组件1</p>
//       <button onClick={() => addLog("logger1")}>发日志</button>
//     </>
//   );
// }

// function Logger2() {
//   const { addLog } = useContext(LogContext);
//   console.log('Logger2 render')
//   return (
//     <>
//       <p>一个能发日志的组件2</p>
//       <button onClick={() => addLog("logger2")}>发日志</button>
//     </>
//   );
// }

// function LogsPanel() {
//   const { logs } = useContext(LogContext);
//   return logs.map((log, index) => <p key={index}>{log}</p>);
// }

// <LogProvider>
//       {/* 写日志 */}
//       <Logger1 />
//       <Logger2 />
//       {/* 读日志 */}
//       <LogsPanel />
//     </LogProvider>

const Login = () => {
  const [login, setLogin] = useState('1')
  let data = '1|2'

  //  useEffect 第二个参数是依赖参数 如果当前依赖参数改变会触发 upDate
  useEffect(() => {
    // console.log('====================================')
    // console.log('当前用户登录状态=>:', login)
    // console.log('====================================')

    return () => {
      console.log('页面卸载--走了 ---  触发 WillUnmount ')
    }

  }, [login])

  const getLoginType = () => {
    setLogin(data.split('|')[1])
    console.log('====================================')
    console.log('获取当前登录状态=>:', login)
    console.log('获取当前登录状态=>:', data.split('|')[1])
    console.log('====================================')
  }

  return (
    <>
      <p>测试登录demo</p>
      <button onClick={() => getLoginType()}>登录</button>
      <button onClick={() => getLoginType()}>获取登录状态</button>
    </>
  )
}

export default function App() {
  return <Login />
}
