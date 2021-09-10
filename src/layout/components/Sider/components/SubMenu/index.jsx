/*
 * @Descripttion: 菜单栏
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-08 21:54:06
 */

import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
// 引入侧边栏配置
import { Scrollbars } from 'react-custom-scrollbars';
import MenuConfig from '@/config/menuConfig';
import './index.less';

const { SubMenu } = Menu;

class SiderMenu extends Component {
  state = {
    menuTreeNode: [],
  };
  // 刷新挂载组件
  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    console.log(menuTreeNode);
    this.setState({
      menuTreeNode,
    });
  }

  // 菜单渲染
  renderMenu = (data) => data.map((item) => {
    if (item.children) {
      return (
        <SubMenu key={item.path} icon={item.icon} title={item.title}>
          {this.renderMenu(item.children)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={item.path} icon={item.icon} title={item.title}>
        <Link to={item.path}>
          {/* {item.icon ? <Icon type={item.icon} /> : null} */}
          <span>{item.title}</span>
        </Link>
      </Menu.Item>
    );
  })

  render() {
    return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <Menu
          theme="dark"
          mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </Scrollbars>
    );
  }
}

export default withRouter(SiderMenu);
