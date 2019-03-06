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
    getCardContent = () => {
      const { type, content, url, width, height } = this.props;
      switch (type) {
        case 'SMS':
          return <Meta description={content} />;
        case 'Email':
          return <Meta description={<img width={width || 244} height={height || 279} src={url} alt={url} />} />;
        default:
          return null;
      }
    }

    render() {
      const { className, type, content, hoverOption, url, width, height, ...rest } = this.props;
      return (
        <Card
          className={ClassNames(clsPrefix, className, { 'has-hover-option': hoverOption })}
          {...rest}
        >
          {this.getCardContent()}
          {hoverOption && (
            <div className="hover-content">
              {hoverOption}
            </div>
          )}
        </Card>
      );
    }
}

CapCustomCard.propTypes = {
  className: PropTypes.string,
  cardList: PropTypes.array,
  type: PropTypes.string,
};

export default CapCustomCard;
