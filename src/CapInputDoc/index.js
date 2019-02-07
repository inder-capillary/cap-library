/**
* CapInputDoc
*/
import React from "react";
import { Row, Col, Icon } from 'antd';
import PropertyTable from '../../helpers/PropertyTable';
import CapInput from "../../components/CapInput";
import "./info.scss";

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
];

const CapInputDoc = () => (
  <div className="cap-input-info">
    <div className="cap-input-showcase">
      <p style={{margin: '16px 0'}}>Input with left label</p>
      <Row span={24}>
        <Col span={11}>
          <CapInput labelPosition="left" label="Input field" />
        </Col>
        <Col span={11} offset={1}>
          <CapInput labelPosition="left" label="Required Input" isRequired />
        </Col>
      </Row>
      <Row span={24} style={{marginTop: '16px'}}>
        <Col span={11}>
          <CapInput labelPosition="left" label="Input confirmation" isVerified />
        </Col>
        <Col span={11} offset={1}>
          <CapInput labelPosition="left" label="Input with error" errorMessage="Testing error message" />
        </Col>
      </Row>
      <Row span={24} style={{marginTop: '16px'}}>
        <p style={{margin: '16px 0'}}>Input with top label</p>
        <Col span={11}>
          <CapInput labelPosition="top" label="Input confirmation" isVerified />
        </Col>
        <Col span={11} offset={1}>
          <CapInput labelPosition="top" label="Input with error" errorMessage="Testing error message" />
        </Col>
      </Row>
      <Row span={24} style={{marginTop: '16px'}}>
        <Col span={11}>
          <CapInput
            labelPosition="top"
            label="Input with error"
            inductiveText="Sample inductive text for demo"
            errorMessage="Testing error message"
            suffix={<Icon type="check-circle" />}
          />
        </Col>
        <Col span={11} offset={1}>
          <CapInput
            labelPosition="top"
            label="Input disabled with suffix"
            disabled
            inductiveText="Sample inductive text for demo"
            suffix={<Icon type="check-circle" />}
          />
        </Col>
      </Row>
      <Row span={24} style={{marginTop: '16px'}}>
        <p style={{margin: '16px 0'}}>Input without label</p>
        <Col span={11}>
          <CapInput labelPosition="left" isVerified placeholder="Input without label" />
        </Col>
      </Row>
    </div>
    <PropertyTable data={infoData} />
    <div style={{marginTop: '24px'}}>
      <b>NOTE: </b>
        This component is the extended version of ant design
      <a href="https://ant.design/components/input/#header"> Button </a>
        component. Please refer their component for detailed explaination of component and supported props.
    </div>
  </div>
);

export default CapInputDoc;
