/**
*
* CapSlideBox
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { throttle } from 'lodash';
import CapHeading from '../CapHeading';
import CapIcon from '../CapIcon';

import './_capSlideBox.scss';


const clsPrefix = 'cap-slide-box-v2';

export default class CapSlideBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShadow: false,
    };
    this.throttleScroll = throttle(this.onScroll.bind(this), 300);
  }

  componentDidMount() {
    const { show } = this.props;
    if (show) {
      document.body.style.overflow = 'hidden';
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = null;
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
    const { size, show, header, handleClose, footer, content, className } = this.props;
    const { showShadow } = this.state;
    return (
      show ? (
        <div className={classNames(`${clsPrefix}`, className, { 'show-slidebox': show, 'hide-slidebox': !show, 'show-shadow': showShadow })}>
          <div className={classNames(`${clsPrefix}-container ${size}`)}>
            <div className="slidebox-header">
              <CapHeading type="h1">{header}</CapHeading>
              {<CapIcon onClick={handleClose} type="close" className={classNames(`${clsPrefix}-close-icon`)} />}
            </div>
            <div onScroll={this.throttleScroll} className={classNames('slidebox-content-container', { 'has-footer': footer })} ref={(node) => { this.slideBoxContainer = node; }}>
              <div ref={(node) => { this.slideBoxContent = node; }} style={{ height: '100%' }}>
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
      ) : null
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
  className: PropTypes.string,
};
