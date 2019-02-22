/**
*
* CapRadioCard
*
*/

import React from 'react';
import './_capRadioCard.scss';

import { Card, Radio } from "antd";
import PropTypes from 'prop-types';
import CapColumn from '../CapColumn';
import CapRow from '../CapRow';
import CapHeading from '../CapHeading';
import {CheckFilled } from '../assets/icons/index';
const classNames = require('classnames');

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
class CapRadioCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {panes, className, onChange, selected} = this.props;
    return (
      <RadioGroup onChange={onChange} className={classNames("cap-radioCard-v2", className)}>
        {panes ? (
          panes.map((pane, i) => {
            const {content, title, icon} = pane;
            return (
              <RadioButton key={i} value={i}>
                <CheckFilled className="radio-card-checked" />
                <Card key={i}>
                  <CapRow key={`capRow_1_${i}`}>
                    {icon ? (
                      <CapColumn className="radio-card-icon" key={`capCol_1_${i}`} span={6}>
                        <div className={(selected === i ? "icons green-color" : "icons")}>
                          <a><div className="div-icon">{icon}</div></a>
                        </div>
                      </CapColumn>
                    ) : <div></div>}
                    <CapColumn key={i} span={18}>
                      <CapRow key={`capRow_2_${i}`} className="radio-card-header"><CapHeading key={i} type="h4">{title}</CapHeading></CapRow>
                      <CapRow key={`capRow_3_${i}`} className="radio-card-content">
                        {' '}
                        {content}
                      </CapRow>
                    </CapColumn>

                  </CapRow>
                </Card>
              </RadioButton>

            );
          }) ) : <div></div>}
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
