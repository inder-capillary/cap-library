import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CapHeading from "../CapHeading";
import CapButton from "../CapButton";
import { CAP_SECONDARY } from "../styled/variables";
import repairImage from "../assets/images/repair.png";
import LocaleHoc from "../LocaleHoc";

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
  url,
  onClickReload,
}) => {
  let onClickReloadButton = onClickReload;
  if (!onClickReload) {
    onClickReloadButton = useCallback(() => {
      if (window.location.pathname.includes("somethingwentwrong")) {
        window.location = url;
      } else {
        window.location.reload();
      }
    }, []);
  }

  return (
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
        onClick={onClickReloadButton}
      >
        {reloadText}
      </CapButton>
    </SomethingWentWrongContainer>
  );
};

SomethingWentWrong.propTypes = {
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  descClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  reloadText: PropTypes.string,
  url: PropTypes.string,
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
  url: "",
};

export default LocaleHoc(SomethingWentWrong, { key: 'SomethingWentWrong' });
