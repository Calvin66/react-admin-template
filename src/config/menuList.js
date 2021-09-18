/*
 * @Descripttion: 
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-09 20:54:50
 */

import {
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

const menuList = [
  {
    title: '首页',
    path: '/home',
    icon: <HomeOutlined />,
  },
  {
    title: '用户管理',
    path: '/userManage',
    icon: <UserOutlined />,
  },
  {
    title: '路由嵌套',
    path: '/nestedMenu',
    icon: <UserOutlined />,
    children: [
      {
        title: '菜单1',
        path: '/nestedMenu/menu1',
        children: [
          {
            title: '菜单1-1',
            path: '/nestedMenu/menu1/menu1-1',
          },
          {
            title: '菜单1-2',
            path: '/nestedMenu/menu1/menu1-2',
            children: [
              {
                title: '菜单1-2-1',
                path: '/nestedMenu/menu1/menu1-2/menu1-2-1',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menuList;
