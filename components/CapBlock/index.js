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
    deleteBlock,
    collapseBlock,
    expandBlock,
  } = props;

  const toggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  const getDeleteIcon = () => (
    <CapColumn data-type="rounded-icon" data-type-value="delete">
      <CapTooltip title={`${deleteBlock} ${componentName}`}>
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
        title={`${isCollapsed ? expandBlock : collapseBlock} ${componentName}`}
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
    <StyledDiv width={width} borderLeftColor={borderLeftColor}>
      {isDeleteEnabled ? getDeleteIcon() : null}
      {isCollapseEnabled ? getCollapseIcon() : null}
      {!isCollapsed ? props.children : null}
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
  deleteBlock: PropTypes.string,
  collapseBlock: PropTypes.string,
  expandBlock: PropTypes.string,
};

CapBlock.defaultProps = {
  width: "800px",
  borderLeftColor: CAP_SECONDARY.base,
  componentName: "path",
  deleteBlock: "",
  collapseBlock: "",
  expandBlock: "",
};

export default LocaleHoc(CapBlock, { key: "CapBlock" });
