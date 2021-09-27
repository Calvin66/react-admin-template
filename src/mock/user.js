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
        path: '/userManage',
        children: [
          {
            title: '菜单2',
            path: '/nestedMenu/menu2',
          },
        ],
      },
    ],
  }),
};
