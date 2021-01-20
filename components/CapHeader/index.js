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
  const { description, inline, title, size, withHiddenDescription, className, titleClass, descriptionClass } = props;
  const CapHeadingwithDirection = inline ? InlineHeading : CapHeading;
  const CapLabelwithDirection = inline ? InlineLabel : CapLabel;
  const descriptionClassName = classNames(`${clsPrefix}-description`, `${clsPrefix}-${size}`, { hidden: withHiddenDescription }, descriptionClass);
  const titleClassName = classNames(`${clsPrefix}-title`, titleClass);

  const titleDesc = () => {
    const marginLeft = inline ? '8px' : 0;
    switch (size) {
      case "regular":
      case "label1":
      case "small":
        return (
          <CapLabelwithDirection style={{ marginLeft }} type="label1" className={descriptionClassName}>
            {description}
          </CapLabelwithDirection>
        );
      case "label":
      case "greyed":
        return (
          <CapLabelwithDirection style={{ marginLeft }} type="label3" className={descriptionClassName}>
            {description}
          </CapLabelwithDirection>
        );
      default:
        return (
          <CapHeadingwithDirection style={{ marginLeft }} type="label1" className={descriptionClassName}>
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
      case "label":
        return (
          <CapHeadingwithDirection type={description ? 'h3' : 'h4'} className={titleClassName}>
            {title}
          </CapHeadingwithDirection>
        );
      case "label1":
        return (
          <CapHeadingwithDirection type="h4" className={titleClassName}>
            {title}
          </CapHeadingwithDirection>
        );
      case "greyed":
        return (
          <CapHeadingwithDirection type="h6" className={titleClassName}>
            {title}
          </CapHeadingwithDirection>
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
    <Flex className={classNames(clsPrefix, className)}>
      {
        props.prefix
      }
      <div className="title-desc-container">
        {getTitleComponent()}
        {(description || withHiddenDescription) && titleDesc()}
      </div>
      {
        props.suffix
      }
    </Flex>
  );
}

CapHeader.defaultProps = {
  inline: false,
  size: 'large',
  titleClass: '',
  descriptionClass: '',
};

CapHeader.propTypes = {
  title: propTypes.oneOfType([propTypes.string, propTypes.node]),
  description: propTypes.oneOfType([propTypes.string, propTypes.node]),
  inline: propTypes.bool,
  prefix: propTypes.node,
  suffix: propTypes.node,
  size: propTypes.string,
  withHiddenDescription: propTypes.bool,
  className: propTypes.string,
  titleClass: propTypes.string,
  descriptionClass: propTypes.string,
};

export default CapHeader;
