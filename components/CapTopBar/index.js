/**
*
* CapTopBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import classNames from 'classnames';
import CapDropdown from '../CapDropdown';
import CapMenu from '../CapMenu';
import CapIcon from '../CapIcon';
import CapDrawer from '../CapDrawer';
import CapList from '../CapList';
import CapLink from '../CapLink';
import CapHeading from '../CapHeading';
import { Select } from './Select';
import './_capTopBar.scss';
import { LogoBackground } from '../assets/icons';
import * as styledVars from "../styled/variables";

const { Header } = Layout;

const clsPrefix = 'cap-navbar';

class CapTopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false,
    };
  }

  renderTopMenu = () => {
    const { menuProps } = this.props;
    const { onMenuItemClick, items, ...restMenuProps } = menuProps;
    return (
      <CapMenu
        className={classNames(`${clsPrefix}-menu`)}
        mode="horizontal"
        style={{ lineHeight: styledVars.CAP_SPACE_64 }}
        {...restMenuProps}
      >
        {
          items && items.map((item) => (
            <CapMenu.Item
              className={classNames(`${clsPrefix}-menu-item`)}
              onClick={onMenuItemClick ? () => { onMenuItemClick(item); } : null}
              key={item.key}>
              {item.label}
            </CapMenu.Item>
          ))
        }
      </CapMenu>
    );
  }

  renderTopbarIcons = () => {
    const { topbarIcons } = this.props;
    return (
      topbarIcons.map((topbarIcon) => (
        <CapIcon
          onClick={topbarIcon.onClickHandler ? () => { topbarIcon.onClickHandler(); } : null}
          className={classNames(`${clsPrefix}-topbarIcon`)}
          type={topbarIcon.iconType}
          key={topbarIcon.key}
        />
      ))
    );
  }

  renderDropdownMenu = () => {
    const { dropdownMenuProps } = this.props;
    return (
      <CapDropdown
        trigger={["click"]}
        overlay={(
          <CapMenu className={classNames(`${clsPrefix}-menu`)}>
            { dropdownMenuProps.map((dropdownMenuProp) => (
              <CapMenu.Item key={dropdownMenuProp.key}>
                <div onClick={dropdownMenuProp.onClickHandler ? () => { dropdownMenuProp.onClickHandler(); } : null} className={classNames(`${clsPrefix}-user-popover-item`)}>
                  <div>{dropdownMenuProp.label || ''}</div>
                </div>
              </CapMenu.Item>
            )) }
          </CapMenu>
        )}
        placement="bottomLeft">
        <div onClick={this.showUserPopover} className={(`${clsPrefix}-user`)}>
          <LogoBackground />
          <span className="text-label"><CapIcon type="person" size="s" className={(`${clsPrefix}-person`)}></CapIcon></span>
        </div>
      </CapDropdown>
    );
  }

  getDrawerTitle = (title) => (
    <div className={classNames(`${clsPrefix}-flexDisplay`)}>
      <CapIcon type="more-applications" className={classNames(`${clsPrefix}-more-app`)}></CapIcon>
      {title || ''}
    </div>
  )

  getDrawerContent = (productsList, handleProductChange, selectedProduct) => {
    let productsComps = [];
    if (productsList && handleProductChange && selectedProduct) {
      productsComps = productsList.map((product) => (
        <CapLink
          onClick={() => handleProductChange(product.value)}
          title={(
            product && selectedProduct.toLowerCase() === (product.value || '').toLowerCase() ? (
              <div style={{ display: 'flex', paddingLeft: styledVars.CAP_SPACE_32 }}>
                <CapIcon
                  type="tick"
                  size="s"
                  fill={styledVars.CAP_COLOR_06}
                />
                <CapHeading type="h3">{product.label || ''}</CapHeading>
              </div>
            ) : (
              <div style={{ paddingLeft: styledVars.CAP_SPACE_60 }}>
                <CapHeading type="h3">{product.label || ''}</CapHeading>
              </div>
            ))}
        />
      ));
    }
    return (<CapList dataSource={productsComps} renderItem={(item) => (<CapList.Item>{item}</CapList.Item>)} />);
  }

  renderDrawerList = () => {
    const { drawerListProps } = this.props;
    const { productsList, selectedProduct, handleProductChange, title, ...rest } = drawerListProps;
    const { showDrawer } = this.state;
    return (
      <div className={classNames(`${clsPrefix}-dimensions`)} style={{ borderRight: `1px solid ${styledVars.CAP_G07}`, marginRight: styledVars.CAP_SPACE_16 }}>
        <div onClick={this.openDrawer} className={classNames(`${clsPrefix}-flexDisplay`)} style={{ alignItems: 'center', cursor: 'pointer' }}>
          <CapIcon type="more-applications" className={classNames(`${clsPrefix}-more-app`)}></CapIcon>
          <CapHeading type="h3">{selectedProduct || ''}</CapHeading>
        </div>
        {showDrawer && drawerListProps && (
          <CapDrawer
            visible={showDrawer}
            onClose={this.closeDrawer}
            className={classNames(`${clsPrefix}-drawer`)}
            title={this.getDrawerTitle(title)}
            content={this.getDrawerContent(productsList, handleProductChange, selectedProduct)}
            {...rest} />
        )}
      </div>
    );
  }

  renderOrgsSelect = () => {
    const { selectProps } = this.props;
    return (
      <div className={classNames(`${clsPrefix}-dimensions`)}>
        <Select
          {...selectProps}
        />
      </div>
    );
  }

  openDrawer = () => {
    this.setState({ showDrawer: true });
  }

  closeDrawer = () => {
    this.setState({ showDrawer: false });
  }

  render() {
    const { drawerListProps, selectProps, menuProps, dropdownMenuProps, topbarIcons } = this.props;
    return (
      <Header className={classNames(`${clsPrefix}-header`)}>
        <div className={classNames(`${clsPrefix}-flexDisplay`)}>
          {/* part 1: product list */}
          {drawerListProps && this.renderDrawerList()}
          {/* part 2: org selection */}
          {selectProps && this.renderOrgsSelect()}
        </div>
        {/* part 3: menu tabs */}
        { menuProps && this.renderTopMenu() }
        {/* part 4: topbar icons */}
        { topbarIcons && this.renderTopbarIcons() }
        {/* part 5: dropdown menu */}
        { dropdownMenuProps && this.renderDropdownMenu() }
        { this.props.children }
      </Header>
    );
  }
}

CapTopBar.defaultProps = {
  drawerListProps: {
    productsList: [],
    selectedProduct: "",
    closable: true,
    title: "Select product",
    placement: 'left',
    width: 256,
  },
  menuProps: {},
  selectProps: {},
  dropdownMenuProps: [],
  topbarIcons: [],
  userName: "",
};

CapTopBar.propTypes = {
  drawerListProps: PropTypes.shape({
    productsList: PropTypes.array,
    selectedProduct: PropTypes.string,
    handleProductChange: PropTypes.func,
  }),
  selectProps: PropTypes.object,
  menuProps: PropTypes.object,
  topbarIcons: PropTypes.array,
  dropdownMenuProps: PropTypes.array,
  userName: PropTypes.string,
};

export default CapTopBar;
