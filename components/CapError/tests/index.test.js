import React from 'react';
import renderer from 'react-test-renderer';
import CapError from '../index';

describe('<CapError />', () => {
  it('CapLabel renders correctly', () => {
    const tree = renderer.create(<CapError />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
