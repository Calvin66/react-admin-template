/*
 * @Descripttion: 登录组件
 * @version:
 * @Author: Calvin
 * @Date: 2021-09-07 22:26:27
 */
import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import {
  Form, Input, Button, Spin, message,
} from 'antd';
import './inde.less';
import { handleLogin } from '@/store/actions/user';

const Login = (props) => {
  const { handleLogin } = props;
  const [loading, setLoading] = useState(false);
  const onFinish = ({ username, password }) => {
    setLoading(true);
    handleLogin(username, password).then((data) => {
      message.success(data.message);
      // props.history.push('/');
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  };

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
        onFinish={onFinish}
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
export default connect(mapStateToProps, { handleLogin })(Login);
