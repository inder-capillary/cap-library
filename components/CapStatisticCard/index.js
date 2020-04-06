/**
*
* CapStatisticCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import CapRow from '../CapRow';
import CapColumn from '../CapColumn';
import CapLabel from '../CapLabel';
import CapDivider from '../CapDivider';
import CapHeading from '../CapHeading';

import './_capStatisticCard.scss';
import {
  CAP_SPACE_12,
  CAP_SPACE_20,
} from '../styled/variables';
function CapStatisticCard(props) {
  const { statsItems, colSpan, type } = props;

  return (
    <CapRow className="stats-card">
      {!!statsItems.length && type && (
        <CapColumn span={3} className="stats-item" key="stats-heading">
          <CapRow style={{ paddingBottom: '14px' }} />
          <CapDivider style={{ marginBottom: CAP_SPACE_12, marginTop: CAP_SPACE_12 }} />
          <CapRow className="stats-val"><CapLabel type="label1">{type}</CapLabel></CapRow>
          <CapDivider style={{ marginBottom: CAP_SPACE_12, marginTop: CAP_SPACE_12 }} />
        </CapColumn>
      )}
      {statsItems.map((item, index) => (
        <CapColumn span={type && index % 2 === 0 ? 4 : colSpan || 4} className="stats-item" key={`stats-${item.text}-${index}`}>
          <CapRow className="stats-text" style={{paddingRight: type && index % 2 === 0 ? CAP_SPACE_20 : '10px'}}>
            {type ? <CapLabel type="label1" className="truncate-text" title={item.text} style={{textAlign: 'right'}}>{item.text}</CapLabel>
              : <CapHeading type="h6">{item.text}</CapHeading>
            }
          </CapRow>
          {type && <CapDivider style={{ marginBottom: CAP_SPACE_12, marginTop: CAP_SPACE_12 }} />}
          <CapRow className="stats-val" style={{paddingRight: type && index % 2 === 0 ? CAP_SPACE_20 : '10px'}}>
            {type ? <CapLabel type="label1" style={{float: 'right'}}>{item.value}</CapLabel>
              : <CapHeading type="h3">{item.value}</CapHeading>}
          </CapRow>
          {item.subText
            && (
              <CapRow className="stats-sub-text">
                {type ? <CapLabel type="label1">{item.subText}</CapLabel>
                  : <CapHeading type="h6">{item.subText}</CapHeading>}
              </CapRow>
            )
          }
          {type && <CapDivider style={{ marginBottom: CAP_SPACE_12, marginTop: CAP_SPACE_12 }} />}
        </CapColumn>
      ))}
    </CapRow>
  );
}

CapStatisticCard.propTypes = {
  statsItems: PropTypes.array,
  colSpan: PropTypes.number,
  type: PropTypes.string,
};

export default CapStatisticCard;
