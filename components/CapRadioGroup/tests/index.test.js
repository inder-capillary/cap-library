import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars

import CapRadioGroup from '../index';

describe('<CapRadioGroup />', () => {
  it('CapRadioGroup renders correctly', () => {
    const tree = renderer.create(<CapRadioGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
