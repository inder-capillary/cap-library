import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CapLabel from "../CapLabel";
import CapTooltip from "../CapTooltip";
import CapRow from "../CapRow";
import LocaleHoc from "../LocaleHoc";

const CapTruncateList = (props) => {
  const {
    list,
    showNumber = 1,
    capLabelType,
    more: moreMsg,
    showTooltip,
    truncateToWidth,
  } = props;

  const visibleList = list.slice(0, showNumber);

  return (
    <CapRow type="flex" align="middle" className="cap-truncate-list">
      {visibleList.map((item, index) => (
        <CapRow
          key={item}
          className={classNames({
            "truncate-text": truncateToWidth,
            "first-item-container": true,
          })}
        >
          {index ? ", " : null}
          <CapLabel
            type={capLabelType}
            style={{
              marginRight: "4px",
            }}
            className={classNames({
              "truncate-text": truncateToWidth,
            })}
          >
            {item}
          </CapLabel>
        </CapRow>
      ))}
      {list.length > visibleList.length ? (
        <>
          {showTooltip ? (
            <CapTooltip title={list.slice(showNumber).join(", ")}>
              <CapLabel type={capLabelType}>
                {`+${list.length - visibleList.length} ${moreMsg}`}
              </CapLabel>
            </CapTooltip>
          ) : (
            <CapLabel type={capLabelType}>
              {`+${list.length - visibleList.length} ${moreMsg}`}
            </CapLabel>
          )}
        </>
      ) : null}
    </CapRow>
  );
};

CapTruncateList.defaultProps = {
  list: [],
  showNumber: 1,
  capLabelType: "label1",
  showTooltip: true,
  truncateToWidth: false,
};

CapTruncateList.propTypes = {
  list: PropTypes.array,
  showNumber: PropTypes.number,
  capLabelType: PropTypes.string,
  more: PropTypes.string,
  showTooltip: PropTypes.bool,
  truncateToWidth: PropTypes.bool,
};

export default LocaleHoc(CapTruncateList, { key: "CapTruncateList" });
