/*
 * @Descripttion: 容器组件
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-07 21:05:07
 */

import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Sider from './components/Sider';
import Content from './components/Content';

const LayoutComponent = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider />
    <Layout>
      <Header />
      <Content />
    </Layout>
  </Layout>
);

export default LayoutComponent;
