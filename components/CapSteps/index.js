/**
*
* CapSteps
*
*/

import React from 'react';
import { Steps } from 'antd';
import PropTypes from 'prop-types';

const { Step } = Steps;
function CapSteps(props) {
  const className = `cap-steps ${props.className}`;
  const stepsProps = {...props, className};
  return (
    <Steps {...stepsProps} />
  );
}

CapSteps.CapStep = Step;

CapSteps.propTypes = {
  className: PropTypes.string,
};

export default CapSteps;
