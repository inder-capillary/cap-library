/**
* CapButton
*/
import React from "react";
import PropTypes from 'prop-types';
import { Button, Icon } from "antd";
import classnames from 'classnames';
import "./_capButton.scss";

const classPrefix = 'cap-button';

const CapButton = (props) => {
  const btnTypeClassMapping = {
    secondary: 'secondary-btn',
    flat: 'flat-btn',
  };

  const {
    addonBefore,
    addonAfter,
    className,
    children,
    type,
    isAddBtn,
    prefix,
    suffix,
    ...rest
  } = props;
  return (
    <Button
      {...rest}
      type={type}
      className={classnames(
        classPrefix,
        btnTypeClassMapping[type],
        {'add-btn': isAddBtn},
        {'has-icon': isAddBtn || suffix || prefix}
      )}
    >
      {isAddBtn && <Icon type="plus" className={classnames(`${classPrefix}-prefix`)} />}
      {prefix && <span className={classnames(`${classPrefix}-prefix`)}>{prefix}</span>}
      {React.Children.toArray(children)}
      {suffix && <span className={classnames(`${classPrefix}-suffix`)}>{suffix}</span>}
    </Button>
  );
};

CapButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

CapButton.defaultProps = {
  type: 'primary',
};

export default CapButton;
