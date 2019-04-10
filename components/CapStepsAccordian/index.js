/**
*
* CapStepsAccordian
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Icon } from 'antd';
import classNames from 'classnames';
import styled from 'styled-components';
import CapHeading from '../CapHeading';
import CapIcon from '../CapIcon';

import './_capStepsAccordian.scss';

const clsPrefix = "cap-steps-accordian-v2";

const { Panel } = Collapse;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

function CapStepsAccordian(props) {
  const { items, showNumberSteps, className, ...collapseProps } = props;
  return (
    <Collapse
      accordion
      className={classNames(clsPrefix, className, { 'with-steps': showNumberSteps })}
      bordered={false}
      expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
      {...collapseProps}
    >
      {items.map((item, index) => {
        const { header, key, icon, completed, ...panelProps } = item;
        const customHeader = (
          <Flex>
            {icon || (showNumberSteps && (
              completed ? <CapIcon type="check-filled" size="l" className="steps-icon" /> : (
                <div className="steps-icon numbers-icon">
                  <CapHeading type="label2">{index + 1}</CapHeading>
                </div>
              )
            ))}
            {header}
          </Flex>
        );
        return (
          <Panel
            header={customHeader}
            key={key}
            showArrow={!showNumberSteps}
            {...panelProps}
          >
            {item.content}
          </Panel>
        );
      })}
    </Collapse>
  );
}

CapStepsAccordian.defaultProps = {
  showNumberSteps: true,
};

CapStepsAccordian.propTypes = {
  items: PropTypes.array,
  showNumberSteps: PropTypes.bool,
};

export default CapStepsAccordian;
