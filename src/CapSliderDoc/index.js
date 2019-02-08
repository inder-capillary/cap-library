/**
* CapSliderDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapSlider from "../../components/CapSlider";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: 'type',
    description: "defined slider tip formatter",
    type: "string",
    default: "null",
  },
  {
    key: 2,
    property: "autoFocus",
    description: "get focus when component mounted",
    type: "boolean",
    default: "false",
  },
  {
    key: 3,
    property: "defaultValue",
    description: "The default value of slider. When range is false, use number, otherwise, use [number, number]",
    type: "number|number[]",
    default: "0 or [0, 0]",
  },
  {
    key: 4,
    property: "disabled",
    description: "If true, the slider will not be interactable.",
    type: "boolean",
    default: "false",
  },
  {
    key: 5,
    property: "dots",
    description: "Whether the thumb can drag over tick only.",
    type: "boolean",
    default: "false",
  },
  {
    key: 6,
    property: "included",
    description: "Make effect when marks not null，true means containment and false means coordinative",
    type: "boolean",
    default: "true",
  },
  {
    key: 7,
    property: "marks",
    description: "Tick mark of Slider, type of key must be number, and must in closed interval [min, max] ，each mark can declare its own style.",
    type: "object",
    default: "{ number: string|ReactNode } or { number: { style: object, label: string|ReactNode } }",
  },
  {
    key: 8,
    property: "max",
    description: "The maximum value the slider can slide to",
    type: "number",
    default: "100",
  },
  {
    key: 9,
    property: "min",
    description: "The minimum value the slider can slide to.",
    type: "number",
    default: "0",
  },
  {
    key: 10,
    property: "range",
    description: "dual thumb mode",
    type: "boolean",
    default: "false",
  },
  {
    key: 11,
    property: "step",
    description: "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When  marks no null, step can be null.",
    type: "number|null",
    default: "1",
  },
  {
    key: 12,
    property: "tipFormatter",
    description: "Slider will pass its value to tipFormatter, and display its value in Tooltip, and hide Tooltip when return value is null.",
    type: "Function|null",
    default: "IDENTITY",
  },
  {
    key: 13,
    property: "value",
    description: "The value of slider. When range is false, use number, otherwise, use [number, number]",
    type: "number|number[]",
    default: "",
  },
  {
    key: 14,
    property: "vertical",
    description: "If true, the slider will be vertical.",
    type: "Boolean",
    default: "false",
  },
  {
    key: 15,
    property: "onAfterChange",
    description: "Fire when  onmouseup is fired.",
    type: "Function(value)",
    default: "NOOP",
  },
  {
    key: 16,
    property: "onChange",
    description: "Callback function that is fired when the user changes the slider's value.",
    type: "Function(value) ",
    default: "NOOP",
  },
  {
    key: 17,
    property: "tooltipVisible",
    description: "If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.",
    type: "Boolean",
    default: "",
  },
];

export default class CapSliderDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-slider-info">
        <div className="cap-slider-showcase">
          {/* <div style={{margin: 'auto'}}><CapSlider></CapSlider></div> */}
          <div style={{margin: 'auto'}}><CapSlider type="ratio" defaultValue={40} disabled></CapSlider></div>
          <div style={{margin: 'auto'}}><CapSlider type="ratio" defaultValue={40} disabled={false}>Ratio Slider</CapSlider></div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
