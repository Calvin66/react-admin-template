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
import menuList from '@/config/menuList';
import './index.less';

const { SubMenu } = Menu;

class SiderMenu extends Component {
  state = {
    menuTreeNode: [],
    selectedKey: [],
    openKey: [],
  };
  // 刷新挂载组件
  componentDidMount() {
    const { pathname } = this.props.location;
    console.log(pathname);
    this.setState({
      selectedKey: [pathname],
      openKey: [],
    });
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode,
    });
  }

  // 菜单渲染
  renderMenu = (data) => data.map((item) => {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname;
    if (item.children) {
      // 查找一个与当前请求路径匹配的子Item
      const cItem = item.children.find(
        (items) => path.indexOf(items.path) === 0,
      );

      // 如果存在, 说明当前item的子列表需要打开
      if (cItem) {
        this.setState((state) => ({
          openKey: [...state.openKey, item.path],
        }));
      }
      return (
        <SubMenu key={item.path} icon={item.icon} title={item.title}>
          {this.renderMenu(item.children)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={item.path} icon={item.icon} title={item.title}>
        <Link to={item.path}>
          <span>{item.title}</span>
        </Link>
      </Menu.Item>
    );
  })
  handleMenuSelect = ({ key }) => {
    this.setState({
      selectedKey: [key],
    });
  }
  render() {
    const { selectedKey, openKey } = this.state;
    return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <Menu
          selectedKeys={selectedKey}
          openKeys={openKey}
          onClick={this.handleMenuSelect}
          theme="dark"
          mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </Scrollbars>
    );
  }
}

export default withRouter(SiderMenu);
