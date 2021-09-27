/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-17 14:53:47
 */
import request from '@/utils/request';

export function postLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data,
  });
}

export function postLogout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data,
  });
}
