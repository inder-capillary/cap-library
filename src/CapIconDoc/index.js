/**
* CapIconDoc
*/
import React, { Component } from "react";
import styled from 'styled-components';
import PropertyTable from '../../helpers/PropertyTable';
import { CapIcon, CapHeading } from "../../components";
import "./info.scss";

const { CapHeadingSpan } = CapHeading;

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
  {
    key: 4,
    property: "withbackground",
    description: "If this prop is true, then icon shows on a grey background by default",
    type: "boolean",
    default: "false",
  },
  {
    key: 5,
    property: "backgroundProps",
    description: "className and style can be passed in background props to override default background style Eg: backgroundProps={{ style={backgroundColor: 'green', className='my-background-icon'}}}",
    type: "object",
    default: "-",
  },
  {
    key: 6,
    property: "svgProps",
    description: "props that can be passed to js files of icons",
    type: "object",
    default: "-",
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CapHeadingSpan type="h5">
              {`Icon with `}
              <CapHeadingSpan style={{ color: 'green' }} type="h3">withBackground</CapHeadingSpan>
              {` prop as true:`}
            </CapHeadingSpan>
            <CapIcon style={{ color: 'white' }} backgroundProps={{ style: { backgroundColor: 'green', marginLeft: "16px" } }} type="eye" withBackground />
          </div>
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
              <CapIcon type="ftp" />
              <Text>ftp</Text>
            </List>
            <List>
              <CapIcon type="open-in-new" />
              <Text>open-in-new</Text>
            </List>
            <List>
              <CapIcon type="open-in-new-light" />
              <Text>open-in-new-light</Text>
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
            <List>
              <CapIcon type="chart" />
              <Text>chart</Text>
            </List>
            <List>
              <CapIcon type="megaphone-filled" />
              <Text>megaphone-filled</Text>
            </List>
            <List>
              <CapIcon type="message-filled" />
              <Text>message-filled</Text>
            </List>
            <List>
              <CapIcon type="send" />
              <Text>send</Text>
            </List>
            <List>
              <CapIcon type="sort" />
              <Text>sort</Text>
            </List>
            <List>
              <CapIcon type="eye" />
              <Text>eye</Text>
            </List>
            <List>
              <CapIcon type="sms" />
              <Text>sms</Text>
            </List>
            <List>
              <CapIcon type="call" />
              <Text>call</Text>
            </List>
            <List>
              <CapIcon type="groups" />
              <Text>groups</Text>
            </List>
            <List>
              <CapIcon type="clock" />
              <Text>clock</Text>
            </List>
            <List>
              <CapIcon type="refresh" />
              <Text>refresh</Text>
            </List>
            <List>
              <CapIcon type="delete" />
              <Text>delete</Text>
            </List>
            <List>
              <CapIcon type="drag" />
              <Text>drag</Text>
            </List>
            <List>
              <CapIcon type="launch" />
              <Text>launch</Text>
            </List>
            <List>
              <CapIcon type="capture" />
              <Text>capture</Text>
            </List>
            <List>
              <CapIcon type="dollar" />
              <Text>dollar</Text>
            </List>
            <List>
              <CapIcon type="commentMessage" />
              <Text>commentMessage</Text>
            </List>
            <List>
              <CapIcon type="greetings" />
              <Text>greetings</Text>
            </List>
            <List>
              <CapIcon type="shapeCopy" />
              <Text>shapeCopy</Text>
            </List>
            <List>
              <CapIcon type="box" />
              <Text>box</Text>
            </List>
            <List>
              <CapIcon type="growth-graph" />
              <Text>growth-graph</Text>
            </List>
            <List>
              <CapIcon type="siren" />
              <Text>siren</Text>
            </List>
            <List>
              <CapIcon type="delay" />
              <Text>delay</Text>
            </List>
            <List>
              <CapIcon type="attachment" />
              <Text>attachment</Text>
            </List>
            <List>
              <CapIcon type="desktop" />
              <Text>desktop</Text>
            </List>
            <List>
              <CapIcon type="tablet" />
              <Text>tablet</Text>
            </List>
            <List>
              <CapIcon type="mobile" />
              <Text>mobile</Text>
              <CapIcon type="store" />
              <Text>store</Text>
            </List>
            <List>
              <CapIcon type="language" />
              <Text>language</Text>
            </List>
            <List>
              <CapIcon type="footwear" />
              <Text>footwear</Text>
            </List>
            <List>
              <CapIcon type="gender" />
              <Text>gender</Text>
            </List>
            <List>
              <CapIcon type="offerWithColor" />
              <Text>offerWithColor</Text>
            </List>
            <List>
              <CapIcon type="minus" />
              <Text>minus</Text>
            </List>
            <List>
              <CapIcon type="smsFilled" />
              <Text>smsFilled</Text>
            </List>
            <List>
              <CapIcon type="emailFilled" />
              <Text>emailFilled</Text>
            </List>
            <List>
              <CapIcon type="mpushFilled" />
              <Text>mpushFilled</Text>
            </List>
            <List>
              <CapIcon type="wechatFilled" />
              <Text>wechatFilled</Text>
            </List>
            <List>
              <CapIcon type="reorder" />
              <Text>reorder</Text>
            </List>
            <List>
              <CapIcon type="channelPriority" />
              <Text>channelPriority</Text>
            </List>
            <List>
              <CapIcon type="apps" />
              <Text>apps</Text>
            </List>
            <List>
              <CapIcon type="basket" />
              <Text>basket</Text>
            </List>
            <List>
              <CapIcon type="connect" />
              <Text>connect</Text>
            </List>
            <List>
              <CapIcon type="funnel" />
              <Text>funnel</Text>
            </List>
            <List>
              <CapIcon type="group-chat" />
              <Text>group-chat</Text>
            </List>
            <List>
              <CapIcon type="pointer" />
              <Text>pointer</Text>
            </List>
            <List>
              <CapIcon type="speaker" />
              <Text>speaker</Text>
            </List>
            <List>
              <CapIcon type="store-traffic" />
              <Text>store-traffic</Text>
            </List>
            <List>
              <CapIcon type="video" />
              <Text>video</Text>
            </List>
            <List>
              <CapIcon type="global" />
              <Text>global</Text>
            </List>
            <List>
              <CapIcon type="facebook" />
              <Text>facebook</Text>
            </List>
            <List>
              <CapIcon type="mail" />
              <Text>mail</Text>
            </List>
            <List>
              <CapIcon type="wechat" />
              <Text>wechat</Text>
            </List>
            <List>
              <CapIcon type="scenery" />
              <Text>scenery</Text>
            </List>
            <List>
              <CapIcon type="premium" />
              <Text>premium</Text>
            </List>
            <List>
              <CapIcon type="errorIndicator" />
              <Text>errorIndicator</Text>
            </List>
            <List>
              <CapIcon type="premiumColored" />
              <Text>premiumColored</Text>
            </List>
            <List>
              <CapIcon type="lock" />
              <Text>lock</Text>
            </List>
            <List>
              <CapIcon type="union" />
              <Text>union</Text>
            </List>
            <List>
              <CapIcon type="intersect" />
              <Text>intersect</Text>
            </List>
            <List>
              <CapIcon type="subtractLeft" />
              <Text>subtractLeft</Text>
            </List>
            <List>
              <CapIcon type="subtractRight" />
              <Text>subtractRight</Text>
            </List>
            <List>
              <CapIcon type="error" />
              <Text>Error</Text>
            </List>
            <List>
              <CapIcon type="sync" />
              <Text>sync</Text>
            </List>
            <List>
              <CapIcon type="folder" />
              <Text>folder</Text>
            </List>
            <List>
              <CapIcon type="click" />
              <Text>click</Text>
            </List>
            <List>
              <CapIcon type="line" />
              <Text>line</Text>
            </List>
            <List>
              <CapIcon type="unicode" />
              <Text>unicode</Text>
            </List>
            <List>
              <CapIcon type="whatsapp" />
              <Text>whatsapp</Text>
            </List>
            <List>
              <CapIcon type="notSent" />
              <Text>notSent</Text>
            </List>
            <List>
              <CapIcon type="xengage" withBackground />
              <Text>xengage</Text>
            </List>
            <List>
              <CapIcon type="hotstar" />
              <Text>hotstar</Text>
            </List>
            <List>
              <CapIcon type="facebook" />
              <Text>facebook</Text>
            </List>
            <List>
              <CapIcon type="google-ad" />
              <Text>google-ad</Text>
            </List>
            <List>
              <CapIcon type="snapchat" />
              <Text>snapchat</Text>
            </List>
            <List>
              <CapIcon type="tiktok" />
              <Text>tiktok</Text>
            </List>
            <List>
              <CapIcon type="rich-video-message" />
              <Text>RichVideo</Text>
            </List>
            <List>
              <CapIcon type="rich-video-message-filled" />
              <Text>RichVideoFilled</Text>
            </List>
            <List>
              <CapIcon type="reply" />
              <Text>Reply</Text>
            </List>
            <List>
              <CapIcon type="sitemap" />
              <Text>Sitemap</Text>
            </List>
            <List>
              <CapIcon type="button" />
              <Text>Button</Text>
            </List>
            <List>
              <CapIcon type="viber" />
              <Text>Viber</Text>
            </List>
          </ul>
        </div>
        {`Used as:`}
        <CapHeading type="h2">{`<CapIcon type="add-media" />`}</CapHeading>
        <br />
        <CapHeading type="h3">Font size and color property can be changed through css for these Icons</CapHeading>
        <pre>
          {`
          .cap-icon-v2-add:hover {
            color: red;
          }
        `}
        </pre>
        <PropertyTable data={infoData} />
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/icon/"> Icons </a>
          component. Please refer their component for detailed explanation of component and supported props.
        </div>
        <pre>
          {`Run following command for all the new Svg Icons to be added as components:

npx @svgr/cli --icon --svg-props fill="currentColor" -d destinationDirectory SouceDirectory

Running this command will add ".js" files for all svgs in destinationDirectory.

These Icons then can be moved to components/assets/svgIcons/Icons folder

Export the icon path in components/assets/svgIcons/index.js

Add switch case of icon type  in components/assets/svgIcons/component

NOTE: Once the JS file is added for the Icons, open it and remove all the other elements except for <svg> <path/> </svg>`}
        </pre>
      </div>
    );
  }
}
