/**
* CapIconDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapIcon } from "../../components";
import "./info.scss";

// const infoData = [
//   {
//     key: 1,
//     property: "-",
//     description: "-",
//     type: "-",
//     default: "-",
//   },
// ];

export default class CapIconDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-icon-info">
        <div className="cap-icon-showcase">
          <CapIcon type="add" />
          <CapIcon type="calendaractive" />
          <CapIcon type="chevronright" />
          <CapIcon type="close" />
          <CapIcon type="edit" />
          <CapIcon type="image" />
          <CapIcon type="info" />
          <CapIcon type="listactive" />
          <CapIcon type="logout" />
          <CapIcon type="openinnew" />
          <CapIcon type="tag" />
          <CapIcon type="tick" />
          <CapIcon type="tooltip" />
          <CapIcon type="view" />
          <div>New Icons</div>
          <CapIcon type="alert" />
          <CapIcon type="arrowfilled" />
          <CapIcon type="carrot" />
          <CapIcon type="chatbubble" />
          <CapIcon type="checkfilled" />
          <CapIcon type="checkfilleddefault" />
          <CapIcon type="communication" />
          <CapIcon type="heart" />
          <CapIcon type="location" />
          <CapIcon type="lovefilled" />
          <CapIcon type="megaphone" />
          <CapIcon type="message" />
          <CapIcon type="person" />
          <CapIcon type="task" />
          <CapIcon type="uparrrowfilled" />
          <CapIcon type="android" />
          <CapIcon type="ios" />
          <div>New Icon</div>
          <CapIcon type="addmedia" />
          <CapIcon type="addphoto" />
          <CapIcon type="alarm" />
          <CapIcon type="back" />
          <CapIcon type="bulb" />
          <CapIcon type="calendar" />
          <CapIcon type="checkcircle" />
          <CapIcon type="chevrondown" />
          <CapIcon type="chevronleft" />
          <CapIcon type="chevronright" />
          <CapIcon type="chevronup" />
          <CapIcon type="close" />
          <CapIcon type="copy" />
          <CapIcon type="download" />
          <CapIcon type="edit" />
          <CapIcon type="filter" />
          <CapIcon type="gallery" />
          <CapIcon type="graph" />
          <CapIcon type="help" />
          <CapIcon type="info" />
          <CapIcon type="lab" />
          <CapIcon type="media" />
          <CapIcon type="megaphone" />
          <CapIcon type="message" />
          <CapIcon type="more" />
          <CapIcon type="moreapplications" />
          <CapIcon type="mpush" />
          <CapIcon type="notetickmaterial" />
          <CapIcon type="notewithtick" />
          <CapIcon type="notepad" />
          <CapIcon type="notepadmaterial" />
          <CapIcon type="notifications" />
          <CapIcon type="offer" />
          <CapIcon type="openinnew" />
          <CapIcon type="pause" />
          <CapIcon type="performance" />
          <CapIcon type="personlaisation" />
          <CapIcon type="play" />
          <CapIcon type="plus" />
          <CapIcon type="settings" />
          <CapIcon type="stop" />
          <CapIcon type="survey" />
          <CapIcon type="surveyresponse" />
          <CapIcon type="upload" />
          <CapIcon type="user" />
          <CapIcon type="view" />
          <CapIcon type="warning" />
        </div>
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/icon/"> Icons </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}
