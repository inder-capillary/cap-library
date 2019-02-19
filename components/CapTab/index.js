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

class CapTab extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activeKey: (props.panes ? `${props.panes[0].key}` : 0),
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
    if (this.props.onChange) {
      this.props.onChange(find(this.props.panes, {key: activeKey}));
    }
  }

  render() {
    const {panes, className, ...rest} = this.props;
    return (
      <div className={this.props.className}>
        {panes ? (
          <Tabs
            className={classNames("cap-tab", className)}
            animated
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            {...rest}>
            { panes.map((pane, i) => {
              const {content, ...paneProps} = pane;
              return <TabPane key={i} {...paneProps}>{content}</TabPane>;
            } )}
          </Tabs>
        ) : <div></div>}

      </div>
    );
  }
}

CapTab.propTypes = {
  panes: PropTypes.arrayOf(Object),
  className: PropTypes.string,
};

export default CapTab;
