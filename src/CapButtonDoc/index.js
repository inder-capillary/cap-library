import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { CapButton, CapIcon } from '../../components';
import PropertyTable from '../../helpers/PropertyTable';
import './info.scss';

const api = [
  {
    key: 1,
    property: "type",
    description: "Type of the component. Can set to `primary`, `secondary`, `flat`, `dashed`",
    type: "string",
    default: "primary",
  },
  {
    key: 2,
    property: "prefix",
    description: "Prefix content of button",
    type: "string | Node",
    default: "-",
  },
  {
    key: 3,
    property: "suffix",
    description: "Suffix content of button",
    type: "string | ReactNode",
    default: "-",
  },
  {
    key: 4,
    property: 'isAddBtn',
    description: 'Pass as true if you want to use the button for add action purpose. If passed "true", plus icon will be added as prefix and font color of button will be differnt',
    type: 'boolean',
    default: "false",
  },
];

const MarginDiv = styled.div`
  margin-top: 8px;
`;

class CapButtonDoc extends Component {
  render() {
    return (
      <div className="cap-button-info">
        <Row span={24} style={{ display: 'flex', marginTop: 20 }} className="cap-button-showcase">
          <Col span={5} className="button-type">
            <div className="button-type-title">Primary button</div>
            <MarginDiv />
            <CapButton>Primary</CapButton>
            <MarginDiv />
            <CapButton disabled>Primary</CapButton>
          </Col>
          <Col span={5} className="button-type">
            <div className="button-type-title">Secondary button</div>
            <MarginDiv />
            <CapButton type="secondary">Secondary</CapButton>
            <MarginDiv />
            <CapButton type="secondary" disabled>Secondary</CapButton>
          </Col>
          <Col span={5} className="button-type">
            <div className="button-type-title">Flat button</div>
            <CapButton type="flat">Flat</CapButton>
            <MarginDiv />
            <CapButton type="flat" isAddBtn>Flat</CapButton>
            <MarginDiv />
            <CapButton type="flat" disabled>Flat</CapButton>
          </Col>
          <Col span={5} className="button-type">
            <div className="button-type-title">Flat button with icons</div>
            <MarginDiv />
            <CapButton type="flat" prefix={<CapIcon size="s" type="add" color="#091e42" />}>Prefix</CapButton>
            <MarginDiv />
            <CapButton type="flat" suffix={<CapIcon size="s" type="add" color="#091e42" />}>Suffix</CapButton>
            <MarginDiv />
            <CapButton type="flat" suffix={<CapIcon size="s" type="add" color="#b3bac5" />} disabled>Flat</CapButton>
            <MarginDiv />
          </Col>
          <Col span={4} className="button-type">
            <div className="button-type-title">Dashed button</div>
            <MarginDiv />
            <CapButton type="dashed">Dashed</CapButton>
            <MarginDiv />
            <CapButton type="dashed" disabled>Dashed</CapButton>
          </Col>
        </Row>
        <PropertyTable data={api} />
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/button/#header"> Button </a>
          component. Please refer their component for detailed explanation of component and supported props.
        </div>
      </div>
    );
  }
}

export default CapButtonDoc;
