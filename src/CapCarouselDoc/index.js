/**
* CapCarouselDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import MethodTable from '../../helpers/MethodTable';
import { CapCarousel, CapHeading } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "showTopSwitcher",
    description: "Navigate between carousel content with top left and right arrows",
    type: "boolean",
    default: "true",
  },
  {
    key: 2,
    property: "width",
    description: "width sets the width of carousel wrapper",
    type: "string",
    default: "100%",
  },
  {
    key: 3,
    property: "dots",
    description: "Wheather to show dots in carousel content",
    type: "boolean",
    default: "false",
  },
  {
    key: 4,
    property: "afterChange",
    description: "Callback function called after the current index changes",
    type: "function(current)",
    default: "-",
  },
  {
    key: 5,
    property: "autoplay",
    description: "Whether to scroll automatically",
    type: "boolean",
    default: "false",
  },
  {
    key: 6,
    property: "beforeChange",
    description: "Callback function called before the current index changes",
    type: "function(from, to)",
    default: "-",
  },
  {
    key: 7,
    property: "easing",
    description: "Transition interpolation function name",
    type: "string",
    default: "linear",
  },
  {
    key: 8,
    property: "effect",
    description: "Transition effect",
    type: "scrollx | fade",
    default: "scrollx",
  },
  {
    key: 9,
    property: "vertical",
    description: "Whether to use a vertical display",
    type: "boolean",
    default: "false",
  },
];

const methodsData = [
  {
    name: "goTo(slideNumber, dontAnimate)",
    description: "Go to slide index, if dontAnimate=true, it happens without animation",
  },
  {
    name: "next()",
    description: "Change current slide to next slide",
  },
  {
    name: "prev()",
    description: "Change current slide to previous slide",
  },
];

const data = [
  {
    name: 'SMS1',
    content: <div><h3>1</h3></div>,
    key: 1,
  },
  {
    name: 'SMS2',
    content: <div><h3>2</h3></div>,
    key: 2,
  },
  {
    name: 'SMS3',
    content: <div><h3>3</h3></div>,
    key: 3,
  },
  {
    name: 'SMS4',
    content: <div><h3>4</h3></div>,
    key: 4,
  },
  {
    name: 'SMS5',
    content: <div><h3>5</h3></div>,
    key: 5,
  },
];

export default class CapCarouselDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-carousel-info">
        <div className="cap-carousel-showcase">
          <CapHeading type="h3">Default carousel:</CapHeading>
          <CapCarousel
            data={data}
            width="300px"
            wrapperClassName="test"
          />
          <CapHeading type="h3">Carousel when `dots` prop is true and `showTopSwitcher prop` is false:</CapHeading>
          <CapCarousel
            data={data}
            width="300px"
            wrapperClassName="test"
            showTopSwitcher={false}
            dots
          />
        </div>
        <PropertyTable data={infoData} />
        <MethodTable data={methodsData} />
      </div>
    );
  }
}
