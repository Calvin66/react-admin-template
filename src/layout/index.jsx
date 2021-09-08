/*
 * @Descripttion: 容器组件
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-07 21:05:07
 */


import React from 'react'
import Header  from './components/Header'
import Sider from './components/Sider'
import Main from './components/Main.jsx'

const Layout = () => {
  return (
    <div>
      <Header />
      <Sider />
      <Main />
    </div>
  )
}

export default Layout