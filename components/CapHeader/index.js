/**
 *
 * CapHeader
 *
 */

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import CapHeading from '../CapHeading';
import './_capHeader.scss';

const InlineHeading = styled(CapHeading)`
  display: inline-block;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const clsPrefix = 'cap-header-v2';

const titleSize = (size) => {
  switch (size) {
    case "regular":
      return "h3";
    case "small":
      return "label2";
    default:
      return "h1";
  }
};
const titleDesc = (size) => {
  switch (size) {
    case "regular":
      return "label1";
    case "small":
      return "label1";
    default:
      return "h6";
  }
};
function CapHeader(props) {
  const { description, inline, title, size } = props;
  const CapHeadingwithDirection = inline ? InlineHeading : CapHeading;
  return (
    <Flex>
      {
        props.prefix
      }
      <div>
        <CapHeadingwithDirection type={titleSize(size)} className={classNames(`${clsPrefix}-title`)}>
          {title}
        </CapHeadingwithDirection>
        {description && (
          <CapHeadingwithDirection type={titleDesc(size)} className={classNames(`${clsPrefix}-description`, size)}>
            {description}
          </CapHeadingwithDirection>
        )}
      </div>
    </Flex>
  );
}

CapHeader.defaultProps = {
  inline: false,
  size: 'large',
};

CapHeader.propTypes = {
  title: propTypes.oneOfType([propTypes.string, propTypes.node]),
  description: propTypes.oneOfType([propTypes.string, propTypes.node]),
  inline: propTypes.bool,
  prefix: propTypes.node,
  size: propTypes.string,
};

export default CapHeader;
