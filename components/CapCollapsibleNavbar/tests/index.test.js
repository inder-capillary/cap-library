import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars

import CapCollapsibleNavbar from '../index';

const createNewStates = [{
  label: 'Segment',
  value: 'segment',
  route: '/segments/create',
}];

const states = [{
  label: 'User segments',
  value: 'segment',
  type: 'state',
  route: '/segments/list',
  icon: 'user-segment',
  children: [{
    label: 'Status',
    value: 'segmentStatus',
    children: [{
      label: 'All',
      value: 'All',
    }, {
      label: 'Active',
      value: 'active',
    }, {
      label: 'Inactive',
      value: 'inactive',
    }],
  }],
}];

const navigationConfig = {
  createNewStates,
  sections: [{states}],
  defaultSelectedKey: "segment.segmentStatus",
};

const messages = {
  createNew: 'Create New',
  switcherExpand: 'Expand',
  switcherCollapse: 'Collapse',
};

describe('<CapCollapsibleNavbar />', () => {
  it('CapCollapsibleNavbar renders correctly', () => {
    const tree = renderer.create(<CapCollapsibleNavbar config={navigationConfig} messages={messages} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
