/**
*
* CapTimePicker
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker} from 'antd';
import classNames from 'classnames';
import './_capTimePicker.scss';
// import styled from 'styled-components';

const clsPrefix = 'cap-timepicker-v2';

class CapTimePicker extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { className, popupClassName, ...rest } = this.props;

    return (
      <TimePicker className={classNames(clsPrefix, className)} popupClassName={classNames(`${clsPrefix}-popup`, popupClassName)} {...rest} />
    );
  }
}

CapTimePicker.defaultProps = {
  getPopupContainer: (triggerNode) => triggerNode?.parentNode || document.body,
};

CapTimePicker.propTypes = {
  getPopupContainer: PropTypes.func,
};

export default CapTimePicker;
