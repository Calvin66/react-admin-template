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
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case types.USER_REMOVE_USER_TOKEN:
      return {
        ...state,
        token: null,
      };
    case types.SET_PERMISSION_LIST:
      return {
        ...state,
        permissionList: action.list,
      };
    default:
      return state;
  }
}
