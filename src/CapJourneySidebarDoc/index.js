import React from 'react';
import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import CapJourneySidebar from '../../components/CapJourneySidebar';
import PropertyTable from '../../helpers/PropertyTable';
import { CAP_YELLOW, CAP_SECONDARY } from '../../components/styled/variables';

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

function CapJourneySidebarDoc() {
  return (
    <Layout>
      <Sider width={240}>
        <DndProvider backend={HTML5Backend}>
          <CapJourneySidebar nodes={nodes} drag />
        </DndProvider>
      </Sider>
      <Layout>
        <PropertyTable data={api} />
      </Layout>
    </Layout>
  );
}
export default CapJourneySidebarDoc;
