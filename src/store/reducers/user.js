/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-13 17:28:45
 */

import * as types from '../action-types';

const initUserInfo = {
  token: '',
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
