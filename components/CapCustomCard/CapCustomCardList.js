import React from 'react';
import ClassNames from 'classnames';
import CapCustomCard from './CapCustomCard';

export default class CapCustomCardList extends React.Component {
  render() {
    const { className, cardList, type } = this.props;
    return (
      <div className={ClassNames("cap-custom-card-list", type, className)}>
        {cardList && (
          cardList.map((data, i) => {
            const key = data.key || i;
            return (
              <CapCustomCard key={key} type={type} {...data} />
            );
          }))}
      </div>
    );
  }
}
