/**
*
* CapCustomList
*
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import CapButton from '../CapButton';
import CapHeader from '../CapHeader';
import CapIcon from '../CapIcon';
import './_capCustomList.scss';
import CapHeading from '../CapHeading';
import {CAP_SPACE_16, CAP_SPACE_24, CAP_G07, CAP_SPACE_08} from "../styled/variables";

const classNames = require('classnames');
const CapCustomSubHeader = styled(CapHeader)`
  padding-bottom:${CAP_SPACE_16};
`;
const CapCustomHeader = styled(CapHeader)`
  margin-bottom:${CAP_SPACE_24};
`;

const CapRectangle = styled.div`
  width: 324px;
  height: 1px;
  background-color: ${CAP_G07};
`;


const CapCustomButton = styled(CapButton)`
  padding-left: 0px;
  display: contents;
  text-align: left;
`;
const clsPrefix = 'cap-customList-v2';
function CapCustomList(props) {
  const { list, className } = props;
  const [subList, loadSubList] = useState(
    {}
  );
  const {subCategory, levelName, levelvalueCount} = subList;
  return (
    <>
      {isEmpty(subCategory)
        ? <>
          <CapCustomHeader
            size="regular"
            title={props.title}
            className={classNames(clsPrefix, className)} />

          {list.map((pane) => (
            <CapCustomButton
              className="category-select-btn"
              type="flat"
              onClick={() => loadSubList({levelName: pane.levelName, subCategory: pane.subCategory, levelvalueCount: pane.levelvalueCount})}
            >
              <CapCustomSubHeader
                size="label1"
                title={pane.levelName}
                description={pane.levelvalueCount}
                suffix={(
                  <CapIcon
                    className="category-select-btn-suffix"
                    type="chevron-right"
                  />
                )}
              />
            </CapCustomButton>

          ))}

          </>
        : <>
          <CapCustomHeader
            size="regular"
            title={levelName}
            prefix={(
              <CapIcon
                type="back"
                onClick={() => { loadSubList({}); }}
                style={{ marginLeft: '-6px', paddingRight: CAP_SPACE_08}}
              />
            )}
            description={levelvalueCount}
          />
          {subCategory.map((category) => (
            <>
              <CapRectangle />
              <CapHeading
                style={{padding: '13px 0px 13px 0px'}}
                type="label2"
              >
                {category}

              </CapHeading>

            </>
          ))
          }
          <CapRectangle />
        </>
      }
      </>

  );
}


CapCustomList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  className: PropTypes.string,
};

export default CapCustomList;
