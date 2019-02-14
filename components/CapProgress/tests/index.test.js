import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars

import CapProgress from '../index';

describe('<CapProgress />', () => {
  it('CapProgress renders correctly', () => {
    const tree = renderer.create(<CapProgress />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
