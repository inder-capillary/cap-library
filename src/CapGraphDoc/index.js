/**
* CapGraphDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapGraph, CapHeading, CapButton } from "../../components";
import { stackedData, lineData } from './data';
import "./info.scss";

const infoData = [
  {
    key: 0,
    property: "graphList",
    description: "type: specifies the type of graph: 'intervalstack' for stacked bar graph, 'line' for line chart, "
                  + "stack By: specifies with respect to which key in the data object that the data is to be stacked by etc"
                  + "barColors: An array with color codes for the stack. The number of color codes in the array must match the number of unique values for the stackBy key of data supplied ",
    type: "Array of object",
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
    property: "legend",
    description: "An object with two keys: 'legendType' & 'legendPosition' which lets the user customize the legend",
    type: "object",
    default: "legendType: 'circle', legendPosition: 'bottom'",
  },
  {
    key: 5,
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
  onCopyStackedPropsClick = () => {
    navigator.clipboard.writeText(JSON.stringify({
      height: 400,
      data: stackedData,
      xAxis: "key",
      yAxis: "value",
      legend,
      graphList: [
        {
          type: 'intervalStack',
          barColors,
          stackBy: 'orderStage',
        },
      ],
      size: 12,
      xLabelFrequency: 4,
      tooltipData: 'a modified version of the actual data for the tooltip',
      containerTemplate: 'The HTML template to render the container',
    }));
  }

  onCopyLinePropsClick = () => {
    navigator.clipboard.writeText(JSON.stringify({
      height: 400,
      data: lineData,
      scale,
      xAxis: "date",
      yAxis: "orders",
      legend,
      graphList: [
        {
          type: 'line',
          barColors: lineColors,
          stackBy: 'duration',
        },
      ],
      size: 4,
      tooltipData: 'a modified version of the actual data for the tooltip',
      containerTemplate: 'The HTML template to render the container',
    }));
  }

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
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <CapHeading type="h2">Stacked bar graph</CapHeading>
            <CapButton onClick={this.onCopyStackedPropsClick}>Copy Props to Clipboard</CapButton>
          </div>
          <CapGraph
            height={400}
            data={stackedData}
            xAxis="key"
            yAxis="value"
            legend={legend}
            graphList={[
              {
                type: 'intervalStack',
                barColors,
                stackBy: 'orderStage',
              },
            ]}
            size={12}
            tooltipData={stackedTooltipData}
            xLabelFrequency={4}
            containerTemplate={(ttData, index) => `<div class="g2-tooltip">Total: ${
              ttData[index] ? ttData[index].total : ''
            }<div class="g2-tooltip-title" style="margin:10px 0;"></div><ul class="g2-tooltip-list"></ul></div>`} />
        </div>
        <CapHeading>
          Visit this
          {' '}
          <a href="https://bizcharts.net/products/bizCharts/demo/detail?id=bar-stacked-column&selectedKey=%E6%9F%B1%E7%8A%B6%E5%9B%BE">link</a>
          {' '}
          for more detailed reference
        </CapHeading>
        <hr />
        <div className="cap-graph-showcase">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <CapHeading type="h2">Multi line graph</CapHeading>
            <CapButton onClick={this.onCopyLinePropsClick}>Copy Props to Clipboard</CapButton>
          </div>
          <CapGraph
            height={400}
            data={lineData}
            scale={scale}
            xAxis="date"
            yAxis="orders"
            legend={legend}
            graphList={[
              {
                type: 'line',
                barColors: lineColors,
                stackBy: 'duration',
              },
            ]}
            tooltipData={lineTooltipData}
            size={4}
            containerTemplate={(ttData, index) => `<div class="g2-tooltip">Diff: ${
              ttData[index] ? ttData[index].diff : ''
            }<div class="g2-tooltip-title" style="margin:10px 0;"></div><ul class="g2-tooltip-list"></ul></div>`} />
          <CapHeading>
            Visit this
            {' '}
            <a href="https://bizcharts.net/products/bizCharts/demo/detail?id=line-series&selectedKey=%E6%8A%98%E7%BA%BF%E5%9B%BE">link</a>
            {' '}
            for more detailed reference
          </CapHeading>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
