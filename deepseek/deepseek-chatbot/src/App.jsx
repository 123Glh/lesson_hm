import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
const chatApi = async (mesage) => {
  // 请求行 method+url+http 版本
  // 5173 -> 3000 跨域? 同源策略 cors 服务器端, jsonp?
  const respons = await axios.post('http://localhost:3000/chatai',
    // 请求体 json
    mesage, {
    // 请求头
    headers: {
      'Content-Type': 'application/json'
    }
  }
  )
  return respons.data;
}
// react 内置 hooks 函数 副作用
const App = () => {
  // useEffect 不能直接使用 async await 函数
  useEffect(() => {
    // 副作用 mounted updated unmounted......
    // await chatApi()
    const callChatAPI = async () => {
      await chatApi({ message: '你好' })
    }
    callChatAPI()
  })
  return (
    <div>
      App
    </div>
  )
}
export default App