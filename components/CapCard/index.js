/**
*
* CapCard
*
*/

import React from 'react';
import './_capCard.scss';
import PropTypes from 'prop-types';
import { Card} from "antd";

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
            const {content, hoverOption, ...rest} = c;
            const key = c.key || i;
            return (
              <div className={hoverOption ? '' : 'disable-hover'}>
                <Card {...rest} key={key}>
                  {this.cardInner(type, key, content)}
                </Card>
                <div className="cap-card-hover-option">
                  { hoverOption}
                </div>
              </div>
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
