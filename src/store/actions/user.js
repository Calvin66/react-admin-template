/*
 * @Descripttion:用户信息
 * @Author: Calvin
 * @Date: 2021-09-13 16:17:14
 */
import * as actionTypes from '../action-types';

export const setUserToken = (token) => ({
  type: actionTypes.USER_SET_USER_TOKEN,
  token,
});
