/**
*
* CapSecondaryTopBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

import isEmpty from 'lodash/isEmpty';
import CapIcon from "../CapIcon";
import CapMenu from '../CapMenu';
import CapHeading from '../CapHeading';
import CapDivider from '../CapDivider';
import { LogoBackground } from '../assets/icons';

import './_capSecondaryTopBar.scss';
// import styled from 'styled-components';

const clsPrefix = 'cap-secondary-topbar';

const MenuHeading = styled(CapHeading)`
  display: inline-block;
`;
const CapSecondaryTopBar = (props) => {
  const { primaryMenuItem = {}, secondaryMenuItem = {}, menuActions = [], menuActionHandler, menuItemHandler } = props;
  return (
    <CapMenu
      onClick={menuItemHandler}
      selectedKeys={[]}
      mode="horizontal"
      className={classNames(`${clsPrefix}-header`)}
      selectable={false}
    >
      {!isEmpty(primaryMenuItem)
      && (
        <CapMenu.Item key={primaryMenuItem.key || 'primaryMenu'} className="primary-menu">
          <CapIcon type="more-applications" className="apps-icon" />
          <MenuHeading type="h3">{primaryMenuItem.label || ''}</MenuHeading>
          <CapDivider type="vertical" className="vertical-divider" style={{marginLeft: 'auto'}} />
        </CapMenu.Item>
      )
      }
      {secondaryMenuItem && (
        <CapMenu.Item key={secondaryMenuItem.key || 'secondaryMenu'} className={classNames(`${clsPrefix}-secondary-menu`)}>
          <div className={(`${clsPrefix}-selected-icon`)}>
            <LogoBackground />
            <span className="text-label">{secondaryMenuItem.label[0]}</span>
          </div>
          <MenuHeading type="h3">{secondaryMenuItem.label || ''}</MenuHeading>
        </CapMenu.Item>
      )}
      {menuActions.length && (
        <CapMenu
          onClick={menuActionHandler}
          selectedKeys={[]}
          mode="horizontal"
          className="actions-menu"
          selectable={false}
        >
          {menuActions.map((action, index) => (
            <CapMenu.Item key={action.key || `action-${index}`}>
              <CapIcon type={action.iconType} />
            </CapMenu.Item>
          ))}
        </CapMenu>
      )}
    </CapMenu>
  );
};

CapSecondaryTopBar.propTypes = {
  primaryMenuItem: PropTypes.object.isRequired,
  secondaryMenuItem: PropTypes.object,
  menuActions: PropTypes.array,
  menuActionHandler: PropTypes.func,
  menuItemHandler: PropTypes.func,
};

export default CapSecondaryTopBar;
