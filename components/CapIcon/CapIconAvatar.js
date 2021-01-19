import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_capIcon.scss';
import { LogoBackground } from "../assets/icons";

const clsPrefix = 'cap-icon-v2';

function CapIconAvatar(props) {
  const { className, text, width, height, backgroundProps, labelProps } = props;
  const customClassName = `${clsPrefix}-avatar`;

  return (
    <div className={classNames(customClassName, className)}>
      <LogoBackground width={width} height={height} {...backgroundProps} />
      <span className="text-label" {...labelProps}>{text}</span>
    </div>
  );
}

CapIconAvatar.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundProps: PropTypes.object,
  labelProps: PropTypes.object,
};

export default CapIconAvatar;
