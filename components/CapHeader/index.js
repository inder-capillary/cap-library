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
import CapLabel from '../CapLabel';
import './_capHeader.scss';

const InlineHeading = styled(CapHeading)`
  display: inline-block;
`;

const InlineLabel = styled(CapLabel)`
  display: inline-block;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const clsPrefix = 'cap-header-v2';

function CapHeader(props) {
  const { description, inline, title, size, withHiddenDescription } = props;
  const CapHeadingwithDirection = inline ? InlineHeading : CapHeading;
  const CapLabelwithDirection = inline ? InlineLabel : CapLabel;
  const descriptionClassName = classNames(`${clsPrefix}-description`, size, { hidden: withHiddenDescription });
  const titleClassName = classNames(`${clsPrefix}-title`);

  const titleDesc = () => {
    switch (size) {
      case "regular":
      case "small":
        return (
          <CapLabelwithDirection type="label1" className={descriptionClassName}>
            {description}
          </CapLabelwithDirection>
        );
      default:
        return (
          <CapHeadingwithDirection type="h6" className={descriptionClassName}>
            {description}
          </CapHeadingwithDirection>
        );
    }
  };

  const getTitleComponent = () => {
    switch (size) {
      case "regular":
        return (
          <CapHeadingwithDirection type="h3" className={titleClassName}>
            {title}
          </CapHeadingwithDirection>
        );
      case "small":
        return (
          <CapLabelwithDirection type="label2" className={titleClassName}>
            {title}
          </CapLabelwithDirection>
        );
      default:
        return (
          <CapHeadingwithDirection type="h1" className={titleClassName}>
            {title}
          </CapHeadingwithDirection>
        );
    }
  };

  return (
    <Flex>
      {
        props.prefix
      }
      <div>
        {getTitleComponent()}
        {(description || withHiddenDescription) && titleDesc()}
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
  withHiddenDescription: propTypes.bool,
};

export default CapHeader;
