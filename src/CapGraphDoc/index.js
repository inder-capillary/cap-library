/**
* CapGraphDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapGraph, CapHeading } from "../../components";
import { stackedData, lineData } from './data';
import "./info.scss";

const infoData = [
  {
    key: 0,
    property: "graphType",
    description: "specifies the type of graph: 'intervalstack' for stacked bar graph, 'line' for line chart etc",
    type: "strings",
    default: "n/a",
  },
  {
    key: 1,
    property: "data",
    description: "This is the data array taken by the graph. It is an array of objects where the object mandatorily contains a 'key' and a 'value' property, which will become the xaxis and the yaxis values for that data point",
    type: "array",
    default: "n/a",
  },
  {
    key: 2,
    property: "xAxis",
    description: "Specifies which key in the data object corresponds to the xaxis value of the data point",
    type: "string",
    default: "n/a",
  },
  {
    key: 3,
    property: "yAxis",
    description: "Specifies which key in the data object corresponds to the yaxis value of the data point",
    type: "string",
    default: "n/a",
  },
  {
    key: 4,
    property: "stackBy",
    description: "Specifies with respect to which key in the data object that the data is to be stacked by",
    type: "string",
    default: "n/a",
  },
  {
    key: 5,
    property: "legend",
    description: "An object with two keys: 'legendType' & 'legendPosition' which lets the user customize the legend",
    type: "object",
    default: "legendType: 'circle', legendPosition: 'bottom'",
  },
  {
    key: 6,
    property: "barColors",
    description: "An array with color codes for the stack. The number of color codes in the array must match the number of unique values for the stackBy key of data supplied",
    type: "array",
    default: "All the stacked items look same color if no array is supplied",
  },
  {
    key: 7,
    property: "g2Tooltip",
    description: "The stylesheet object to customize the tooltip for the graph",
    type: "object",
    default: "default style",
  },
  {
    key: 8,
    property: "g2TooltipList",
    description: "The stylesheet object to customize the tooltip list for the graph",
    type: "object",
    default: "default style",
  },
  {
    key: 9,
    property: "g2TooltipListItem",
    description: "The stylesheet object to customize the tooltip list items for the graph",
    type: "object",
    default: "default style",
  },
  {
    key: 10,
    property: "itemTemplate",
    description: "The <html> template for an item in the tooltip",
    type: "string",
    default: "default style",
  },
  {
    key: 11,
    property: "containerTemplate",
    description: "A function which gets passed in the state responsible for container rendering and which returns the way container is to be rendered",
    type: "funtion",
    default: "default style",
  },
  {
    key: 12,
    property: "size",
    description: "Size of the elements in the graph",
    type: "number",
    default: "10",
  },
  {
    key: 13,
    property: "scale",
    description: "An object that takes care of the scaling of x-axis",
    type: "object",
    default: "n/a",
  },
  {
    key: 14,
    property: "tooltipData",
    description: "The tooltip object that would get passed into the template renderer",
    type: "object",
    default: "n/a",
  },
  {
    key: 15,
    property: "height",
    description: "The height of the component within which the graph whould be rendered, the width will auto scale",
    type: "number",
    default: "400",
  },
];

const legend = {
  marker: 'circle',
  position: 'bottom-left',
};

const barColors = ['#bae1ff', '#489ff2', '#1d61ee', '#2546b3'];
const lineColors = ['#8517e5', '#00ccce'];
const scale = {
  date: {
    range: [0, 1],
  },
};

export default class CapGraphDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stackedTooltipData = {};

    stackedData.forEach((parent) => {
      const obj = stackedTooltipData[parent.key];
      if (obj) {
        obj.total += Number(parent.value);
      } else {
        stackedTooltipData[parent.key] = {
          total: parent.value,
        };
      }
    });

    const lineTooltipData = {};
    const cache = {};
    lineData.forEach((parent) => {
      const obj = cache[parent.date];
      if (obj) {
        const minus = obj.duration === 'This week' ? 1 : -1;
        lineTooltipData[parent.date] = {
          diff: (Number(cache[parent.date].orders) - Number(parent.orders)) * minus,
        };
      } else {
        cache[parent.date] = parent;
      }
    });

    return (
      <div className="cap-graph-info">
        <div className="cap-graph-showcase">
          <CapHeading type="h3">Stacked bar graph</CapHeading>
          <CapGraph
            height={400}
            data={stackedData}
            xAxis="key"
            yAxis="value"
            stackBy="orderStage"
            legend={legend}
            barColors={barColors}
            graphType="intervalStack"
            size={12}
            tooltipData={stackedTooltipData}
            containerTemplate={(ttData, index) => `<div class="g2-tooltip">Total: ${
              ttData[index] ? ttData[index].total : ''
            }<div class="g2-tooltip-title" style="margin:10px 0;"></div><ul class="g2-tooltip-list"></ul></div>`} />
        </div>
        <div className="cap-graph-showcase">
          <CapHeading type="h3">Multi line graph</CapHeading>
          <CapGraph
            height={400}
            data={lineData}
            scale={scale}
            xAxis="date"
            yAxis="orders"
            stackBy="duration"
            legend={legend}
            barColors={lineColors}
            tooltipData={lineTooltipData}
            graphType="line"
            size={4}
            containerTemplate={(ttData, index) => `<div class="g2-tooltip">Diff: ${
              ttData[index] ? ttData[index].diff : ''
            }<div class="g2-tooltip-title" style="margin:10px 0;"></div><ul class="g2-tooltip-list"></ul></div>`} />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
