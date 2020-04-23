/**
*
* CapStatisticCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import CapRow from '../CapRow';
import CapLabel from '../CapLabel';
import CapDivider from '../CapDivider';
import CapHeading from '../CapHeading';

import './_capStatisticCard.scss';
import {
  CAP_SPACE_12,
} from '../styled/variables';
function CapStatisticCard(props) {
  const { statsItems, width, type, showHeader } = props;
  const customDivider = type ? (<CapDivider style={{ marginTop: CAP_SPACE_12, marginBottom: CAP_SPACE_12 }} />) : (<></>);
  return (
    <CapRow className="stats-card">
      {!!statsItems.length && type && (
        <div style={{width: '16%', display: showHeader ? 'inline-grid' : 'inline-table'}} key="stats-heading">
          {showHeader
          && <>
            <div style={{ marginBottom: '-4px'}} />
            {customDivider}
          </>}
          <CapRow className="stats-val">
            <CapLabel type="label1">{type}</CapLabel>
          </CapRow>
          {customDivider}
        </div>
      )}
      {statsItems.map((item, index) => (
        <div style={{width: width || '20%'}} className="stats-item" key={`stats-${item.text}-${index}`}>
          {showHeader
          && <>
              {type ? (
                <CapLabel
                  type="label1"
                  className="truncate-text stats-text"
                  title={item.text}
                  style={{textAlign: 'right'}}>
                  {item.text}

                </CapLabel>
              )
                : <CapHeading type="h6" className="stats-text">{item.text}</CapHeading>
              }
            {customDivider}
          </>
          }
          <CapRow className="stats-val">
            {type ? <CapLabel type="label1" style={{float: 'right'}}>{item.value}</CapLabel>
              : <CapHeading type="h3">{item.value}</CapHeading>}
          </CapRow>
          {item.subText
            && (
              <CapRow className="stats-sub-text">
                <CapLabel type={type ? "label1" : "label7"}>{item.subText}</CapLabel>
              </CapRow>
            )
          }
          {customDivider}
        </div>
      ))}
    </CapRow>
  );
}

CapStatisticCard.propTypes = {
  statsItems: PropTypes.array,
  width: PropTypes.string,
  type: PropTypes.string,
  showHeader: PropTypes.bool,
};

export default CapStatisticCard;
