/*
 * @Descripttion: 主体内容组件
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-07 21:25:47
 */

import React from 'react';
import { Redirect, withRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import routeList from '@/config/routeMap';

const { Content } = Layout;
const LayoutContent = () => (

  <Content>
    {/* 内容主体 */}
    <Switch>
      <Redirect exact from="/" to="/home" />
      {routeList.map((route) => (
        <Route
          component={route.component}
          key={route.path}
          path={route.path} />
      ))}
      <Redirect to="/error/404" />
    </Switch>
  </Content>
);

export default withRouter(LayoutContent);
