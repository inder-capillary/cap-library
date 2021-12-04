import React, { useState } from "react";
import PropTypes from "prop-types";
import LocaleHoc from "../LocaleHoc";

import CapIcon from "../CapIcon";
import CapTooltip from "../CapTooltip";
import CapColumn from "../CapColumn";


import { StyledDiv } from "./styles";
import * as StyledVars from "../styled/variables";
const { CAP_SECONDARY } = StyledVars;

const CapBlock = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const {
    width,
    borderLeftColor,
    isDeleteEnabled,
    deleteCallback,
    isCollapseEnabled,
    componentName,
    className,
    /**Below fields are added in translations/en.js */
    deleteBlockMsg,
    collapseBlockMsg,
    expandBlockMsg,
    pathBlockText,
  } = props;

  const toggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  const getDeleteIcon = () => (
    <CapColumn data-type="rounded-icon" data-type-value="delete">
      <CapTooltip title={`${deleteBlockMsg} ${componentName}`}>
        <CapIcon
          type="delete"
          onClick={deleteCallback}
          withbackground
          size="s"
        />
      </CapTooltip>
    </CapColumn>
  );

  const getCollapseIcon = () => (
    <CapColumn data-type="rounded-icon" data-type-value="collapse">
      <CapTooltip
        title={`${isCollapsed ? expandBlockMsg : collapseBlockMsg} ${componentName}`}
      >
        <CapIcon
          type={isCollapsed ? "chevron-right" : "chevron-up"}
          onClick={toggleCollapse}
          withbackground
          size="s"
        />
      </CapTooltip>
    </CapColumn>
  );

  return (
    <StyledDiv width={width} borderLeftColor={borderLeftColor} className={className}>
      {isDeleteEnabled ? getDeleteIcon() : null}
      {isCollapseEnabled ? getCollapseIcon() : null}
      {!isCollapsed ? props.children : null}
      {pathBlockText}
    </StyledDiv>
  );
};

CapBlock.propTypes = {
  width: PropTypes.string,
  borderLeftColor: PropTypes.string,
  isDeleteEnabled: PropTypes.bool,
  deleteCallback: PropTypes.func,
  isCollapseEnabled: PropTypes.bool,
  componentName: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  /**Below fields are added in translations/en.js */
  deleteBlockMsg: PropTypes.string,
  collapseBlockMsg: PropTypes.string,
  expandBlockMsg: PropTypes.string,
  pathBlockText: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
};

CapBlock.defaultProps = {
  width: "800px",
  borderLeftColor: CAP_SECONDARY.base,
  componentName: "path",
  deleteBlockMsg: "",
  collapseBlockMsg: "",
  expandBlockMsg: "",
};

export default LocaleHoc(CapBlock, { key: "CapBlock" });
