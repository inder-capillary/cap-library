import React from 'react';
import { shallow } from 'enzyme';
import { Tree } from 'antd';
import CapTree from '../index';
const {TreeNode} = Tree;
const {CapTreeNode} = CapTree;


describe('<CapTree />', () => {
  const wrapper = shallow(<CapTree />);
  it('Expect to have antd Tree component', () => {
    expect(wrapper.find(Tree)).toHaveLength(1);
  });
  // const CapTreeNodeWrapper = shallow(<CapTreeNode />);
  // it('Expect to have antd TreeNode component', () => {
  //   expect(CapTreeNodeWrapper.find(TreeNode).toHaveLength(1));
  // });
});
