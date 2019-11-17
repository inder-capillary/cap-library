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
                const { dataBelowCard, cardType, prefix, ...rest } = data;
                const key = data.key || i;
                return (
                  <div className={classNames(`${clsPrefix}-col`)}>
                    {prefix && prefix}
                    <CapCustomCard key={key} type={cardType || type} prefix={prefix} {...rest} />
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
