/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-17 14:41:28
 */

import Mock from 'mockjs';
import loginAPI from './login';

// 登录与用户相关
Mock.mock(/\/login/, 'post', loginAPI.login);
Mock.mock(/\/logout/, 'post', loginAPI.logout);
export default Mock;
