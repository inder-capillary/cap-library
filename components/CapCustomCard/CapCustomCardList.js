import React from 'react';
import classNames from 'classnames';
import CapCustomCard from './CapCustomCard';


const clsPrefix = "cap-custom-card-list";

export default class CapCustomCardList extends React.Component {
  render() {
    const { className, cardList, type } = this.props;
    return (
      <div className={classNames(clsPrefix, type, className, )}>
        {cardList && (
          <div className={classNames(`${clsPrefix}-row`)}>
            {
              cardList.map((data, i) => {
                const { dataBelowCard, cardType, cardTop, ...rest } = data;
                const key = data.key || i;
                return (
                  <div className={classNames(`${clsPrefix}-col`)}>
                    {cardTop && cardTop}
                    <CapCustomCard key={key} type={cardType || type} cardTop={cardTop} {...rest} />
                    {
                      dataBelowCard && dataBelowCard
                    }
                  </div>
                );
              })
            }
          </div>
        )}
      </div>
    );
  }
}
