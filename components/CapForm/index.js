/**
*
* CapForm
*
*/

import React from 'react';
import './_capForm.scss';
import PropTypes from 'prop-types';
import { Form } from "antd";
const classNames = require('classnames');
class CapForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, ...rest} = this.props;
    return (
      <Form {...rest} className={classNames("cap-form", className)}>
        {React.Children.toArray(children)}
      </Form>
    );
  }
}

CapForm.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CapForm;
