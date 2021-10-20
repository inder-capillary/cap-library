import React, { useState } from "react";

import styled from "styled-components";
import { nanoid } from 'nanoid';
import PropertyTable from "../../helpers/PropertyTable";
import CapMultiplePath from "../../components/CapMultiplePath";

const infoData = [
  {
    key: 1,
    property: "pathList",
    description: "list of paths",
    type: "array",
    default: "-",
  },
  {
    key: 2,
    property: "setPathList",
    description: "callback to setPathList",
    type: "func",
    default: "-",
  },
  {
    key: 3,
    property: "addPathDisabled",
    description: "is add path disabled",
    type: "bool",
    default: "false",
  },
  {
    key: 4,
    property: "addPathDisabledMessage",
    description: "Message to display as tooltip if add path button is disabled",
    type: "string",
    default: "-",
  },
  {
    key: 5,
    property: "isToggleEnabled",
    description:
      "if enabled, it will allow to move paths Up/Down by one position",
    type: "bool",
    default: "true",
  },
  {
    key: 6,
    property: "defaultContents",
    description:
      "Sets the property contents of a path equal to defaultContents. Used to display contents inside when a path is newly created.",
    type: "any",
    default: "-",
  },
  {
    key: 7,
    property: "ContentsRenderer",
    description:
      "ContentsRenderer, is a component. CapMultipath passes 'pathList', 'setPathList', 'pathIndex' to ContentsRenderer",
    type: "component",
    default: "-",
  },
  {
    key: 8,
    property: "capBlockWidth",
    description: "Width of CapBlock",
    type: "Number",
    default: "676",
  },
];
const MarginDiv = styled.div`
  margin-top: 8px;
`;

// takes in props pathIndex,pathList and setPathList
const ContentsRenderer = ({ pathIndex, pathList }) => (
  <>{pathList[pathIndex].contents}</>
);

const CapMultiplePathDoc = () => {
  const initialPath = {
    contents: "Hello World",
    pathName: null,
    id: nanoid(10),
  };

  const [pathList, setPathList] = useState([initialPath]);


  let addPathDisabled;
  let addPathDisabledMessage;
  if (pathList.length >= 10) {
    addPathDisabled = true;
    addPathDisabledMessage = "A maximum of 10 paths can be defined";
  }
  return (
    <>
      <CapMultiplePath
        pathList={pathList}
        setPathList={setPathList}
        capBlockWidth={600}
        ContentsRenderer={ContentsRenderer}
        addPathDisabled={addPathDisabled}
        addPathDisabledMessage={addPathDisabledMessage}
        isToggleEnabled
        defaultContents="Hello World"
      />
      <MarginDiv />
      <PropertyTable data={infoData} />
    </>
  );
};

export default CapMultiplePathDoc;
