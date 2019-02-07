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
    property: "-",
    description: "-",
    type: "-",
    default: "-",
  },
];

const CapInputDoc = () => (
  <div className="cap-input-info">
    <div className="cap-input-showcase">
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
      <Row span={24} style={{marginTop: '24px'}}>
        <Col span={11}>
          <CapInput labelPosition="top" label="Top label Input field" />
        </Col>
        <Col span={11} offset={1}>
          <CapInput labelPosition="top" label="Required Input" isRequired />
        </Col>
      </Row>
      <Row span={24} style={{marginTop: '16px'}}>
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
    </div>
    <PropertyTable data={infoData} />
  </div>
);

export default CapInputDoc;
