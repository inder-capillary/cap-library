/**
*
* CapTab
*
*/

import React from 'react';
import './_capTab.scss';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import { Tabs } from "antd";
// import styled from 'styled-components';
const classNames = require('classnames');
const { TabPane } = Tabs;

function CapTab(props) { // eslint-disable-line react/prefer-stateless-function
  const {panes, className, ...rest} = props;
  return (
    <div className={classNames('cap-tab-v2-wrapper', className)}>
      <Tabs
        className={classNames("cap-tab-v2", className)}
        animated
        {...rest}>
        { panes.map((pane) => {
          const {content, ...paneProps} = pane;
          return <TabPane {...paneProps}>{content}</TabPane>;
        } )}
      </Tabs>
    </div>
  );
}

CapTab.propTypes = {
  panes: PropTypes.arrayOf(Object).isRequired,
  className: PropTypes.string,
};

export default CapTab;
