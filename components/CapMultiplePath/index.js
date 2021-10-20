import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import LocaleHoc from "../LocaleHoc";

import CapIcon from "../CapIcon";
import CapInput from "../CapInput";
import CapButton from "../CapButton";
import CapBlock from "../CapBlock";
import CapTooltip from "../CapTooltip";
import CapRow from "../CapRow";


import {
  MultiplePathRowWrapper,
  PathConnector,
  StyledPathName,
  StyledArrowIcon,
  StyledPathNameHolder,
  StyledAddPath,
  StyledPathInput,
} from "./styles";

import {
  ARROW_UP,
  ARROW_DOWN,
  HORIZONTAL,
  VERTICAL,
  BORDER_DASHED,
} from "./constants";

import * as StyledVars from "../styled/variables";
const { CAP_G04, CAP_G07 } = StyledVars;

const CapMultiplePath = (props) => {
  const {
    pathList,
    setPathList,
    capBlockWidth,
    addPathDisabled,
    addPathDisabledMessage,
    isToggleEnabled,
    defaultContents,
    ContentsRenderer,
    notUnique,
  } = props;

  /**
   * If any path name is being editted
   * -- Set state 'indexOfPathEditEnabled' with index of path being edited.
   *
   */
  const [indexOfPathEditEnabled, setIndexOfPathEditEnabled] = useState(-1);
  const [isPathNameDuplicateOrEmpty, setIsPathNameDuplicateOrEmpty] = useState(
    false
  );

  /**
   *
   * @param {*} e
   * If currently editing the pathname, and clicked outside the input box
   * setIndexOfPathEditEnabled to -1
   */
  const onPathNameClickOutside = (value) => {
    /** If clicked outside and PathNames are duplicate do not update state, if unique show div with updated pathname.*/
    if (!isPathNameDuplicateOrEmpty && value) {
      updatePathName(indexOfPathEditEnabled, value);
    }
    setIndexOfPathEditEnabled(-1);
    setIsPathNameDuplicateOrEmpty(false);
  };

  /**
   * Used to check if Pathnames are duplicate or not.
   * @returns true if the Pathnames are Duplicate
   */
  const checkDuplicateOrEmptyPathName = (currentPathName) => {
    const isPathNameEmpty = !currentPathName?.trim();
    if (isPathNameEmpty) {
      setIsPathNameDuplicateOrEmpty(true);
      return true;
    }

    /**
     * To check for duplicate, remove from current Path
     * from remaining path check if currentPathName is same as any other pathname.
     */
    const isPathNameDuplicate = pathList
      ?.filter((path, index) => index !== indexOfPathEditEnabled)
      ?.some((path) => path?.pathName === currentPathName);
    setIsPathNameDuplicateOrEmpty(isPathNameDuplicate);

    return isPathNameDuplicate;
  };

  /**
   * Add a path.
   */
  const addPath = () => {
    if (addPathDisabled) return;
    const temp = {
      contents: defaultContents,
      pathName: null,
      id: nanoid(10),
    };
    const newPathList = [...pathList, temp];
    setPathList(newPathList);
  };

  /**
   * Delete a path.
   */
  const deletePath = (index) => {
    const newPathList = JSON.parse(JSON.stringify(pathList));
    newPathList.splice(index, 1);
    setPathList(newPathList);
  };

  /**
   *
   * @param {*} btnType : ARROW_UP / ARROW_DOWN
   * @param {*} index : Path index
   * @returns checkDisabled is true for ARROW_UP of first Path & ARROW_DOWN of last path
   */
  const checkDisabled = (btnType, index) => {
    if (btnType === ARROW_UP && index === 0) return true;
    if (btnType === ARROW_DOWN && index === pathList.length - 1) return true;
    return false;
  };

  /**
   * Toggle Path position UP or DOWN based on btnType.
   * @param {*} btnType : either ARROW_UP or ARROW_DOWN
   * @param {*} index : index of path to toggle.
   */
  const togglePosition = (btnType, index) => {
    if (btnType === ARROW_UP) {
      if (index === 0) return;
      setPathList(swapArrayElements(index, index - 1, pathList));
      return;
    }
    if (btnType === ARROW_DOWN) {
      if (index === pathList.length - 1) return;
      setPathList(swapArrayElements(index, index + 1, pathList));
    }
  };

  /**
   * Swap Array element at ith position with element at jth position and returns
   * new Array.
   * @param {*} i
   * @param {*} j
   * @param {*} arr
   * @returns
   */

  const swapArrayElements = (i, j, arr) => {
    const newArr = JSON.parse(JSON.stringify(arr));
    newArr[j] = arr[i];
    newArr[i] = arr[j];
    return newArr;
  };

  /**
   *
   * @param {*} index
   * @returns Up and Down arrow icons to toggle position of Path component
   */
  const TogglePositionIcons = ({ index }) => {
    const onClickUp = () => togglePosition(ARROW_UP, index);
    const onClickDown = () => togglePosition(ARROW_DOWN, index);
    return (
      <>
        <StyledArrowIcon
          disabled={checkDisabled(ARROW_UP, index)}
          type={ARROW_UP}
          onClick={onClickUp}
        />
        <StyledArrowIcon
          disabled={checkDisabled(ARROW_DOWN, index)}
          type={ARROW_DOWN}
          onClick={onClickDown}
        />
      </>
    );
  };

  /**
   *
   * @param {*} type
   * @returns Returns a vertical or horizontal line to connect different components
   */
  const getPathConnector = (type) => {
    if (type === VERTICAL) {
      /**
       * <PathConnector> is basically a div
       * if isToggleEnabled, set a left margin of 32px
       * and give a width equal to 85% of CapBlockWidth
       */
      const marginLeft = isToggleEnabled ? "32px" : "0px";
      const width = parseInt(capBlockWidth * 0.85, 10);
      return (
        <PathConnector
          type={VERTICAL}
          height="44px"
          marginLeft={marginLeft}
          width={`${width}px`}
        />
      );
    }

    return <PathConnector type={HORIZONTAL} width="24px" />;
  };

  /**
   * onPathNameClick : If PathName is clicked. Display InputBox.TextArea instead of text.
   * setIndexOfPathEditEnabled with index of path.
   * @param {*} index
   */
  const onPathNameClick = (index) => {
    setIndexOfPathEditEnabled(index);
  };

  /**
   * updatePathName : OnChange handler for updating pathname.
   * @param {*} index
   * @param {*} value
   */
  const updatePathName = (index, value) => {
    const newPaths = JSON.parse(JSON.stringify(pathList));
    newPaths[index].pathName = value;
    setPathList(newPaths);
    setIsPathNameDuplicateOrEmpty(false);
  };

  /**
   * getPathNameOrEdit :
   * If Pathname is currently being edited (when index === indexOfPathEditEnabled),
   * then display a InputBox
   * else
   * Display Text
   * @param {*} index
   */
  const getPathNameOrEdit = (index) => {
    if (indexOfPathEditEnabled === index) {
      return (
        <StyledPathInput hasError={isPathNameDuplicateOrEmpty}>
          <CapInput.TextArea
            path-name-edit="true"
            onChange={(e) => {
              checkDuplicateOrEmptyPathName(e.target.value);
            }}
            style={{ width: "80px" }}
            autosize={{
              minRows: 1,
            }}
            errorMessage={isPathNameDuplicateOrEmpty ? notUnique : null}
            onBlur={(e) => onPathNameClickOutside(e.currentTarget.value)}
            autoFocus
          />
        </StyledPathInput>
      );
    }
    const onClick = () => onPathNameClick(index);
    return (
      <StyledPathNameHolder>
        <CapTooltip title={pathList[index]?.pathName}>
          <CapRow path-name-edit="false" onClick={onClick}>
            {pathList[index].pathName || getPathNamePlaceHolder(index)}
          </CapRow>
        </CapTooltip>
      </StyledPathNameHolder>
    );
  };

  /**
   *
   * @returns A component which can be used to add another Path at end
   */
  const getAddPathComponent = () => {
    /**
     * set marginLeft equal to 85% of capBlockWidth
     * if isToggleEnabled add extra 32px marginLeft
     */
    let marginLeft = parseInt(capBlockWidth * 0.85, 10);
    marginLeft = isToggleEnabled ? marginLeft + 32 : marginLeft;

    /**
     * After the last vertical line, the structure is as follows:
     * --------Path n--------->
     * horizontalLineWidth, denotes the width of two horizontal lines,
     * Remaining 15% capBlockWidth is divided equally into two horizontal lines
     * and 24px are added to each.(Since all horizontal lines above the last had 24px width)
     */
    const horizontalLineWidth = parseInt(capBlockWidth * 0.075 + 24, 10);

    return (
      <StyledAddPath marginLeft={`${marginLeft}px`}>
        <PathConnector
          type={VERTICAL}
          borderType={BORDER_DASHED}
          height="44px"
          borderWidth="2px"
        />
        <CapTooltip title={addPathDisabledMessage}>
          <span className="button-disabled-tooltip-wrapper">
            <CapButton
              type="flat"
              isAddBtn
              style={{ transform: "translateX(-50%)" }}
              onClick={addPath}
              disabled={addPathDisabled}
            >
              Add path
            </CapButton>
          </span>
        </CapTooltip>

        <PathConnector
          type={VERTICAL}
          borderType={BORDER_DASHED}
          height="44px"
          borderWidth="2px"
        />
        <CapRow
          style={{
            display: "flex",
            alignItems: "center",
            transform: "translateY(-50%)",
          }}
        >
          <PathConnector
            type={HORIZONTAL}
            borderType={BORDER_DASHED}
            width={`${horizontalLineWidth}px`}
            borderWidth="2px"
          />
          <CapRow style={{ width: "80px", textAlign: "center" }}>
            {pathList.length === 1 ? "No" : `Path ${pathList.length + 1}`}
          </CapRow>
          <PathConnector
            type={HORIZONTAL}
            borderType={BORDER_DASHED}
            width={`${horizontalLineWidth}px`}
            borderWidth="2px"
          />

          <CapIcon
            type="chevron-right"
            style={{
              marginLeft: "-12px",
              color: CAP_G07,
            }}
          />
        </CapRow>
      </StyledAddPath>
    );
  };

  /**
   * returns PathNamePlaceHolder : if 1 Path : return Yes,
   * if more than 1 path : return Path 1, Path 2 and so on.
   */
  const getPathNamePlaceHolder = (index) => {
    if (index === 0 && pathList.length === 1) return "Yes";
    return `Path ${index + 1}`;
  };

  /**
   * After CapBlock give a Arrow like structure with PathName details in between.
   * @param {*} index
   */
  const getEditOrDisplayPathName = (index) => (
    <StyledPathName>
      <CapRow
        style={{ display: "flex", justifyContent: "center", color: CAP_G04 }}
      >
        {pathList[index].pathName || indexOfPathEditEnabled === index
          ? getPathNamePlaceHolder(index)
          : null}
      </CapRow>
      <CapRow style={{ display: "flex", alignItems: "center" }}>
        {getPathConnector(HORIZONTAL)}
        {getPathNameOrEdit(index)}
        {getPathConnector(HORIZONTAL)}
        <CapIcon
          type="chevron-right"
          style={{
            marginLeft: "-12px",
            marginBotton: "1px",
            color: CAP_G07,
          }}
        />
      </CapRow>
    </StyledPathName>
  );

  /**
   * Gives skeleton structure using CapBlock.
   * CapBlock displays contents inside it using 'ContentsRenderer' received from parent.
   * @param {*} index
   * @param {*} path
   * @returns A Rectangle shaped Path Component.
   */
  const getPathComponent = (index) => (
    <CapBlock
      isDeleteEnabled={pathList.length > 1}
      deleteCallback={() => deletePath(index)}
      isCollapseEnabled
      width={`${capBlockWidth}px`}
    >
      <ContentsRenderer
        pathList={pathList}
        setPathList={setPathList}
        pathIndex={index}
      />
    </CapBlock>
  );
  return (
    <>
      {pathList.map((path, index) => (
        <CapRow key={path.id}>
          <MultiplePathRowWrapper>
            {isToggleEnabled ? <TogglePositionIcons index={index} /> : null}
            {getPathComponent(index)}
            {getEditOrDisplayPathName(index)}
          </MultiplePathRowWrapper>
          {index !== pathList.length - 1 ? getPathConnector(VERTICAL) : null}
        </CapRow>
      ))}
      {getAddPathComponent()}
    </>
  );
};

CapMultiplePath.propTypes = {
  pathList: PropTypes.array,
  setPathList: PropTypes.func,
  capBlockWidth: PropTypes.number,
  addPathDisabled: PropTypes.bool,
  addPathDisabledMessage: PropTypes.any,
  isToggleEnabled: PropTypes.bool,
  defaultContents: PropTypes.any,
  ContentsRenderer: PropTypes.any,
  notUnique: PropTypes.string,
};

CapMultiplePath.defaultProps = {
  isToggleEnabled: true,
  addPathDisabled: false,
  capBlockWidth: 676,
  notUnique: "",
};

export default LocaleHoc(CapMultiplePath, { key: "CapMultiplePath" });
