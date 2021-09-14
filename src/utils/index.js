/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-14 09:53:19
 */

/**
 * @name: 根据某个属性值从MenuList查找拥有该属性值的menuItem
 * @msg: 
 * @param {Array} menuList 
 * @param {String} key
 * @param {String} value
 */
export function getMenuItemInMenuListByProperty(menuList, key, value) {
  let stack = [];
  stack = stack.concat(menuList);
  let res;
  while (stack.length) {
    const cur = stack.shift();
    if (cur.children && cur.children.length > 0) {
      stack = cur.children.concat(stack);
    }
    if (value === cur[key]) {
      res = cur;
    }
  }
  return res;
}
