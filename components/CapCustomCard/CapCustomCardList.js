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
                const key = data.key || i;
                return (
                  <Col span={8} className={classNames(`${clsPrefix}-col`)}>
                    <CapCustomCard key={key} type={type} {...data} />
                    {
                      data.dataBelowCard && data.dataBelowCard
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
