/*
 * @Descripttion: 不需要权限控制的静态路由
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-27 20:03:43
 */

import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Error404 = Loadable({ loader: () => import(/* webpackChunkName:'Error404' */'@/views/Error/404'), loading: Loading });
export default [
  { path: '/error/404', component: Error404, hidden: true },
];
