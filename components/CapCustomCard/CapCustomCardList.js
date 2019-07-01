import React from 'react';
import classNames from 'classnames';
import CapCustomCard from './CapCustomCard';


const clsPrefix = "cap-custom-card-list";

export default class CapCustomCardList extends React.Component {
  render() {
    const { className, cardList, type } = this.props;
    return (
      <div className={classNames(clsPrefix, type, className)}>
        {cardList && (
          <div className={classNames(`${clsPrefix}-row`)}>
            {
              cardList.map((data, i) => {
                const { dataBelowCard, ...rest } = data;
                const key = data.key || i;
                return (
                  <div className={classNames(`${clsPrefix}-col`)}>
                    <CapCustomCard key={key} type={type} {...rest} />
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
