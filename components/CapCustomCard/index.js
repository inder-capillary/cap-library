/**
*
* CapCard
*
*/

import React from 'react';
import './_capCustomCard.scss';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Card } from "antd";
const { Meta } = Card;

const clsPrefix = "cap-custom-card";
class CapCustomCard extends React.Component {
  cardInner = (type, key, data) => (
    <div>
      {(() => {
        switch (type) {
          case 'SMS':
            return <Meta key={key} description={data.content} />;
          case 'Email':
            return <Meta key={key} description={<img width={data.width || 244} height={data.height || 279} src={data.url} alt={data.url} />} />;
          default:
            return null;
        }
      })()}
    </div>
  )

  render() {
    const { className, cardList, type } = this.props;
    return (
      <div className={ClassNames("cap-custom-card-list", type, className)}>
        {cardList && (
          cardList.map((data, i) => {
            const { content, hoverOption, url, width, height, ...rest } = data;
            const key = data.key || i;
            return (
              <Card
                key={`${key}-card`}
                className={ClassNames(clsPrefix, { 'has-hover-option': hoverOption })}
                {...rest}
              >
                {this.cardInner(type, key, data)}
                {hoverOption && (
                  <div className="hover-content">
                    {hoverOption}
                  </div>
                )}
              </Card>
            );
          }))}
      </div>
    );
  }
}

CapCustomCard.propTypes = {
  className: PropTypes.string,
  cardList: PropTypes.array,
  type: PropTypes.string,
};

export default CapCustomCard;
