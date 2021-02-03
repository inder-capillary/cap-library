import React from 'react';
import CapAdvancedIcon from '../../components/CapAdvancedIcon';
import PropertyTable from '../../helpers/PropertyTable';
import { CapNotification, CapRow, CapTooltip, CapLabel, CapIcon } from "../../components";
import {
  CAP_YELLOW,
  CAP_COLOR_05,
  CAP_G05,
} from '../../components/styled/variables';
import './info.scss';

const api = [
  {
    key: 1,
    property: "type",
    description: "icon type. Eg: sms, mpush",
    type: "string",
    default: null,
  },
  {
    key: 2,
    property: "backgroundColor",
    description: "backgroundColor for the icon",
    type: "string",
    default: "CAP_YELLOW",
  },
  {
    key: 3,
    property: "actionNodes",
    description: "array of objects with type, background, position('top-left', 'top-right', 'bottom-left', 'bottom-right') and customProps(any props accepted by CapIcon)",
    type: "object",
    default: null,
  },
  {
    key: 4,
    property: "label1",
    description: "first label to be displayed under icon",
    type: "node",
    default: null,
  },
  {
    key: 5,
    property: "label2",
    description: "second label to be displayed under icon",
    type: "node",
    default: null,
  },
];

const actionNodes = [
  {
    type: "delete",
    backgroundColor: CAP_COLOR_05,
    position: "top-left",
    customProps: {
      onClick: () => CapNotification.open({ message: "Delete node action"}),
    },
  },
  {
    type: "edit",
    backgroundColor: CAP_G05,
    position: "top-right",
    customProps: {
      onClick: () => CapNotification.open({ message: "Edit node action"}),
    },
  },
  {
    type: "copy",
    backgroundColor: CAP_G05,
    position: "bottom-left",
    customProps: {
      onClick: () => CapNotification.open({ message: "Duplicate node action"}),
    },
  },
];

const actionNodes1 = [
  {
    type: "delete",
    backgroundColor: CAP_COLOR_05,
    position: "top-left",
    customProps: {
      onClick: () => CapNotification.open({ message: "Delete node action"}),
    },
  },
  {
    type: "edit",
    backgroundColor: CAP_G05,
    position: "top-right",
    customProps: {
      onClick: () => CapNotification.open({ message: "Edit node action"}),
    },
  },
];

const label1 = (
  <CapRow style={{display: 'flex'}}>
    <CapLabel type="label9">Top X channel 1</CapLabel>
    <CapTooltip title="Top X Channel 1">
      <CapIcon type="info" size="xs" />
    </CapTooltip>
  </CapRow>
);

const label2 = (
  <CapLabel type="label3">Top 2 channels</CapLabel>
);


const label3 = (
  <CapLabel type="label3">Configure: </CapLabel>
);


const label4 = (
  <CapLabel type="label9" className="label">SMS</CapLabel>
);

function CapAdvancedIconDoc() {
  return (
    <div className="cap-advanced-icon-doc">
      <div className="icon-container">
        <CapAdvancedIcon
          type="sms"
          backgroundColor={CAP_YELLOW}
          actionNodes={actionNodes}
          label1={label1}
          label2={label2}
        />
      </div>
      <br />
      <br />
      <div className="icon-container">
        <CapAdvancedIcon
          type="mpush"
          backgroundColor={CAP_YELLOW}
          actionNodes={actionNodes1}
          label1={label3}
          label2={label4}
        />
      </div>
      <br />
      <PropertyTable data={api} />
    </div>
  );
}
export default CapAdvancedIconDoc;
