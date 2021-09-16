/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-01-14 11:48:40
 */
export const localstorageSet = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
export const localstorageGet = (name) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

export const localstorageRemove = (name) => {
  if (!name) return;
  return window.localStorage.removeItem(name);
};
