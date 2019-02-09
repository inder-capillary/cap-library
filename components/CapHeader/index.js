/**
 *
 * CapHeader
 *
 */

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import CapHeading from '../CapHeading';
import CapRow from '../CapRow';
import CapColumn from '../CapColumn';
const InlineHeading = styled(CapHeading)`
  display: inline-block;
`;
function CapHeader(props) {
  const CapHeadingwithDirection = props.descriptionPosition ? InlineHeading : CapHeading;
  return (
    <CapRow className="cap-header">
      {props.icon
      && (
        <CapColumn span={2}>
          {props.icon}
        </CapColumn>)
      }
      <CapColumn span={22}>
        <CapHeadingwithDirection type="h1" className="cap-header-titie">
          {props.title}
        </CapHeadingwithDirection>
        <CapHeadingwithDirection type="h6" className="cap-header-description">
          {props.description}
        </CapHeadingwithDirection>
      </CapColumn>
    </CapRow>
  );
}

CapHeader.propTypes = {
  title: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  description: propTypes.oneOfType([propTypes.string, propTypes.node]),
  descriptionPosition: propTypes.string,
  icon: propTypes.node,
};

export default CapHeader;
