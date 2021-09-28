/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-27 10:45:08
 */
export default {
  getRoleMenuList: () => ({
    isSuccess: true,
    message: '获取成功',
    list: [
      {
        title: '首页',
        path: '/home',
      },
      {
        title: '用户管理',
        path: '/userManage',
      },
      {
        title: '路由嵌套',
        path: '/nestedMenu',
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
          {
            title: '菜单2',
            path: '/nestedMenu/menu2',
          },
        ],
      },
    ],
  }),
};
