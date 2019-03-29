import React from 'react';
import renderer from 'react-test-renderer';
import CapLabel from '../index';

describe('<CapLabel />', () => {
  it('CapLabel renders correctly', () => {
    const tree = renderer.create(<CapLabel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
