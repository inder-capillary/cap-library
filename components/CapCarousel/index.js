/**
*
* CapCarousel
*
*/

import React from 'react';
import './_capCarousel.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import CapIcon from '../CapIcon';

const clsPrefix = 'cap-carousel-v2';

export default class CapCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
    this.state = {
      currentIndex: 0,
    };
  }

  next = () => {
    this.carousel.next();
  }

  previous = () => {
    this.carousel.prev();
  }

  beforeChange = (from, to) => {
    this.setState({ currentIndex: to });

    const { beforeChange } = this.props;
    if (beforeChange) {
      beforeChange({ currentIndex: to });
    }
  }

  render() {
    const { className, wrapperClassName, data, width, showTopSwitcher, ...rest } = this.props;
    const { currentIndex } = this.state;
    const carouselProps = {
      ref: (node) => { this.carousel = node; },
      className: classNames(clsPrefix, className),
      ...rest,
    };
    const leftDisabled = currentIndex === 0;
    const rightDisabled = currentIndex === (data.length - 1);

    if (showTopSwitcher && !(leftDisabled && rightDisabled)) {
      carouselProps.beforeChange = this.beforeChange;
    }

    const heading = (data[currentIndex] || {}).name;

    return (
      <div style={{ width: width || "100%" }} className={classNames(`${clsPrefix}-wrapper`, wrapperClassName)}>
        {showTopSwitcher && !(leftDisabled && rightDisabled) && (
          <div className="switcher-icons">
            <CapIcon type="chevron-left" disabled={leftDisabled} onClick={!leftDisabled ? this.previous : null} />
            <div className="heading">{heading}</div>
            <CapIcon type="chevron-right" disabled={rightDisabled} onClick={!rightDisabled ? this.next : null} />
          </div>
        )}
        <Carousel {...carouselProps}>
          {
            data.map((d) => <React.Fragment key={d.key}>{d.content}</React.Fragment>)
          }
        </Carousel>
      </div>
    );
  }
}

CapCarousel.defaultProps = {
  showTopSwitcher: true,
  dots: false,
};

CapCarousel.propTypes = {
  showTopSwitcher: PropTypes.bool,
  dots: PropTypes.bool,
  data: PropTypes.array.isRequired,
  beforeChange: PropTypes.func,
};
