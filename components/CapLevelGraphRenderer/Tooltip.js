import React from "react";
import ReactDom from "react-dom";
import { Tooltip } from "antd";
import { ToolsView } from "@antv/x6";

class TooltipTool extends ToolsView.ToolItem {
  constructor(props) {
    super(props);
    this.delay = 100;
  }

  render() {
    super.render();
    this.knob = ToolsView.createElement("div", false);
    this.knob.style.position = "absolute";
    this.container.appendChild(this.knob);
    this.updatePosition();
    document.addEventListener("mousemove", this.onMouseMove);
    return this;
  }

  toggleTooltip(visible) {
    ReactDom.unmountComponentAtNode(this.knob);

    if (visible) {
      ReactDom.render(
        <Tooltip title={this.options.tooltip} visible>
          <div />
        </Tooltip>,
        this.knob
      );
    }
    this.tooltipVisible = visible;
  }

  updatePosition(e) {
    const { style } = this.knob;
    if (e) {
      const p = this.graph.clientToGraph(e.clientX, e.clientY);
      style.display = "block";
      style.left = `${p.x}px`;
      style.top = `${p.y}px`;
    } else {
      style.display = "none";
      style.left = "-1000px";
      style.top = "-1000px";
    }
  }

  onMouseLeave() {
    this.updatePosition();
    window.clearTimeout(this.timer);
    window.setTimeout(() => this.toggleTooltip(false), this.delay);
    document.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove = (e) => {
    window.clearTimeout(this.timer);
    this.updatePosition(e);
    this.timer = window.setTimeout(() => {
      if (this.tooltipVisible) {
        this.toggleTooltip(false);
      }
      this.toggleTooltip(true);
    }, this.delay);
  };

  delegateEvents() {
    this.cellView.on("cell:mouseleave", this.onMouseLeave, this);
    return super.delegateEvents();
  }

  onRemove() {
    this.cellView.off("cell:mouseleave", this.onMouseLeave, this);
  }
}

TooltipTool.config({
  tagName: "div",
  isSVGElement: false,
});

export default TooltipTool;
