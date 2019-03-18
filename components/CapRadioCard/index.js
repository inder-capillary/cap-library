/**
*
* CapRadioCard
*
*/

import React from 'react';
import './_capRadioCard.scss';

import { Card, Radio } from "antd";
import PropTypes from 'prop-types';
import CapHeading from '../CapHeading';
import CapIcon from '../CapIcon';
const classNames = require('classnames');

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
class CapRadioCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { panes, className, selected, cardHeight, ...rest } = this.props;
    return (
      <RadioGroup {...rest} className={classNames("cap-radioCard-v2", className)}>
        {panes && (
          panes.map((pane) => {
            const { content, title, icon, value, ...restParams } = pane;
            return (
              <RadioButton style={{ height: cardHeight || '120px' }} key={value} value={value} {...restParams}>
                <CapIcon type="check-filled" className="radio-card-checked" />
                <Card>
                  {icon && (
                    <div className="radio-card-icon">
                      <div className={classNames('icon-container', { 'green-color': selected === value || rest.defaultValue === value })}>
                        <div className="div-icon">
                          {icon}
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="radio-card-header"><CapHeading type="h4">{title}</CapHeading></div>
                    <div className="radio-card-content">
                      {' '}
                      {content}
                    </div>
                  </div>
                </Card>
              </RadioButton>
            );
          }))}
      </RadioGroup>

    );
  }
}

CapRadioCard.propTypes = {
  panes: PropTypes.arrayOf(Object),
  className: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.any,
  cardHeight: PropTypes.number,
};

export default CapRadioCard;
