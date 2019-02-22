/**
*
* CapCard
*
*/

import React from 'react';
import './_capCard.scss';
import PropTypes from 'prop-types';
import { Card} from "antd";
import CapPopover from '../CapPopover';
import CapButton from '../CapButton';

import { View as ViewIcon, SvgMore as MoreIcon} from "../assets/icons";
// import styled from 'styled-components';
const classNames = require('classnames');
const {Meta} = Card;
class CapCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  cardInner=(type, key, content) => (
    <div>
      {(() => {
        switch (type) {
          case 'SMS':
            return <Meta key={key} description={content} />;
          default:
            return null;
        }
      })()}
    </div>
  )

  render() {
    const { className, cardList, type} = this.props;
    return (
      <div className={classNames(`cap-card-v2 cap-card-${type}`, className)}>
        {cardList ? (
          cardList.map((c, i) => {
            const {content, viewIcon, moreIcon, onClick, hover, ...rest} = c;
            const icon = [];
            if (viewIcon) {
              icon.push(<ViewIcon />);
            }
            if (moreIcon) {
              icon.push(<MoreIcon />);
            }
            return (
              <CapPopover className={hover ? '' : 'disable-hover'} content={hover ? <CapButton onClick={onClick} key={i} visible={false}>Select</CapButton> : false}>
                <Card {...rest} key={i} extra={icon}>
                  {this.cardInner(type, i, content)}
                </Card>
              </CapPopover>
            );
          }) ) : <div></div>}
      </div>
    );
  }
}

CapCard.propTypes = {
  className: PropTypes.string,
  cardList: PropTypes.array,
  type: PropTypes.string,
};

export default CapCard;
