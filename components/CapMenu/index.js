/**
*
* CapMenu
*
*/

import React from 'react';
import { Menu } from 'antd';
import classNames from 'classnames';
// import styled from 'styled-components';

const { Item, SubMenu, ItemGroup, Divider } = Menu;

const clsPrefix = 'cap-menu-v2';

function CapMenu(props) {
  const { className, ...rest } = props;
  return (
    <Menu className={classNames(clsPrefix, className)} {...rest} />
  );
}

CapMenu.Item = Item;
CapMenu.SubMenu = SubMenu;
CapMenu.ItemGroup = ItemGroup;
CapMenu.Divider = Divider;

CapMenu.propTypes = {

};

export default CapMenu;
