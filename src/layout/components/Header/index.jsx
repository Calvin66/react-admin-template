/*
 * @Descripttion: 头部组件
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-07 21:25:44
 */
import React from 'react';
import { Layout, message } from 'antd';
import './index.less';
import { connect } from 'react-redux';
import { removeUserToken } from '@/store/actions/user';
import { removeToken } from '@/utils/auth';
import { postLogout } from '@/api/login';

const { Header } = Layout;

const LayoutHeader = (props) => {
  const { removeUserToken } = props;
  const handleLogout = () => {
    postLogout().then((res) => {
      removeToken();
      removeUserToken();
      message.success(res.message);
    });
  };
  return (
    <Header>
      <div onClick={handleLogout}>退出</div>
    </Header>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeUserToken: () => dispatch(removeUserToken()),
});
export default connect(null, mapDispatchToProps)(LayoutHeader);
