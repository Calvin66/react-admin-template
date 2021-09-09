/*
 * @Descripttion: 菜单栏
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-08 21:54:06
 */

import React, { Component } from 'react';
import { Menu } from 'antd';
// 引入侧边栏配置
import MenuConfig from '@/config/menuConfig';

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
  renderMenu=(data) => data.map((item) => {
    if (item.children) {
      return (
        <SubMenu title={item.title} key={item.key}>
          {this.renderMenu(item.children)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item title={item.title} key={item.key}>
        {item.title}
      </Menu.Item>
    );
  })

  render() {
    return (
      <Menu
        theme="dark"
        mode="inline">
        {this.state.menuTreeNode}
      </Menu>
    );
  }
}

export default SiderMenu;
