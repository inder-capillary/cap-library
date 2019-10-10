import React from 'react';
import renderer from 'react-test-renderer';
import CapExpressionEditor from '../index';

describe('<CapExpressionEditor />', () => {
  it('CapExpressionEditor renders correctly', () => {
    const tree = renderer.create(<CapExpressionEditor />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
