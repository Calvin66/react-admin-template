/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-10 15:08:35
 */

// 组件动态加载
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Home = Loadable({ loader: () => import(/* webpackChunkName:'Home' */'@/views/Home'), loading: Loading });
const UserManage = Loadable({ loader: () => import(/* webpackChunkName:'UserManage' */'@/views/UserManage'), loading: Loading });
export default [
  { path: '/home', component: Home },
  { path: '/userManage', component: UserManage },
];
