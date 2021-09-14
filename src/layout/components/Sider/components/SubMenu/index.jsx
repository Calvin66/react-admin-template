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
    openKey: [],
  };
  // 刷新挂载组件
  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode,
    });
  }
  // 菜单渲染
  renderMenu = (menuList) => {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname;
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        pre.push(
          <Menu.Item key={item.path} icon={item.icon} title={item.title}>
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>,
        );
      } else {
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

        // 向pre添加<SubMenu>
        pre.push(
          <SubMenu key={item.path} icon={item.icon} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>,
        );
      }
      return pre;
    }, []);
  };
  
  render() {
    const path = this.props.location.pathname;
    const { openKey } = this.state;
    return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={openKey}
          theme="dark"
          mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </Scrollbars>
    );
  }
}

export default withRouter(SiderMenu);
