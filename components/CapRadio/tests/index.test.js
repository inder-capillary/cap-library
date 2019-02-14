import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars

import CapRadio from '../index';

describe('<CapRadio />', () => {
  it('CapRadio renders correctly', () => {
    const tree = renderer.create(<CapRadio />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
