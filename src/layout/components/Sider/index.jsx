/*
 * @Descripttion: 侧边栏组件
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-07 21:25:49
 */

import React from 'react';
import { Layout } from 'antd';
import Menu from './components/SubMenu';

const { Sider } = Layout;
const LayoutSider = () => (
  <Sider>
    <Menu />
  </Sider>
);

export default LayoutSider;
