/**
*
* CapStatisticCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import CapRow from '../CapRow';
import CapColumn from '../CapColumn';
import CapHeading from '../CapHeading';
import './_capStatisticCard.scss';

function CapStatisticCard(props) {
  const { statsItems, colSpan } = props;
  return (
    <CapRow className="stats-card">
      {statsItems.map((item, index) => (
        <CapColumn span={colSpan || 4} className="stats-item" key={`stats-${item.text}-${index}`}>
          <CapRow className="stats-text"><CapHeading type="h6">{item.text}</CapHeading></CapRow>
          <CapRow className="stats-val"><CapHeading type="h3">{item.value}</CapHeading></CapRow>
          {item.subText && <CapRow className="stats-sub-text"><CapHeading type="h6">{item.subText}</CapHeading></CapRow>}
        </CapColumn>
      ))}
    </CapRow>
  );
}

CapStatisticCard.propTypes = {
  statsItems: PropTypes.array,
  colSpan: PropTypes.number,
};

export default CapStatisticCard;
