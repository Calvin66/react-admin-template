/*
 * @Descripttion: 头部组件
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-07 21:25:44
 */
import React from 'react';
import { Layout } from 'antd';
import './index.less';
import { connect } from 'react-redux';
import { logout } from '@/store/actions/user';

const { Header } = Layout;

const LayoutHeader = (props) => {
  const { logout } = props;
  const handleLogout = () => {
    logout();
  };
  return (
    <Header>
      <div onClick={handleLogout}>退出</div>
    </Header>
  );
};

export default connect(null, { logout })(LayoutHeader);
