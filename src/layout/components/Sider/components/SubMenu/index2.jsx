/*
 * @Descripttion: 菜单栏
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-08 21:54:06
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
// 引入侧边栏配置
import { Scrollbars } from 'react-custom-scrollbars';
import './index.less';

const { SubMenu } = Menu;
// 菜单渲染
const SiderMenu = (props) => {
  const { menusList, location: { pathname: path } } = props;
  const [menuTreeNode, setMenuTreeNode] = useState([]);
  const [openKey, setOpenKey] = useState([]);

  // 得到当前请求的路由路径
  const renderMenu = (menusList) => {
    menusList.reduce((pre, item) => {
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
          setOpenKey([...openKey, item.path]);
        }
  
        // 向pre添加<SubMenu>
        pre.push(
          <SubMenu key={item.path} icon={item.icon} title={item.title}>
            {renderMenu(item.children)}
          </SubMenu>,
        );
      }
      return pre;
    }, []);
  };
  setMenuTreeNode(renderMenu(menusList));
  return (
    <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
      <Menu
        selectedKeys={[path]}
        defaultOpenKeys={openKey}
        theme="dark"
        mode="inline">
        {menuTreeNode}
      </Menu>
    </Scrollbars>
  );
};

const mapStateToProps = (state) => ({
  menusList: state.user.menusList,
});
export default connect(mapStateToProps)(withRouter(SiderMenu));
