/**
*
* CapStepsAccordian
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import classNames from 'classnames';
import styled from 'styled-components';
import { CapHeading } from '../index';
import { SelectedTick } from '../assets/icons';

import './_capStepsAccordian.scss';

const clsPrefix = "cap-steps-accordian-v2";

const { Panel } = Collapse;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

function CapStepsAccordian(props) {
  const { items, showNumberSteps, ...collapseProps } = props;
  return (
    <Collapse
      accordion
      className={classNames(clsPrefix)}
      bordered={false}
      {...collapseProps}
    >
      {items.map((item, index) => {
        const { header, key, icon, completed, ...panelProps } = item;
        const customHeader = (
          <Flex>
            {icon || (
              completed ? <SelectedTick className="steps-icon" /> : (
                <div className="steps-icon numbers-icon">
                  <CapHeading type="label2">{index + 1}</CapHeading>
                </div>
              )
            )}
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
