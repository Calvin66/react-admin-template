/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-13 17:28:45
 */

import { getToken } from '@/utils/auth';
import * as types from '../action-types';

const initUserInfo = {
  token: getToken(),
  permissionList: [],
  menusList: [],
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case types.REMOVE_USER_TOKEN:
      return {
        ...state,
        token: null,
      };
    case types.SET_PERMISSION_LIST:
      return {
        ...state,
        permissionList: action.permissionList,
      };
    case types.SET_MENUS_LIST:
      return {
        ...state,
        menusList: action.menusList,
      };
    default:
      return state;
  }
}
