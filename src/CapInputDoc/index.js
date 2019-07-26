/**
* CapInputDoc
*/
import React, { useState } from "react";
import { Row, Col } from 'antd';
import PropertyTable from '../../helpers/PropertyTable';
import { CapInput, CapIcon } from "../../components";
import "./info.scss";

const { Search, TextArea } = CapInput;

const infoData = [
  {
    key: 1,
    property: "size",
    description: "size of the CapInput. Possible values: `large`, `default`, `small`",
    type: "string",
    default: "large",
  },
  {
    key: 2,
    property: "label",
    description: "Input label",
    type: "string",
    default: "",
  },
  {
    key: 3,
    property: "labelPosition",
    description: "Position of input lable. Possible values: `top`, `left`",
    type: "string",
    default: "top",
  },
  {
    key: 4,
    property: "isRequired",
    description: "Whether to show required indication i.e '*' or not at the end of label",
    type: "boolean",
    default: "false",
  },
  {
    key: 5,
    property: "errorMessage",
    description: "Message to show as error below input field",
    type: "string | Node",
    default: "",
  },
  {
    key: 6,
    property: "isVerified",
    description: "Whether to show confirmed icon as suffix to input or not",
    type: "boolean",
    default: "false",
  },
  {
    key: 7,
    property: "inductiveText",
    description: "Inductive text to show below input lable",
    type: "string | Node",
    default: "",
  },
  {
    key: 8,
    property: "inline",
    description: "If true, display property of input is set to inline-block",
    type: "boolean",
    default: "false",
  },
];


const searchInfoData = [
  {
    key: 1,
    property: "allowClear",
    description: "Show Close Icon when value passed to input is not empty",
    type: "boolean",
    default: "true",
  },
  {
    key: 2,
    property: "onClear",
    description: "Callback function called when close icon is clicked",
    type: "string",
    default: "",
  },
];

const textAreaInfoData = [
  {
    key: 1,
    property: "maxLength",
    description: "Max allowed Characters in text area",
    type: "number",
    default: "-",
  },
  {
    key: 2,
    property: "autosize",
    description: "Height autosize feature, can be set to true|false or an object { minRows: 2, maxRows: 6 }",
    type: "boolean|object",
    default: false,
  },
  {
    key: 3,
    property: "defaultValue",
    description: "The initial input content",
    type: "string",
    default: null,
  },
  {
    key: 4,
    property: "value",
    description: "The input content value",
    type: "string",
    default: null,
  },
  {
    key: 5,
    property: "onPressEnter",
    description: "The callback function that is triggered when Enter key is pressed.",
    type: "function(e)",
    default: null,
  },

];
const CapInputDoc = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  return (
    <div className="cap-input-info">
      <div className="cap-input-showcase">
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          {` CapInputSearch and CapSearchBar has been Deprecated. Use { Search } = CapInput`}
        </div>
        <p style={{ margin: '16px 0' }}>Input with left label</p>
        <Row span={24}>
          <Col span={11}>
            <CapInput inline labelPosition="left" label="Input field" />
          </Col>
          <Col span={11} offset={1}>
            <CapInput labelPosition="left" label="Required Input" isRequired />
          </Col>
        </Row>
        <Row span={24} style={{ marginTop: '16px' }}>
          <Col span={11}>
            <CapInput labelPosition="left" label="Input confirmation" isVerified />
          </Col>
          <Col span={11} offset={1}>
            <CapInput labelPosition="left" label="Input with error" errorMessage="Testing error message" />
          </Col>
        </Row>
        <Row span={24} style={{ marginTop: '16px' }}>
          <p style={{ margin: '16px 0' }}>Input with top label</p>
          <Col span={11}>
            <CapInput labelPosition="top" label="Input confirmation" isVerified />
          </Col>
          <Col span={11} offset={1}>
            <CapInput labelPosition="top" label="Input with error" errorMessage="Testing error message" />
          </Col>
        </Row>
        <Row span={24} style={{ marginTop: '16px' }}>
          <Col span={11}>
            <CapInput
              labelPosition="top"
              label="Input with error"
              inductiveText="Sample inductive text for demo"
              errorMessage="Testing error message"
              suffix={<CapIcon type="check-circle" size="s" />}
            />
          </Col>
          <Col span={11} offset={1}>
            <CapInput
              labelPosition="top"
              label="Input disabled with suffix"
              disabled
              inductiveText="Sample inductive text for demo"
              suffix={<CapIcon type="check-circle" />}
            />
          </Col>
        </Row>
        <Row span={24} style={{ marginTop: '16px' }}>
          <Col span={16}>
            <TextArea
              maxLength={30}
              value={textAreaValue}
              onChange={(e) => {
                setTextAreaValue(e.target.value);
              }}
              labelPosition="top"
              label="TextArea" />
          </Col>
        </Row>
        <Row span={24} style={{ marginTop: '16px' }}>
          <Col span={11}>
            <Search value="My Default Value" onClear={() => { }} labelPosition="top" label="Search with clear Icon" />
          </Col>
          <Col span={11} offset={1}>
            <Search labelPosition="top" label="Search Without clear Icon" allowClear={false} />
          </Col>
        </Row>
        <Row span={24} style={{ marginTop: '16px' }}>
          <p style={{ margin: '16px 0' }}>Input without label</p>
          <Col span={11}>
            <CapInput labelPosition="left" isVerified placeholder="Input without label" />
          </Col>
        </Row>
      </div>
      <PropertyTable data={infoData} />
      <PropertyTable title="CapInput.Search" data={searchInfoData} />
      <PropertyTable title="CapInput.TextArea" data={textAreaInfoData} />
      <div style={{ marginTop: '24px' }}>
        <b>NOTE: </b>
        This component is the extended version of ant design
        <a href="https://ant.design/components/input/#header"> Input </a>
        component. Please refer their component for detailed explanation of component and supported props.
      </div>
    </div>
  );
};

export default CapInputDoc;
