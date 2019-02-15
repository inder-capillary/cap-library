/**
 *
 * CapCard
 *
 */

import React from 'react';
import './_capCard.scss';
import propTypes from 'prop-types';
import CapColumn from '../CapColumn';
import CapRow from '../CapRow';
// import styled from 'styled-components';


export function CapCard(props) {
  return (
    <div className={`cap-card ${props.hoverOption && 'cap-card-has-hover-option'}`}>
      <CapRow>
        <CapColumn span={4}>
          <div className="cap-card-title-icon">{props.icon}</div>
        </CapColumn>
        <CapColumn span={12} className="cap-card-title">
          {props.title}
        </CapColumn>
        <CapColumn span={6} className="cap-card-option">
          <CapRow type="flex" justify="end">
            <div className="cap-card-option-icon">
              {props.options}
            </div>
          </CapRow>
        </CapColumn>
      </CapRow>
      <CapRow>
        <CapColumn span={4}>
        </CapColumn>
        <CapColumn span={12} className="cap-card-content">
          {props.content}
        </CapColumn>
        <CapColumn span={12} className="cap-card-hover-option">
          {props.hoverOption}
        </CapColumn>
        <CapColumn span={4}>
        </CapColumn>
      </CapRow>
    </div>
  );
}

CapCard.propTypes = {
  icon: propTypes.node,
  title: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  content: propTypes.oneOfType([propTypes.string, propTypes.node]),
  options: propTypes.node,
  hoverOption: propTypes.node,
};

export function CapCardGrid(props) {
  return (
    <div className="cap-card-grid">
      {props.cardDataList.map((cardData) => <CapCard {...cardData} />)}
    </div>
  );
}

CapCardGrid.propTypes = {
  cardDataList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default {
  CapCard,
  CapCardGrid,
};
