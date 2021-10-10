import React from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import CapLabel from '../../components/CapLabel';
import CapBorderedBox from '../../components/CapBorderedBox';
import CapIcon from '../../components/CapIcon';
import CapHeading from '../../components/CapHeading';
import CapDnDGraph from '../../components/CapDnDGraph';
import Trigger from './Trigger';
import { CAP_YELLOW, CAP_BLUE, CAP_SECONDARY} from '../../components/styled/variables';

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

const entryTrigger = {
  id: '1',
  component: Trigger,
  props: {
    triggerContent: (
      <CapHeading type="h6" style={{marginTop: '24px', textAlign: 'left', marginLeft: '16px'}}>
        Start journey by defining Entry trigger
      </CapHeading>
    ),
  },
  to: ['2'],
  width: 148,
  height: 180,
  type: 'ENTRY_TRIGGER',
};

const exitTrigger = {
  id: '1234',
  component: Trigger,
  props: {
    buttonProps: {
      type: 'secondary',
      title: 'Exit Trigger',
      iconType: 'exit',
    },
    triggerContent: (
      <CapHeading
        type="h6"
        style={{marginTop: '8px', textAlign: 'left', marginLeft: '16px'}}
      >
        (Optional)
      </CapHeading>
    ),
  },
  width: 148,
  height: 104,
  showEdge: false,
  type: 'EXIT_TRIGGER',
};

const endIconProps = {
  type: 'end',
  style: {
    padding: '15px 0',
    color: '#b3bac5',
  },
};

export const initialGraphData = [
  entryTrigger,
  exitTrigger,
  {
    id: 'emptyGraphText',
    component: CapLabel,
    props: {
      type: 'label1',
      children: "Drag and drop building blocks to complete the journey",
    },
    showEdge: false,
    width: 180,
    height: 40,
    type: 'EMPTY_GRAPH_TEXT',
  },
  {
    from: '1',
    id: '2',
    component: CapBorderedBox,
    to: ['3'],
    type: 'PLACEHOLDER_NODE',
    width: 48,
    height: 48,
  },
  {
    from: '2',
    id: '3',
    component: CapBorderedBox,
    to: ['4', '5'],
    type: 'PLACEHOLDER_NODE',
    width: 48,
    height: 48,
  },
  {
    from: '3',
    id: '4',
    component: CapBorderedBox,
    to: ['6'],
    type: 'PLACEHOLDER_NODE',
    width: 48,
    height: 48,
  },
  {
    from: '3',
    id: '5',
    component: CapBorderedBox,
    to: ['7'],
    type: 'PLACEHOLDER_NODE',
    width: 48,
    height: 48,
  },
  {
    from: '4',
    id: '6',
    component: CapIcon,
    props: endIconProps,
    type: 'END_NODE',
    width: 48,
    height: 48,
  },
  {
    from: '6',
    id: '7',
    component: CapIcon,
    props: endIconProps,
    type: 'END_NODE',
    width: 48,
    height: 48,
  },
];

const props = {
  sidebarProps: {
    sidebarTitle: 'Building blocks',
    sidebarTitleInfo: 'Info text here',
    sidebarDescription: 'Drag & drop blocks to create the journey, start with the Entry triggers',
    nodes: sidebarNodes,
  },
  initialGraphData,
  dndGraphId: 'journey-graph-container',
};
function CapDndGraphSidebar() {
  return (
    <DndProvider backend={HTML5Backend}>
      <CapDnDGraph {...props} />
    </DndProvider>
  );
}
export default CapDndGraphSidebar;
