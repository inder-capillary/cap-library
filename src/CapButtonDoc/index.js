import React, {Component} from 'react';
import { CapButton } from '../../components';
import PropertyTable from '../../helpers/PropertyTable';
import './info.scss';

const api = [
  {
    key: 1,
    property: "type",
    description: "can be set to primary secondary ghost dashed danger",
    type: "string",
    default: "primary",
  },
  {
    key: 7,
    property: "addonAfter",
    description: "The label text or icon displayed after (on the right side of) the button.",
    type: "string|ReactNode",
    default: "",
  },
  {
    key: 2,
    property: "addonBefore",
    description: "The label text or icon displayed before (on the left side of) the button.",
    type: "string|ReactNode",
    default: "",
  },
  {
    key: 3,
    property: "shape",
    description: "can be set to circle or omitted",
    type: "string",
    default: "default",
  },
  {
    key: 4,
    property: "size",
    description: "can be set to small large or omitted",
    type: "string",
    default: "default",
  },
  {
    key: 5,
    property: "loading",
    description: "set the loading status of button",
    type: "boolean",
    default: "false",
  },
  {
    key: 6,
    property: "onClick",
    description: "set the handler to handle click event",
    type: "function",
    default: "-",
  },
];

class CapButtonDoc extends Component {
  render() {
    return (
      <div className="cap-button-info">
        <div style={{display: 'flex', marginTop: 20}} className="cap-button-showcase">
          <div style={{margin: 'auto'}}><CapButton>Primary</CapButton></div>
          <div style={{margin: 'auto'}}><CapButton disabled>Primary</CapButton></div>
          <div style={{margin: 'auto'}}><CapButton type="secondary">Secondary</CapButton></div>
          <div style={{margin: 'auto'}}><CapButton type="secondary" disabled>Secondary</CapButton></div>
          <div style={{margin: 'auto'}}><CapButton type="flat">Flat</CapButton></div>
          <div style={{margin: 'auto'}}><CapButton type="flat" disabled>Flat</CapButton></div>
          <div style={{margin: 'auto'}}><CapButton type="dashed">Dashed</CapButton></div>
          <div style={{margin: 'auto'}}><CapButton type="dashed" disabled>Dashed</CapButton></div>
        </div>
        <PropertyTable data={api} />
      </div>
    );
  }
}

export default CapButtonDoc;
