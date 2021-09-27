/*
 * @Descripttion:用户信息
 * @Author: Calvin
 * @Date: 2021-09-13 16:17:14
 */

import * as actionTypes from '../action-types';

export const setUserToken = (token) => ({
  type: actionTypes.SET_USER_TOKEN,
  token,
});

export const removeUserToken = () => ({
  type: actionTypes.REMOVE_USER_TOKEN,
});

export const setPermissionList = (permissionList) => ({
  type: actionTypes.SET_PERMISSION_LIST,
  permissionList,
});

export const setMenusList = (menusList) => ({
  type: actionTypes.SET_MENUS_LIST,
  menusList,
});
