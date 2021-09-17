/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-17 14:41:39
 */

const tokens = {
  admin: 'admin-token',
  guest: 'guest-token',
  editor: 'editor-token',
};
export default {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    if (!token) {
      return {
        isSuccess: false,
        message: '用户名或密码错误',
      };
    }
    return {
      isSuccess: true,
      message: '登录成功',
      token,
    };
  },
  logout: () => ({
    isSuccess: true,
    message: '退出登录成功',
  }),
};
