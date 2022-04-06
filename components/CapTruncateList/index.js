import React from "react";
import PropTypes from "prop-types";
import CapLabel from "../CapLabel";
import CapTooltip from "../CapTooltip";
import CapRow from "../CapRow";
import LocaleHoc from "../LocaleHoc";

const CapTruncateList = (props) => {
  const { list, showNumber, capLabelType, more: moreMsg } = props;

  const visibleList = list.slice(0, showNumber);

  return (
    <CapRow type="flex" align="middle">
      {visibleList.map((item, index) => (
        <CapRow key={item}>
          {index ? ", " : null}
          <CapLabel
            type={capLabelType}
            style={{
              marginRight: "4px",
            }}
          >
            {item}
          </CapLabel>
        </CapRow>
      ))}
      {list.length > visibleList.length ? (
        <>
          <CapTooltip title={list.slice(showNumber).join(", ")}>
            <CapLabel type={capLabelType}>
              {`+${list.length - visibleList.length} ${moreMsg}`}
            </CapLabel>
          </CapTooltip>
        </>
      ) : null}
    </CapRow>
  );
};

CapTruncateList.defaultProps = {
  list: [],
  showNumber: 1,
  capLabelType: "label1",
};

CapTruncateList.propTypes = {
  list: PropTypes.array,
  showNumber: PropTypes.number,
  capLabelType: PropTypes.string,
  more: PropTypes.string,
};

export default LocaleHoc(CapTruncateList, { key: "CapTruncateList" });
