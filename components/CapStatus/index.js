import React from "react";
import PropTypes from 'prop-types';
import * as styledVars from "../styled/variables";
import CapRow from "../CapRow";
import CapLabel from "../CapLabel";
import { StatusDot } from "./style";

const { CAP_PRIMARY, CAP_SPACE_08, CAP_BLUE02, CAP_ORANGE02, CAP_RED03 } = styledVars;

const CapStatus = (props) => {
  const { type, color, text, height, width } = props;

  const typeColorMapping = {
    draft: CAP_BLUE02,
    awaitingApproval: CAP_ORANGE02,
    approved: CAP_PRIMARY.base,
    rejected: CAP_RED03,
  };

  return (
    <CapRow type="flex" align="middle">
      <StatusDot color={typeColorMapping[type] || color} height={height} width={width}></StatusDot>
      <CapLabel type="label2">{text}</CapLabel>
    </CapRow>
  );
};

CapStatus.defaultProps = {
  width: CAP_SPACE_08,
  height: CAP_SPACE_08,
  type: "",
  color: "",
  text: "",
};

CapStatus.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};

export default CapStatus;
