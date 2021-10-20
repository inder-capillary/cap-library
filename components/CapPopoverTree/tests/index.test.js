
import React from 'react';
import { shallow, mount } from 'enzyme';
import { CapPopoverTree } from '../index';
import { mockData } from './mockData';


jest.mock("../../CapPopover", () => ({
  __esModule: true,
  default: (props) => <div className="cap-popover" {...props}>CapPopover Mock</div>,
}));


describe('<CapPopoverTree />', () => {
  let wrapper;
  const onSelect = jest.fn();
  const { treeData, treeNode, componentProps, selectedParentKey, selectedChildKey } = mockData;
  const renderFunction = (props) => mount(<CapPopoverTree treeData={treeData} {...props} />);


  it('should toggle visibility CapPopoverTree on trigger click', () => {
    wrapper = renderFunction(componentProps);
    expect(wrapper).toMatchSnapshot();
    componentProps.visible = false;
    wrapper = renderFunction(componentProps);
    expect(wrapper).toMatchSnapshot();
  });

  const renderOverlayComponent = () => {
    const OverlayComponent = () => wrapper.find('_default').props().content;
    return shallow(<OverlayComponent />);
  };

  it('should get filtered result on search', () => {
    const event = { target: { value: 'brandCode' }};
    wrapper = renderFunction(componentProps);
    wrapper = renderOverlayComponent().find('.search-tree-node').props().onChange(event);
    expect(wrapper).toMatchSnapshot();
    event.target.value = 'on Event';
    wrapper = renderFunction(componentProps);
    wrapper = renderOverlayComponent().find('.search-tree-node').props().onChange(event);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should select the child node onSelect', () => {
    componentProps.onSelect = onSelect;
    wrapper = renderFunction(componentProps);
    wrapper = renderOverlayComponent().find('Styled(CapTree)').props().onSelect(selectedChildKey, treeNode);
    expect(onSelect).toHaveBeenCalledWith(selectedChildKey);
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should expand and collapse the parent node onSelect', () => {
    treeNode.node.props.isLeafNode = false;
    treeNode.node.props.expanded = false;
    wrapper = renderFunction(componentProps);
    wrapper = renderOverlayComponent().find('Styled(CapTree)').props().onSelect(selectedParentKey, treeNode);
    expect(onSelect).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchSnapshot();
  });
});
