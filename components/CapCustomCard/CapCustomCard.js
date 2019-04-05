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
const channels = {
  sms: 'SMS',
  email: 'EMAIL',
};
class CapCustomCard extends React.Component {
    getCardContent = () => {
      const { content, url, width, height } = this.props;
      const type = this.props.type.toUpperCase();
      switch (type) {
        case channels.sms:
          return <Meta description={content} />;
        case channels.email:
          return <Meta description={<img width={width || 244} height={height || 279} src={url} alt={url} />} />;
        default:
          return null;
      }
    }

    render() {
      const { className, type, content, hoverOption, url, width, height, ...rest } = this.props;
      return (
        <Card
          className={ClassNames(clsPrefix, className, type, { 'has-hover-option': hoverOption })}
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
