/*
 * @Descripttion: 登录组件
 * @version:
 * @Author: Calvin
 * @Date: 2021-09-07 22:26:27
 */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Form, Input, Button, Spin, message,
} from 'antd';
import './inde.less';
import { login } from '@/store/actions/user';

const Login = (props) => {
  const { token, login } = props;
  const [loading, setLoading] = useState(false);
  const handleLogin = ({ username, password }) => {
    setLoading(true);
    login(username, password).then((data) => {
      message.success(data.message);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  };
  if (token) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="login-container">
      <Form
        name="basic"
        className="content"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleLogin}
        autoComplete="off">
        <div className="text-center">
          <h2>用户登录</h2>
        </div>
        <Spin spinning={loading} tip="登录中...">
          <Form.Item
            label="用户名"
            name="username"
            initialValue="admin" // 初始值
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            initialValue="123456"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Spin>

      </Form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};
export default connect(mapStateToProps, { login })(Login);
