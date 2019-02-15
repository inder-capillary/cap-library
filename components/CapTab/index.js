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
    const {panes, ...rest} = this.props;
    return (
      <div className={this.props.className}>
        {panes ? (
          <Tabs
            animated
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            {...rest}>
            { panes.map((pane) => {
              const {content, ...paneProps} = pane;
              return <TabPane {...paneProps}>{content}</TabPane>;
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
