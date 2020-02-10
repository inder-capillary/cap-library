/**
*
* CapRadioCard
*
*/

import React, { Fragment } from 'react';
import './_capRadioCard.scss';

import { Card, Radio } from "antd";
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classNames from 'classnames';
import CapHeading from '../CapHeading';
import CapTooltipWithInfo from '../CapTooltipWithInfo';
import CapIcon from '../CapIcon';
import CapTooltip from '../CapTooltip';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
class CapRadioCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getRadioButton = (pane) => {
    const { cardHeight, cardWidth, selected, defaultValue, size } = this.props;
    const { content, title, icon, value, infoIconDescription, disabled, customDisableClass, customComponent, ...restParams } = pane;
    return (
      <RadioButton style={{ height: cardHeight || '120px', width: cardWidth }} key={value} value={value} disabled={disabled} className={classNames({'custom-disable-radio-button': customDisableClass})} {...restParams}>
        <CapIcon type="check-filled" className="radio-card-checked" />
        <Card>
          {icon && (
            <div className="radio-card-icon">
              <div className={classNames('icon-container', { 'green-color': (selected ? selected === value : defaultValue === value) && (size !== "small") && !disabled })}>
                <div className="div-icon">
                  {icon}
                </div>
              </div>
            </div>
          )}
          <div className="radio-card-content-container">
            <div className="radio-card-header"><CapHeading type="h4">{title}</CapHeading></div>
            <div className="radio-card-content">
              {' '}
              {content}
            </div>
          </div>
          {infoIconDescription
                  && <CapTooltipWithInfo title={infoIconDescription}></CapTooltipWithInfo>
          }
          {customComponent}
        </Card>
      </RadioButton>
    );
  }

  render() {
    const { panes, className, selected, cardHeight, size, ...rest } = this.props;
    return (
      <RadioGroup {...rest} className={classNames("cap-radioCard-v2", size === "small" && "smallRadioCard", className)}>
        {panes && (
          panes.map((pane) => (
            <Fragment key={pane.value}>
              {get(pane, 'tooltipProps.title')
                ? (
                  <CapTooltip
                    {...pane.tooltipProps}
                  >
                    {this.getRadioButton(pane)}
                  </CapTooltip>
                ) : this.getRadioButton(pane)}
            </Fragment>
          ))
        )}
      </RadioGroup>

    );
  }
}

CapRadioCard.propTypes = {
  panes: PropTypes.arrayOf(Object),
  className: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.any,
  cardHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  cardWidth: PropTypes.oneOf([
    PropTypes.number,
    PropTypes.string,
  ]),
  customDisableClass: PropTypes.any,
};

export default CapRadioCard;
