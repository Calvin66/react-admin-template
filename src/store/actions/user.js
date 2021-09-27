/*
 * @Descripttion:用户信息
 * @Author: Calvin
 * @Date: 2021-09-13 16:17:14
 */

import { setToken, removeToken } from '@/utils/auth';
import { recursRouter } from '@/utils/permission';
import { reqLogin, reqLogout } from '@/api/login';
import { reqRoleMenuList } from '@/api/user';
import routeList from '@/router/routeList';
import * as actionTypes from '../action-types';

export const login = (username, password) => (dispatch) => new Promise((resolve, reject) => {
  reqLogin({ username, password }).then((res) => {
    const { data } = res;
    if (data.isSuccess) {
      const { token } = data;
      dispatch({
        type: actionTypes.USER_SET_USER_TOKEN,
        token,
      });
      setToken(token);
      resolve(data);
    } else {
      reject(data);
    }
  });
});

export const logout = () => (dispatch) => new Promise((resolve, reject) => {
  reqLogout().then((res) => {
    const { data } = res;
    if (data.isSuccess) {
      removeToken();
      dispatch({
        type: actionTypes.USER_REMOVE_USER_TOKEN,
      });
      resolve(data);
    } else {
      reject(data);
    }
  });
});

export const getRoleMenuList = () => (dispatch) => new Promise((resolve, reject) => {
  setTimeout(() => {
    reqRoleMenuList().then((res) => {
      const { data } = res;
      if (data.isSuccess) {
        const { list } = data;
        const permissionRouteList = recursRouter(routeList, list);
        dispatch({
          type: actionTypes.SET_PERMISSION_LIST,
          list: permissionRouteList,
        });
        resolve();
      } else {
        reject();
      }
    });
  }, 1000);
});
