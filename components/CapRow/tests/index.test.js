import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars

import CapRow from '../index';

describe('<CapRow />', () => {
  it('CapRow renders correctly', () => {
    const tree = renderer.create(<CapRow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
