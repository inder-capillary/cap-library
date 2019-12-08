/**
*
* CapCustomList
*
*/

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import CapButton from '../CapButton';
import CapHeader from '../CapHeader';
import CapIcon from '../CapIcon';
import './_capCustomList.scss';
import CapHeading from '../CapHeading';
import {CAP_SPACE_16, CAP_SPACE_24, CAP_G07, CAP_SPACE_08} from "../styled/variables";
import CapSpin from '../CapSpin';

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
const {CapHeadingSpan} = CapHeading;

function CapCustomList(props) {
  const { list, className, loader, getList, contentId, type } = props;
  const [subList, loadSubList] = useState(
    {}
  );
  const [totalCategoryCount, setTotalCategoryCount] = useState(0);
  const {subCategory, levelName, levelValueCount} = subList;

  const calculateTotalCategoryCount = (data) => {
    setTotalCategoryCount(data.reduce((a, b) => b.subCategory.length + a, 0));
  };

  useEffect(() => {
    getList(contentId, type);
  }, [loader]);

  useEffect(() => {
    calculateTotalCategoryCount(list);
  }, [list]);
  return (
    <CapSpin spinning={loader}>
      {isEmpty(subCategory)
        ? (
          <React.Fragment>
            <CapHeadingSpan
              type="h3"
              className={classNames(clsPrefix, className)}
              style={{marginBottom: CAP_SPACE_24, display: 'inline-block'}}>
              {props.title}
            </CapHeadingSpan>
            {totalCategoryCount > 0 && (
              <CapHeadingSpan type="label5">
          (
                {totalCategoryCount}
)
              </CapHeadingSpan>
            )}
            {list.map((pane) => (
              <CapCustomButton
                className="category-select-btn"
                type="flat"
                onClick={() => loadSubList({levelName: pane.levelName, subCategory: pane.subCategory, levelValueCount: pane.levelValueCount})}
              >
                <CapCustomSubHeader
                  size="label1"
                  title={pane.levelName}
                  description={pane.levelValueCount}
                  suffix={(
                    <CapIcon
                      className="category-select-btn-suffix"
                      type="chevron-right"
                    />
                  )}
                />
              </CapCustomButton>

            ))}

          </React.Fragment>
        )
        : (
          <React.Fragment>
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
              description={levelValueCount}
            />
            {subCategory.map((category) => (
              <React.Fragment>
                <CapRectangle />
                <CapHeading
                  style={{padding: '13px 0px 13px 0px'}}
                  type="label2"
                >
                  {category}

                </CapHeading>

              </React.Fragment>
            ))
            }
            <CapRectangle />
          </React.Fragment>
        )
      }
    </CapSpin>

  );
}


CapCustomList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  className: PropTypes.string,
  loader: PropTypes.bool,
  contentId: PropTypes.string,
  getList: PropTypes.func,
  type: PropTypes.string,
};

export default CapCustomList;
