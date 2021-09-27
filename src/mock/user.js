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
    ],
  }),
};
