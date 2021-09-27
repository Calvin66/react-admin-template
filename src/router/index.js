/*
 * @Descripttion: 路由
 * @version:
 * @Author: Calvin
 * @Date: 2021-09-07 21:46:27
 */
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoleMenuList } from '@/store/actions/user';
import Layout from '@/layout';
import Login from '@/views/Login';

const Router = (props) => {
  const { token, getRoleMenuList, permissionList } = props;
  // 获取权限菜单
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          path="/"
          render={() => {
            if (!token) {
              return <Redirect to="/login" />;
            }
            if (permissionList.length) {
              return <Layout />;
            }
            getRoleMenuList().then(() => <Layout />);
          }} />
      </Switch>
    </HashRouter>

  );
};
const mapStateToProps = (state) => ({
  token: state.user.token,
  permissionList: state.user.permissionList,
});

export default connect(mapStateToProps, { getRoleMenuList })(Router);
