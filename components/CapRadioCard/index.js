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
    const { panes, className, selected, ...rest } = this.props;
    return (
      <RadioGroup {...rest} className={classNames("cap-radioCard-v2", className)}>
        {panes && (
          panes.map((pane) => {
            const { content, title, renderIcon } = pane;
            return (
              <RadioButton key={pane.value} value={pane.value}>
                <CapIcon type="check-filled" className="radio-card-checked" />
                <Card>
                  {renderIcon && (
                    <div className="radio-card-icon">
                      <div className={classNames('icon-container', { 'green-color': selected === pane.value })}>
                        <div className="div-icon">
                          {selected === pane.value ? renderIcon({ selected: true }) : renderIcon({ selected: false })}
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
};

export default CapRadioCard;
