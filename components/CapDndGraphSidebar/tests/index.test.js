import React from 'react';
import { mount } from 'enzyme';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {CapJourneySidebar} from '../index';
import { CAP_YELLOW, CAP_SECONDARY } from '../../styled/variables';

const nodes = {
  engagements: {
    title: 'Enagagements',
    description: 'engagement nodes',
    color: CAP_YELLOW,
    children: [
      {
        type: "sms",
        label: "SMS",
      },
      {
        type: "messageWithTransform",
        label: "Email",
      },
      {
        type: "mpush",
        label: "M-push",
      },
      {
        type: "line",
        label: "Line",
      },
      {
        type: "wechatOutline",
        label: "WeChat",
      },
      {
        type: "topXChannel",
        label: "Top X channel",
      },
      {
        type: "channelPriority",
        label: "Channel priority",
      },
      {
        type: "lab",
        label: "A/B test",
      },
    ],
  },
  flowControl: {
    title: 'Flow Control',
    description: 'flow control nodes',
    children: [
      {
        type: "alarm",
        label: "Wait",
      },
      {
        type: "waitEvent",
        label: "Wait till event",
      },
      {
        type: "join",
        label: "Join",
      },
      {
        type: "engagementSplit",
        label: "Engagement split",
      },
      {
        type: "split",
        label: "Decision split",
      },
    ]},
  actions: {
    title: 'Actions',
    description: 'actions nodes',
    color: CAP_SECONDARY.base,
    children: [
      {
        type: "userAttributeChange",
        label: "User attribute c...",
      },
      {
        type: "api",
        label: "API call",
      },
    ]},
};

describe('CapJourneySidebar test', () => {
  it('should render default component if no node is passed', () => {
    const renderedComponent = mount(
      <DndProvider backend={HTML5Backend}>
        <CapJourneySidebar />
      </DndProvider>
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correct component', () => {
    const renderedComponent = mount(
      <DndProvider backend={HTML5Backend}>
        <CapJourneySidebar nodes={nodes} drag />
      </DndProvider>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
