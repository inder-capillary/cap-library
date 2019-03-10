/**
* CapIconDoc
*/
import React, { Component } from "react";
import styled from 'styled-components';
import PropertyTable from '../../helpers/PropertyTable';
import { CapIcon, CapHeading } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "type",
    description: "type of icon. This is required field. The type of icon is mentioned below each icon. If type of icon is not present in the mentioned list, then default Ant Icon of that type will render",
    type: "string",
    default: "-",
  },
  {
    key: 2,
    property: "className",
    description: "Custom class name",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "size",
    description: "size of Icon  (s, m, l) `s` is 16px, `m` is 24px , `l` is 32px",
    type: "s, m, l",
    default: "m",
  },
];

const List = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 100px;
    list-style: none;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
`;

const Text = styled.div`
  padding-top: 8px;
  font-size: 12px;
`;

export default class CapIconDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-icon-info">
        <div className="cap-icon-showcase">
          <ul className="cap-icons-list">
            <List>
              <CapIcon type="add" />
              <Text>add</Text>
            </List>
            <List>
              <CapIcon type="add-media" />
              <Text>add-media</Text>
            </List>
            <List>
              <CapIcon type="add-photo" />
              <Text>add-photo</Text>
            </List>
            <List>
              <CapIcon type="alarm" />
              <Text>alarm</Text>
            </List>
            <List>
              <CapIcon type="alert" />
              <Text>alert</Text>
            </List>
            <List>
              <CapIcon type="android" />
              <Text>android</Text>
            </List>
            <List>
              <CapIcon type="arrow-filled" />
              <Text>arrow-filled</Text>
            </List>
            <List>
              <CapIcon type="back" />
              <Text>back</Text>
            </List>
            <List>
              <CapIcon type="bulb" />
              <Text>bulb</Text>
            </List>
            <List>
              <CapIcon type="calendar" />
              <Text>calendar</Text>
            </List>
            <List>
              <CapIcon type="calendar-active" />
              <Text>calendar-active</Text>
            </List>
            <List>
              <CapIcon type="carrot" />
              <Text>carrot</Text>
            </List>
            <List>
              <CapIcon type="chat-bubble" />
              <Text>chat-bubble</Text>
            </List>
            <List>
              <CapIcon type="check-circle" />
              <Text>check-circle</Text>
            </List>
            <List>
              <CapIcon type="check-filled" />
              <Text>check-filled</Text>
            </List>
            <List>
              <CapIcon type="check-filled-default" />
              <Text>check-filled-default</Text>
            </List>
            <List>
              <CapIcon type="chevron-down" />
              <Text>chevron-down</Text>
            </List>
            <List>
              <CapIcon type="chevron-left" />
              <Text>chevron-left</Text>
            </List>
            <List>
              <CapIcon type="chevron-right" />
              <Text>chevron-right</Text>
            </List>
            <List>
              <CapIcon type="chevron-up" />
              <Text>chevron-up</Text>
            </List>
            <List>
              <CapIcon type="close" />
              <Text>close</Text>
            </List>
            <List>
              <CapIcon type="communication" />
              <Text>communication</Text>
            </List>
            <List>
              <CapIcon type="copy" />
              <Text>copy</Text>
            </List>
            <List>
              <CapIcon type="download" />
              <Text>download</Text>
            </List>
            <List>
              <CapIcon type="edit" />
              <Text>edit</Text>
            </List>
            <List>
              <CapIcon type="filter" />
              <Text>filter</Text>
            </List>
            <List>
              <CapIcon type="gallery" />
              <Text>gallery</Text>
            </List>
            <List>
              <CapIcon type="graph" />
              <Text>graph</Text>
            </List>
            <List>
              <CapIcon type="heart" />
              <Text>heart</Text>
            </List>
            <List>
              <CapIcon type="help" />
              <Text>help</Text>
            </List>
            <List>
              <CapIcon type="image" />
              <Text>image</Text>
            </List>
            <List>
              <CapIcon type="info" />
              <Text>info</Text>
            </List>
            <List>
              <CapIcon type="ios" />
              <Text>ios</Text>
            </List>
            <List>
              <CapIcon type="lab" />
              <Text>lab</Text>
            </List>
            <List>
              <CapIcon type="list-active" />
              <Text>list-active</Text>
            </List>
            <List>
              <CapIcon type="location" />
              <Text>location</Text>
            </List>
            <List>
              <CapIcon type="logout" />
              <Text>logout</Text>
            </List>
            <List>
              <CapIcon type="love-filled" />
              <Text>love-filled</Text>
            </List>
            <List>
              <CapIcon type="media" />
              <Text>media</Text>
            </List>
            <List>
              <CapIcon type="megaphone" />
              <Text>megaphone</Text>
            </List>
            <List>
              <CapIcon type="message" />
              <Text>message</Text>
            </List>
            <List>
              <CapIcon type="more" />
              <Text>more</Text>
            </List>
            <List>
              <CapIcon type="more-applications" />
              <Text>more-applications</Text>
            </List>
            <List>
              <CapIcon type="mpush" />
              <Text>mpush</Text>
            </List>
            <List>
              <CapIcon type="note-tick-material" />
              <Text>note-tick-material</Text>
            </List>
            <List>
              <CapIcon type="note-with-tick" />
              <Text>note-with-tick</Text>
            </List>
            <List>
              <CapIcon type="notepad" />
              <Text>notepad</Text>
            </List>
            <List>
              <CapIcon type="notepad-material" />
              <Text>notepad-material</Text>
            </List>
            <List>
              <CapIcon type="notifications" />
              <Text>notifications</Text>
            </List>
            <List>
              <CapIcon type="offer" />
              <Text>offer</Text>
            </List>
            <List>
              <CapIcon type="open-in-new" />
              <Text>open-in-new</Text>
            </List>
            <List>
              <CapIcon type="pause" />
              <Text>pause</Text>
            </List>
            <List>
              <CapIcon type="performance" />
              <Text>performance</Text>
            </List>
            <List>
              <CapIcon type="person" />
              <Text>person</Text>
            </List>
            <List>
              <CapIcon type="personlaisation" />
              <Text>personlaisation</Text>
            </List>
            <List>
              <CapIcon type="play" />
              <Text>play</Text>
            </List>
            <List>
              <CapIcon type="plus" />
              <Text>plus</Text>
            </List>
            <List>
              <CapIcon type="settings" />
              <Text>settings</Text>
            </List>
            <List>
              <CapIcon type="stop" />
              <Text>stop</Text>
            </List>
            <List>
              <CapIcon type="survey" />
              <Text>survey</Text>
            </List>
            <List>
              <CapIcon type="survey-response" />
              <Text>survey-response</Text>
            </List>
            <List>
              <CapIcon type="tag" />
              <Text>tag</Text>
            </List>
            <List>
              <CapIcon type="task" />
              <Text>task</Text>
            </List>
            <List>
              <CapIcon type="tick" />
              <Text>tick</Text>
            </List>
            <List>
              <CapIcon type="tooltip" />
              <Text>tooltip</Text>
            </List>
            <List>
              <CapIcon type="upload" />
              <Text>upload</Text>
            </List>
            <List>
              <CapIcon type="user" />
              <Text>user</Text>
            </List>
            <List>
              <CapIcon type="view" />
              <Text>view</Text>
            </List>
            <List>
              <CapIcon type="warning" />
              <Text>warning</Text>
            </List>
            <List>
              <CapIcon type="search" />
              <Text>search</Text>
            </List>
          </ul>
        </div>
        {`Used as:`}
        <CapHeading type="h2">{`<CapIcon type="add-media" />`}</CapHeading>
        <br />
        <CapHeading type="h3">Font size and color property can be changed through css for these Icons</CapHeading>
        <PropertyTable data={infoData} />
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/icon/"> Icons </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>

        <pre>
          {`
          .cap-icon-v2-add:hover {
            color: red;
          }
        `}
        </pre>
        <pre>
          {`Run following command for all the new Svg Icons to be added as components:

@svgr/cli --icon --svg-props fill="currentColor" -d destinationDirectory SouceDirectory

Running this command will add ".js" files for all svgs in destinationDirectory.

These Icons then can be moved to components/assets/svgIcons/Icons folder

Export the icon path in components/assets/svgIcons/index.js

Add switch case of icon type  in components/assets/svgIcons/component`}
        </pre>
      </div>
    );
  }
}
