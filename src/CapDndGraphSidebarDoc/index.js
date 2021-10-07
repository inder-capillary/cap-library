import React from 'react';
import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import CapDndGraphSidebar from '../../components/CapDndGraphSidebar';
import PropertyTable from '../../helpers/PropertyTable';
import { CAP_YELLOW, CAP_SECONDARY, CAP_BLUE } from '../../components/styled/variables';

const { Sider } = Layout;

const api = [
  {
    key: 1,
    property: "nodes",
    description: "List of nodes in nested format: { engagements: {title: '', description: '', color: '', children: [ { type: 'sms', label: 'SMS' }, ... ]}, ... }",
    type: "object",
    default: null,
  },
];

const sidebarNodes = [
  {
    key: 'engagements',
    title: 'Engagements',
    tooltipText: 'engagement nodes',
    children: [
      {
        id: 'sms',
        type: "sms",
        label: "SMS",
      },
      {
        id: 'email',
        type: "messageWithTransform",
        label: "Email",
      },
      {
        id: 'mpush',
        type: "mpush",
        label: "M-push",
      },
      {
        id: 'line',
        type: "line",
        label: "Line",
      },
      {
        id: 'wechat',
        type: "wechatOutline",
        label: "WeChat",
      },
      {
        id: 'topXChannel',
        type: "topXChannel",
        label: "Top X channel",
      },
      {
        id: 'channelPriority',
        type: "channelPriority",
        label: "Channel priority",
      },
      {
        id: 'abTesting',
        type: "lab",
        label: "A/B test",
      },
    ],
    color: CAP_YELLOW,
  },
  {
    key: 'flowControl',
    title: 'Flow Control',
    tooltipText: 'flow control nodes',
    children: [
      {
        id: 'wait',
        type: "alarm",
        label: "Wait",
      },
      {
        id: 'waitUntil',
        type: "waitEvent",
        label: "Wait till event",
        isMultiPath: true,
      },
      {
        id: 'join',
        type: "join",
        label: "Join",
      },
      {
        id: 'engagementSplit',
        type: "engagementSplit",
        label: "Engagement split",
        isMultiPath: true,
      },
      {
        id: 'split',
        type: "split",
        label: "Decision split",
      },
    ],
    color: CAP_BLUE,
  },
  {
    key: 'actions',
    title: 'Actions',
    tooltipText: 'actions nodes',
    children: [
      {
        id: 'userAttributeChange',
        type: "userAttributeChange",
        label: "User attribute change",
      },
      {
        id: 'api',
        type: "api",
        label: "API call",
      },
    ],
    color: CAP_SECONDARY.base,
  },
];

const props = {
  sidebarTitle: 'Building blocks',
  sidebarTitleInfo: 'Info text here',
  sidebarDescription: 'Drag & drop blocks to create the journey, start with the Entry triggers',
  nodes: sidebarNodes,
};

function CapDndGraphSidebarDoc() {
  return (
    <Layout>
      <Sider width={240}>
        <DndProvider backend={HTML5Backend}>
          <CapDndGraphSidebar {...props} isNodeDraggable />
        </DndProvider>
      </Sider>
      <Layout>
        <PropertyTable data={api} />
      </Layout>
    </Layout>
  );
}
export default CapDndGraphSidebarDoc;
