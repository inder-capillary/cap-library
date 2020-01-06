/**
*
* CapGraph
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import isEmpty from 'lodash/isEmpty';
const defaultStyles = {
  g2Tooltip: {
    position: 'absolute',
    visibility: 'hidden',
    border: '1px solid #efefef',
    backgroundColor: '#fff',
    color: '#46af45',
    opacity: '0.8',
    padding: '0px 0px',
    transition: 'top 200ms,left 200ms',
  },
  g2TooltipList: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
  },
  g2TooltipListItem: {
    marginRight: '10px',
    color: '#000',
  },
};

class CapGraph extends React.Component {
  state = {
    tooltipIndex: 0, // stores the x-axis value of the data point being hovered on
  }

  updateTooltipInfo = (x, y) => {
    this.setState({ tooltipIndex: x });
    return {
      name: x,
      value: y,
    };
  }

  render() {
    const { data, xAxis, yAxis, stackBy,
      legend, barColors, g2Tooltip, g2TooltipList, g2TooltipListItem,
      itemTemplate, graphType, size, scale, tooltipData, height, xLabelFrequency = 1, chartProps, yAxisProps, graphList} = this.props;
    let { containerTemplate } = this.props;
    let legendType = 'circle';
    let legendPosition = 'bottom';
    const defaultHeight = 400;
    const defaultContainerTpl = () => `<div class="g2-tooltip"><div class="g2-tooltip-title" style="margin:10px 0;"></div><ul class="g2-tooltip-list"></ul></div>`;
    const defaultItemTpl = '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{value}</li>';

    if (legend) {
      ({ marker: legendType, position: legendPosition } = legend);
    }

    if (typeof containerTemplate !== 'function') {
      containerTemplate = defaultContainerTpl;
    }

    return (
      <div>
        <Chart
          height={height || defaultHeight}
          data={data}
          forceFit
          scale={scale}
          {...chartProps}
        >
          <Axis
            name={xAxis}
            label={{
              formatter: (val, i, index) => {
                if (index % xLabelFrequency === 0) return val;
                return '';
              },
            }
            }
          />
          <Axis name={yAxis} {...yAxisProps} />
          <Tooltip
            offset={50}
            showTitle={false}
            containerTpl={containerTemplate(tooltipData, this.state.tooltipIndex) || defaultContainerTpl}
            itemTpl={itemTemplate || defaultItemTpl}
            g2-tooltip={g2Tooltip || defaultStyles.g2Tooltip}
            g2-tooltip-list={g2TooltipList || defaultStyles.g2TooltipList}
            g2-tooltip-list-item={g2TooltipListItem || defaultStyles.g2TooltipListItem}
          />
          <Legend marker={legendType} position={legendPosition} />
          {!isEmpty(graphList) && graphList.map((graph) => (
            <Geom
              type={graph.type}
              position={`${xAxis}*${yAxis}`}
              color={[graph.stackBy, graph.barColors]}
              size={size || 10}
              tooltip={[`${xAxis}*${yAxis}`, this.updateTooltipInfo]}
            />
          ))}
          {/* to avoid breaking on the old implementation */}
          {graphType && (
            <Geom
              type={graphType}
              position={`${xAxis}*${yAxis}`}
              color={[stackBy, barColors]}
              size={size || 10}
              tooltip={[`${xAxis}*${yAxis}`, this.updateTooltipInfo]}
            />
          )}


        </Chart>
      </div>
    );
  }
}

CapGraph.propTypes = {
  height: PropTypes.number,
  graphType: PropTypes.string,
  data: PropTypes.array.isRequired,
  xAxis: PropTypes.string.isRequired,
  yAxis: PropTypes.string.isRequired,
  stackBy: PropTypes.string.isRequired,
  legend: PropTypes.object,
  barColors: PropTypes.array,
  g2Tooltip: PropTypes.object,
  g2TooltipList: PropTypes.object,
  g2TooltipListItem: PropTypes.object,
  itemTemplate: PropTypes.string,
  containerTemplate: PropTypes.func,
  size: PropTypes.number,
  scale: PropTypes.object,
  tooltipData: PropTypes.object,
  xLabelFrequency: PropTypes.number,
  graphList: PropTypes.array.isRequired,
  yAxisProps: PropTypes.object,
  chartProps: PropTypes.object,
};

export default CapGraph;
