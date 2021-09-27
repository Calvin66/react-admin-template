/*
 * @Descripttion: 路由
 * @version:
 * @Author: Calvin
 * @Date: 2021-09-07 21:46:27
 */
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRoleMenuList } from '@/store/actions/user';
import { reqRoleMenuList } from '@/api/user';
import { recursRouter } from '@/utils/permission';
import Layout from '@/layout';
import Login from '@/views/Login';
import routeList from './routeList';

const Router = (props) => {
  const { token, permissionList, setRoleMenuList } = props;
  // 获取权限菜单
  if (token) {
    if (!permissionList.length) {
      reqRoleMenuList().then((res) => {
        const { data } = res;
        if (data.isSuccess) {
          const { list } = data;
          const permissionRouteList = recursRouter(routeList, list);
          console.log(permissionRouteList, '打印权限路由');
          setRoleMenuList(permissionRouteList);
        }
      });
    }
  }
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
            return <Layout />;
          }} />
        <Redirect to="/error/404" />
      </Switch>
    </HashRouter>

  );
};
const mapStateToProps = (state) => ({
  token: state.user.token,
  permissionList: state.user.permissionList,
});
const mapDispatchToProps = (dispatch) => ({
  setRoleMenuList: (list) => {
    dispatch(setRoleMenuList(list));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Router);
