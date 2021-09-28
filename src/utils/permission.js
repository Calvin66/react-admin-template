/*
 * @Descripttion: 权限路由
 * @Author: Calvin
 * @Date: 2021-09-27 11:36:14
 */

/* 路由动态处理函数 */

/**
 * 递归处理路由，找出当前登录用户权限下的路由
 * @param {Array} permissionRoutes 后台返回的用户权限路由
 * @param {Array} asyncRoutes 前端配置好的所有动态路由的集合
 * @param {Array} constantRoutes 前端配置好的所有静态路由的集合
 * @return {Array} resultRoute 过滤后的路由
 */
export const recursRoutes = (permissionRoutes = [], asyncRoutes = [], constantRoutes = []) => {
  let resultRoute = [];
  const reducepermissionRoutes = reducePermissionList(permissionRoutes);
  reducepermissionRoutes.forEach((perItem) => {
    asyncRoutes.forEach((asynItem) => {
      if (perItem.path === asynItem.path) {
        resultRoute.push(asynItem);
      }
    });
  });
  resultRoute = [...resultRoute, ...constantRoutes];
  return resultRoute;
};

/**
 * @name: 处理权限菜单
 * @param {Array} permissionMenus 后台返回的用户权限菜单
 * @return {Array} resultMenus 过滤后的权限菜单
 */
export const recursMenus = (permissionMenus = []) => {
  let resultMenus = [];
  resultMenus = permissionMenus;
  return resultMenus;
};

/**
 * 递归处理路由
 * @param {Array} permissionRoutes 后台返回的用户权限路由
 * @return {Array} realRoutes 过滤成一维数组后的路由
 */
export const reducePermissionList = (permissionRoutes) => {
  const resultMenus = [];
  recursiveFunc(permissionRoutes, resultMenus);
  return resultMenus;
};

/**
 * @name: 将多维数据转成一维数组
 * @param {Array} permissionRoutes 后台返回的用户权限路由
 * @return {Array} resultList 过滤成一维数组后的路由
 */
const recursiveFunc = (permissionRoutes, resultList) => {
  permissionRoutes.forEach((item) => {
    if (item.children && item.children.length) {
      recursiveFunc(item.children, resultList);
    } else {
      resultList.push(item);
    }
  });
};
