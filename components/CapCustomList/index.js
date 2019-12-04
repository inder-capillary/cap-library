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


const CapCustomSubHeader = styled(CapHeader)`
  padding-bottom:16px;
`;
const CapCustomHeader = styled(CapHeader)`
  margin-bottom:24px;
`;

const CapRectangle = styled.div`
  width: 324px;
  height: 1px;
  background-color: #dfe2e7;
`;

function CapCustomList(props) {
  const { list } = props;
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
            title={props.title} />

          {list.map((pane) => (
            <CapButton
              className="category-select-btn"
              type="flat"
              onClick={() => loadSubList({levelName: pane.levelName, subCategory: pane.subCategory, levelvalueCount: pane.levelvalueCount})}
              style={{paddingLeft: '0px', display: 'contents'}}
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
            </CapButton>

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
                style={{ marginLeft: '-6px', paddingRight: '8px'}}
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
};

export default CapCustomList;
