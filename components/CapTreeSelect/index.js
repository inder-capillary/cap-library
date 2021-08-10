/**
*
* CapTreeSelect
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TreeSelect } from 'antd';
import styled from 'styled-components';
import CapRow from '../CapRow';
import CapHeading from '../CapHeading';
import CapLabel from '../CapLabel';
import CapTooltip from '../CapTooltip';
import CapInfoNote from '../CapInfoNote';

const clsPrefix = 'cap-tree-select-v2';

const CustomRow = styled(CapRow)`
  display: flex;
  align-items: center;

  &.ant-row {
    display: flex;
    align-items: center;
  }
`;


function CapTreeSelect(props) {
  const {
    treeData,
    className,
    headerTitle,
    headerDescription,
    treeSelectSideLabel,
    disabledTooltip,
    infoNote,
    noteText,
    infoNoteWidth,
    ...rest
  } = props;
  return (
    <CapRow className="cap-tree-select-v2-container">
      {headerTitle && (
        <CapHeading type="h3">
          {headerTitle}
        </CapHeading>
      )}
      {headerDescription && (
        <CapLabel type="label3" className="margin-t-4">
          {headerDescription}
        </CapLabel>
      )}
      {infoNote && (
        <CapInfoNote message={props.infoNote} style={{width: infoNoteWidth || '60%'}} />
      )}
      <CustomRow className="margin-t-4">
        {treeSelectSideLabel && (
          <CapHeading type="h4" className="margin-r-12">
            {treeSelectSideLabel}
          </CapHeading>
        )}
        {disabledTooltip ? (
          <CapTooltip title={disabledTooltip}>
            <span width="100%">
              <TreeSelect
                treeData={treeData}
                style={{width: '100%'}}
                {...rest}
                className={classNames(clsPrefix, className)}
              />
            </span>
          </CapTooltip>
        ) : (
          <TreeSelect
            treeData={treeData}
            {...rest}
            className={classNames(clsPrefix, className)}
          />
        )}

      </CustomRow>
    </CapRow>
  );
}

CapTreeSelect.propTypes = {
  treeData: PropTypes.array.isRequired,
};

export default CapTreeSelect;
