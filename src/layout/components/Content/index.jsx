/*
 * @Descripttion: 主体内容组件
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-07 21:25:47
 */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;
const LayoutContent = (props) => {
  const { location, permissionList } = props;
  return (
    <Content>
      {/* 内容主体 */}
      <Switch location={location}>
        <Redirect exact from="/" to="/home" />
        {permissionList.map((route) => (
          <Route
            component={route.component}
            key={route.path}
            path={route.path} />
        ))}
        <Redirect to="/error/404" />
      </Switch>
    </Content>
  );
};
const mapStateToProps = (state) => ({
  permissionList: state.user.permissionList,
});
export default connect(mapStateToProps)(withRouter(LayoutContent));
