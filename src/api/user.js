/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-13 16:20:20
 */

import request from '@/utils/request';

export function reqUserInfo(data) {
  return request({
    url: '/userInfo',
    method: 'post',
    data,
  });
}

export function getUsers() {
  return request({
    url: '/user/list',
    method: 'get',
  });
}

export function deleteUser(data) {
  return request({
    url: '/user/delete',
    method: 'post',
    data,
  });
}
