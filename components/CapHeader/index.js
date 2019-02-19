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

const clsPrefix = 'cap-header';

function CapHeader(props) {
  const { description, inline, title, size } = props;
  const CapHeadingwithDirection = inline ? InlineHeading : CapHeading;
  return (
    <Flex>
      {
        props.prefix
      }
      <div>
        <CapHeadingwithDirection type={size === 'regular' ? "h3" : "h1"} className={classNames(`${clsPrefix}-title`)}>
          {title}
        </CapHeadingwithDirection>
        {description && (
          <CapHeadingwithDirection type={size === 'regular' ? "label1" : "h6"} className={classNames(`${clsPrefix}-description`, size)}>
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
  title: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  description: propTypes.oneOfType([propTypes.string, propTypes.node]),
  inline: propTypes.bool,
  prefix: propTypes.node,
  size: propTypes.string,
};

export default CapHeader;
