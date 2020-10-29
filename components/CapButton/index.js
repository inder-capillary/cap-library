/**
* CapButton
*/
import React from "react";
import PropTypes from 'prop-types';
import { Button } from "antd";
import classnames from 'classnames';
import CapIcon from "../CapIcon";
import "./_capButton.scss";

const classPrefix = 'cap-button-v2';

const CapButton = (props) => {
  const btnTypeClassMapping = {
    secondary: 'secondary-btn',
    flat: 'flat-btn',
  };

  const {
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
        className,
        { 'add-btn': isAddBtn },
        { 'has-icon': isAddBtn || suffix || prefix }
      )}
    >
      {isAddBtn && <div className={classnames(`${classPrefix}-prefix`)}>{<CapIcon size="s" type="add" />}</div>}
      {prefix && <span className={classnames(`${classPrefix}-prefix`)}>{prefix}</span>}
      {children}
      {suffix && <span className={classnames(`${classPrefix}-suffix`)}>{suffix}</span>}
    </Button>
  );
};

/*
  NOTE:

    While using a disabled button with tooltip, wrap the button with an element with className "button-disabled-tooltip-wrapper".

    <CapTooltip title="disabled button with tooltip">
      <span className="button-disabled-tooltip-wrapper">
        <CapButton disabled>Button</CapButton>
      </span>
    </CapTooltip>
*/

CapButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  isAddBtn: PropTypes.bool,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

CapButton.defaultProps = {
  type: 'primary',
  isAddBtn: false,
};

export default CapButton;
