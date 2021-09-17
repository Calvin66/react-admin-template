/*
 * @Descripttion: 封装axios请求
 * @Author: Calvin
 * @Date: 2021-09-17 14:51:19
 */
import axios from 'axios';
import store from '@/store';
import { getToken } from '@/utils/auth';

// 创建一个axios示例
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // api 的 base_url
  timeout: 5000, // request timeout
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (store.getState().user.token) {
      // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
      config.headers.Authorization = getToken();
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(`err${error}`); // for debug
    return Promise.reject(error);
  },
);

export default service;
