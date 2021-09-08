/*
 * @Descripttion:
 * @Author: Calvin
 * @Date: 2021-09-06 15:40:56
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '@/assets/styles/index.less';

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);
