/**
*
* CapGraph
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Guide, Label } from 'bizcharts';
const defaultStyles = {
  g2Tooltip: {
    position: 'absolute',
    visibility: 'hidden',
    border: '1px solid #efefef',
    backgroundColor: '#fff',
    color: '#46af45',
    opacity: '0.8',
    padding: '5px 15px',
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
    const { data, xAxis, yAxis,
      legend, g2Tooltip, g2TooltipList, g2TooltipListItem,
      itemTemplate, size, scale, tooltipData, height, chartProps, yAxisProps, graphList, xAxisProps, showGuide, coord, guide, title } = this.props;
    let { containerTemplate } = this.props;
    const { Text } = Guide;
    let legendType = 'circle';
    let legendPosition = 'bottom-center';
    let legendProps = {};
    const defaultHeight = 400;
    const defaultContainerTpl = () => `<div class="g2-tooltip"><div class="g2-tooltip-title" style="margin:10px 0;"></div><ul class="g2-tooltip-list"></ul></div>`;
    const defaultItemTpl = '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{value}</li>';

    if (legend) {
      ({ marker: legendType, position: legendPosition, ...legendProps } = legend);
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

          <Axis name={yAxis} {...yAxisProps} />
          <Axis
            name={xAxis}
            {...xAxisProps}
          />

          {coord && <Coord {...coord} />}
          {showGuide && (
            <Guide>
              {data.map((obj) => (
                <Text
                  top
                  position={obj.position}
                  content={obj.content}
                  style={guide.style}
                />
              ))}
            </Guide>
          )}
          <Tooltip
            offset={50}
            showTitle={false}
            containerTpl={containerTemplate(tooltipData, this.state.tooltipIndex) || defaultContainerTpl}
            itemTpl={itemTemplate || defaultItemTpl}
            g2-tooltip={g2Tooltip || defaultStyles.g2Tooltip}
            g2-tooltip-list={g2TooltipList || defaultStyles.g2TooltipList}
            g2-tooltip-list-item={g2TooltipListItem || defaultStyles.g2TooltipListItem}
          />
          <Legend
            marker={legendType}
            position={legendPosition}
            title={title}
            {...legendProps}
          />
          {graphList.map(({showTooltip, tooltip, tooltipDisable, type, groupBy, colors, shape, showlabel, label, ...rest}) => {
            const tooltipProp = showTooltip ? tooltip : !tooltipDisable && [`${xAxis}*${yAxis}`, this.updateTooltipInfo];
            return (
              <Geom
                key={type}
                type={type}
                position={`${xAxis}*${yAxis}`}
                color={[groupBy, colors]}
                size={size}
                tooltip={tooltipProp}
                shape={shape}
                {...rest}
              >
                {showlabel && <Label {...label} />}
              </Geom>
            );
          } )}
        </Chart>
      </div>
    );
  }
}
CapGraph.defaultProps = {
  graphList: [],
  xAxisProps: {},
  yAxisProps: {},
  title: null,
};
CapGraph.propTypes = {
  height: PropTypes.number,
  data: PropTypes.array.isRequired,
  xAxis: PropTypes.string.isRequired,
  yAxis: PropTypes.string.isRequired,
  legend: PropTypes.object,
  g2Tooltip: PropTypes.object,
  g2TooltipList: PropTypes.object,
  g2TooltipListItem: PropTypes.object,
  itemTemplate: PropTypes.string,
  containerTemplate: PropTypes.func,
  size: PropTypes.number,
  scale: PropTypes.object,
  tooltipData: PropTypes.object,
  graphList: PropTypes.array,
  yAxisProps: PropTypes.object,
  xAxisProps: PropTypes.object,
  chartProps: PropTypes.object,
  title: PropTypes.object,
  showGuide: PropTypes.bool,
  coord: PropTypes.object,
  guide: PropTypes.object,
};

export default CapGraph;
