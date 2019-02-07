/**
*
* CapSlideBox
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import classNames from 'classnames';
import { throttle } from 'lodash';

import './_capSlideBox.scss';


const clsPrefix = 'cap-slide-box';

export default class CapSlideBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShadow: false,
    };
    this.throttleScroll = throttle(this.onScroll.bind(this), 300);
  }

  onScroll() {
    const { showShadow } = this.state;
    if (this.slideBoxContent && this.slideBoxContainer && this.slideBoxContent.clientHeight > this.slideBoxContainer.clientHeight) {
      const { scrollTop } = this.slideBoxContainer;
      const scrollOnTop = scrollTop === 0;
      if (showShadow && scrollOnTop) {
        this.setState({ showShadow: false });
      } else if (!scrollOnTop && !showShadow) {
        this.setState({ showShadow: true });
      }
    }
  }

  render() {
    const { size, show, header, handleClose, footer, content } = this.props;
    const { showShadow } = this.state;
    return (
      show && (
        <div className={classNames(`${clsPrefix}`, { 'show-slidebox': show, 'hide-slidebox': !show, 'show-shadow': showShadow })}>
          <div className={classNames(`${clsPrefix}-container ${size}`)}>
            <div className="slidebox-header">
              <div className="header">{header}</div>
              <Icon onClick={handleClose} className={classNames(`${clsPrefix}-close-icon`)} type="close" />
            </div>
            <div onScroll={this.throttleScroll} className={classNames('slidebox-content-container', { 'has-footer': footer })} ref={(node) => { this.slideBoxContainer = node; }}>
              <div ref={(node) => { this.slideBoxContent = node; }}>
                {content}
              </div>
            </div>
            {footer && (
              <div className="slidebox-footer">
                {footer}
              </div>
            )}
          </div>
        </div>
      )
    );
  }
}

CapSlideBox.defaultProps = {
  size: "size-r",
};

CapSlideBox.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  footer: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  content: PropTypes.element.isRequired,
  show: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  size: PropTypes.string,
};
