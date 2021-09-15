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
const Menu1Item1 = Loadable({ loader: () => import(/* webpackChunkName:'Menu1_1' */'@/views/NestedMenu/Menu1/Menu1-1'), loading: Loading });
const Menu1Item2Item1 = Loadable({ loader: () => import(/* webpackChunkName:'Menu1_2_1' */'@/views/NestedMenu/Menu1/Menu1-2/Menu1-2-1'), loading: Loading });
const Error404 = Loadable({ loader: () => import(/* webpackChunkName:'Error404' */'@/views/Error/404'), loading: Loading });
export default [
  { path: '/home', component: Home },
  { path: '/userManage', component: UserManage },
  { path: '/nestedMenu/menu1/menu1-1', component: Menu1Item1 },
  { path: '/nestedMenu/menu1/menu1-2/menu1-2-1', component: Menu1Item2Item1, roles: ['admin', 'editor'] },
  { path: '/error/404', component: Error404 },
];
