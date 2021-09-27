/*
 * @Descripttion: 路由
 * @version:
 * @Author: Calvin
 * @Date: 2021-09-07 21:46:27
 */
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPermissionList, setMenusList } from '@/store/actions/user';
import { reqRoleMenuList } from '@/api/user';
import constantRoutes from '@/router/constantRoutes';
import asyncRoutes from '@/router/asyncRoutes';
import { recursRoutes, recursMenus } from '@/utils/permission';
import Layout from '@/layout';
import Login from '@/views/Login';

const Router = (props) => {
  const { token, permissionList, setPermissionList, setMenusList } = props;
  // 获取权限菜单
  const getRoleMenuList = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      reqRoleMenuList().then((res) => {
        const { data } = res;
        if (data.isSuccess) {
          const { list: permissionRoutes } = data;
          const permissionRouteList = recursRoutes(permissionRoutes, asyncRoutes, constantRoutes);
          const permissionMenusList = recursMenus(permissionRoutes);
          setPermissionList(permissionRouteList);
          setMenusList(permissionMenusList);
          resolve();
        } else {
          reject();
        }
      });
    }, 1000);
  });
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
const mapDispatchToProps = (dispatch) => ({
  setPermissionList: (permissionList) => dispatch(setPermissionList(permissionList)),
  setMenusList: (menusList) => dispatch(setMenusList(menusList)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Router);
