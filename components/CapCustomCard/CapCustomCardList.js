import React from 'react';
import classNames from 'classnames';
import CapCustomCard from './CapCustomCard';
import Row from '../CapRow';
import Col from '../CapColumn';

const clsPrefix = "cap-custom-card-list";

export default class CapCustomCardList extends React.Component {
  render() {
    const { className, cardList, type } = this.props;
    return (
      <div className={classNames(clsPrefix, type, className)}>
        {cardList && (
          <Row gutter={16} className={classNames(`${clsPrefix}-row`)}>
            {
              cardList.map((data, i) => {
                const { dataBelowCard, cardType, ...rest } = data;
                const key = data.key || i;
                return (
                  <Col span={8} className={classNames(`${clsPrefix}-col`)}>
                    <CapCustomCard key={key} type={cardType || type} {...rest} />
                    {
                      dataBelowCard && dataBelowCard
                    }
                  </Col>
                );
              })
            }
          </Row>
        )}
      </div>
    );
  }
}
