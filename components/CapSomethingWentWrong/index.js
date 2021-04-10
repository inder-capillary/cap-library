import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CapHeading from "../CapHeading";
import CapButton from "../CapButton";
import { CAP_SECONDARY } from "../styled/variables";
import repairImage from "../assets/images/repair.png";

const SomethingWentWrongContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const SomethingWentWrong = ({
  className,
  titleClassName,
  descClassName,
  buttonClassName,
  title,
  description,
  reloadText,
  onClickReload,
}) => (
  <SomethingWentWrongContainer className={className}>
    <img src={repairImage} alt="" />
    <CapHeading type="h3" className={titleClassName}>
      {title}
    </CapHeading>
    <CapHeading type="h5" className={descClassName}>
      {description}
    </CapHeading>
    <CapButton
      type="link"
      className={buttonClassName}
      style={{ color: CAP_SECONDARY.base }}
      onClick={onClickReload}
    >
      {reloadText}
    </CapButton>
  </SomethingWentWrongContainer>
);

SomethingWentWrong.propTypes = {
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  descClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  reloadText: PropTypes.string,
  onClickReload: PropTypes.func,
};

SomethingWentWrong.defaultProps = {
  className: "",
  titleClassName: "",
  descClassName: "",
  buttonClassName: "",
  title: "",
  description: "",
  reloadText: "",
  onClickReload: () => {},
};

export default SomethingWentWrong;
