/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-01-14 11:48:40
 */
import { localstorageSet, localstorageGet, localstorageRemove } from './localstorage';

const TokenKey = 'Token';

export function getToken() {
  return localstorageGet(TokenKey);
}

export function setToken(token) {
  return localstorageSet(TokenKey, token);
}

export function removeToken() {
  return localstorageRemove(TokenKey);
}
