/*
 * @Descripttion:用户信息
 * @Author: Calvin
 * @Date: 2021-09-13 16:17:14
 */

import { setToken, removeToken } from '@/utils/auth';
import * as actionTypes from '../action-types';

export const login = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          isSuccess: true,
          message: '登录成功',
          token: '123',
          userIfon: {
            username: 'admin',
            role: ['admin'],
          },
        };
        const { token } = data;
        dispatch({
          type: actionTypes.USER_SET_USER_TOKEN,
          token,
        });
        setToken(token);
        resolve(data);
      }, 500);
    });
  };
};

export const logout = () => (dispatch) => {
  removeToken();
  dispatch({
    type: actionTypes.USER_REMOVE_USER_TOKEN,
  });
};
