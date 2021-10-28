import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import LocaleHoc from "../LocaleHoc";

import CapInput from "../CapInput";
import CapButton from "../CapButton";
import CapBlock from "../CapBlock";
import CapTooltip from "../CapTooltip";
import CapRow from "../CapRow";
import CapModal from "../CapModal";

import {
  MultiplePathRowWrapper,
  PathConnector,
  StyledArrowIcon,
  StyledPathNamePlaceHolder,
  StyledPathNameHolder,
  StyledAddPath,
  StyledPathInput,
  StyledCapIcon,
} from "./styles";

import {
  ARROW_UP,
  ARROW_DOWN,
  HORIZONTAL,
  VERTICAL,
  BORDER_DASHED,
  PATH_NAME_MAX_LENGTH,
} from "./constants";

import * as StyledVars from "../styled/variables";
import CapLabel from "../CapLabel";
const { CapLabelInline } = CapLabel;
const { CAP_G07 } = StyledVars;

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
    /**Below intl fields are added in translations/en.js */
    notUniqueMsg,
    deleteButtonTextMsg,
    deleteConfirmationWarningMsg,
    deleteConfirmationTextMsg,
    deleteConfirmationTitleMsg,
    yesMsg,
    noMsg,
    pathMsg,
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
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deletePathIndex, setDeletePathIndex] = useState(null);
  const [tempPathName, setTempPathName] = useState(null);
  /**
   *
   * @param {*} e
   * If currently editing the pathname, and clicked outside the input box
   * setIndexOfPathEditEnabled to -1
   */
  const onPathNameClickOutside = () => {
    /** If clicked outside and PathNames are duplicate do not update state, if unique show div with updated pathname.*/
    if (!isPathNameDuplicateOrEmpty && tempPathName) {
      updatePathName(indexOfPathEditEnabled, tempPathName);
    }
    setTempPathName(null);
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

  const onDeleteOk = () => {
    deletePath(deletePathIndex);
    setDeletePathIndex(null);
    setShowDeleteConfirmation(false);
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
    const onClick = () => onPathNameClick(index);
    const onTextAreaChange = (e) => {
      if (e.target.value.length <= PATH_NAME_MAX_LENGTH) {
        setTempPathName(e.target.value);
        checkDuplicateOrEmptyPathName(e.target.value);
      }
    };
    const style = { marginTop: indexOfPathEditEnabled === index && "-16px" };
    return (
      <CapRow style={style}>
        <StyledPathNamePlaceHolder>
          {pathList[index].pathName || indexOfPathEditEnabled === index
            ? getPathNamePlaceHolder(index)
            : null}
        </StyledPathNamePlaceHolder>
        {indexOfPathEditEnabled === index ? (
          <StyledPathInput hasError={isPathNameDuplicateOrEmpty}>
            <CapInput.TextArea
              path-name-edit="true"
              value={tempPathName}
              onChange={onTextAreaChange}
              style={{ width: "80px" }}
              autosize={{
                minRows: 1,
                maxRows: 5,
              }}
              errorMessage={isPathNameDuplicateOrEmpty ? notUniqueMsg : null}
              onBlur={onPathNameClickOutside}
              onFocus={() => {
                setTempPathName(pathList[index]?.pathName);
              }}
              autoFocus
              showCount={false}
            />
          </StyledPathInput>
        ) : (
          <StyledPathNameHolder>
            <CapTooltip title={pathList[index]?.pathName}>
              <CapRow path-name-edit="false" onClick={onClick}>
                {pathList[index].pathName || getPathNamePlaceHolder(index)}
              </CapRow>
            </CapTooltip>
          </StyledPathNameHolder>
        )}
      </CapRow>
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
          type="flex"
          align="middle"
          style={{
            transform: "translateY(-50%)",
          }}
        >
          {/**
           * If addPathDisabled, show only horizontal line.
           */
            addPathDisabled ? (
              <PathConnector
                type={HORIZONTAL}
                borderType={BORDER_DASHED}
                width={`${horizontalLineWidth * 2 + 80}px`}
                borderWidth="2px"
              />
            ) : (
            <>
              <PathConnector
                type={HORIZONTAL}
                borderType={BORDER_DASHED}
                width={`${horizontalLineWidth}px`}
                borderWidth="2px"
              />
              <StyledPathNameHolder style={{textAlign: 'center'}}>
                {pathList.length === 1 ? noMsg : `${pathMsg} ${pathList.length + 1}`}
              </StyledPathNameHolder>
              <PathConnector
                type={HORIZONTAL}
                borderType={BORDER_DASHED}
                width={`${horizontalLineWidth}px`}
                borderWidth="2px"
              />
            </>
            )}
          <StyledCapIcon
            type="chevron-right"
            color={CAP_G07}
            style={{transform: 'translateX(-50%)'}}
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
    if (index === 0 && pathList.length === 1) return yesMsg;
    return `${pathMsg} ${index + 1}`;
  };

  /**
   * After CapBlock give a Arrow like structure with PathName details in between.
   * @param {*} index
   */
  const getEditOrDisplayPathName = (index) => (
    <CapRow type="flex" align="middle">
      {getPathConnector(HORIZONTAL)}
      {getPathNameOrEdit(index)}
      {getPathConnector(HORIZONTAL)}
      <StyledCapIcon
        color={CAP_G07}
        type="chevron-right"
        style={{transform: 'translateX(-50%)'}}
      />
    </CapRow>
  );

  /**
   * Gives skeleton structure using CapBlock.
   * CapBlock displays contents inside it using 'ContentsRenderer' received from parent.
   * @param {*} index
   * @param {*} path
   * @returns A Rectangle shaped Path Component.
   */
  const getPathComponent = (index) => {
    const deleteCallback = () => {
      setShowDeleteConfirmation(true);
      setDeletePathIndex(index);
    };
    return (
      <CapBlock
        isDeleteEnabled={pathList.length > 1}
        deleteCallback={deleteCallback}
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
  };

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
      {
        <CapModal
          visible={showDeleteConfirmation}
          onCancel={() => {
            setShowDeleteConfirmation(false);
            setDeletePathIndex(null);
          }}
          onOk={onDeleteOk}
          title={deleteConfirmationTitleMsg}
          okText={deleteButtonTextMsg}
        >
          <CapRow style={{ marginBottom: "8px" }}>
            <CapLabelInline type="label9">{`${deleteConfirmationTextMsg} `}</CapLabelInline>
            <q>
              <CapLabelInline type="label8">
                {pathList[deletePathIndex]?.pathName
                  || `${pathMsg} ${deletePathIndex + 1}`}
              </CapLabelInline>
            </q>
            <CapLabelInline type="label9"> ?</CapLabelInline>
          </CapRow>
          <CapLabel style={{ marginBottom: "8px" }} type="label9">
            {deleteConfirmationWarningMsg}
          </CapLabel>
        </CapModal>
      }
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
  /**Below intl fields are added in translations/en.js */
  notUniqueMsg: PropTypes.string,
  deleteButtonTextMsg: PropTypes.string,
  deleteConfirmationWarningMsg: PropTypes.string,
  deleteConfirmationTextMsg: PropTypes.string,
  deleteConfirmationTitleMsg: PropTypes.string,
  yesMsg: PropTypes.string,
  noMsg: PropTypes.string,
  pathMsg: PropTypes.string,
};

CapMultiplePath.defaultProps = {
  isToggleEnabled: true,
  addPathDisabled: false,
  capBlockWidth: 676,
  notUniqueMsg: "",
};

export default LocaleHoc(CapMultiplePath, { key: "CapMultiplePath" });
