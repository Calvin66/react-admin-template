/*
 * @Descripttion: 权限路由
 * @Author: Calvin
 * @Date: 2021-09-27 11:36:14
 */

/* 路由动态处理函数 */

/**
 * 递归处理路由，找出当前登录用户权限下的路由
 * @param {Array} userRouter 后台返回的用户权限json
 * @param {Array} allRouter 前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
export const recursRouter = (allRouter = [], userRouter = []) => {
  const resultRoute = [];
  allRouter.forEach((allItem) => {
    if (allItem.requiresAuth) {
      resultRoute.push(allItem);
    }
    userRouter.forEach((userItem) => {
      if (allItem.path === userItem.path) {
        resultRoute.push(allItem);
      }
    });
  });
  return resultRoute;
};
