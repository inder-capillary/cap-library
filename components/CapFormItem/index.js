import React from "react";
import PropTypes from 'prop-types';
import { Form } from "antd";
import "./_capFormItem.scss";
const classNames = require('classnames');
const FormItem = Form.Item;
export default class CapFormItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, ...rest} = this.props;
    return (
      <FormItem {...rest} className={classNames("cap-form-item-v2", className)}>
        {React.Children.toArray(children)}
      </FormItem>
    );
  }
}

CapFormItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
