/*
 * @Descripttion: 需要权限控制的静态路由
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-27 20:03:43
 */

import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Home = Loadable({ loader: () => import(/* webpackChunkName:'Home' */'@/views/Home'), loading: Loading });
const UserManage = Loadable({ loader: () => import(/* webpackChunkName:'UserManage' */'@/views/UserManage'), loading: Loading });
const Menu1Item1 = Loadable({ loader: () => import(/* webpackChunkName:'Menu1_1' */'@/views/NestedMenu/Menu1/Menu1-1'), loading: Loading });
const Menu1Item2Item1 = Loadable({ loader: () => import(/* webpackChunkName:'Menu1_2_1' */'@/views/NestedMenu/Menu1/Menu1-2/Menu1-2-1'), loading: Loading });
const Menu2 = Loadable({ loader: () => import(/* webpackChunkName:'Menu2' */'@/views/NestedMenu/Menu2'), loading: Loading });
export default [
  { path: '/home', name: '首页', component: Home },
  { path: '/userManage', name: '用户管理', component: UserManage },
  { path: '/nestedMenu/menu1/menu1-1', name: '菜单1-1', component: Menu1Item1 },
  { path: '/nestedMenu/menu1/menu1-2/menu1-2-1', name: '菜单1-2', component: Menu1Item2Item1 },
  { path: '/nestedMenu/menu2', name: '菜单2', component: Menu2 },
];
