import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
// import {mount} from 'enzyme';

import CapColumn from '../index';

describe('<CapColumn />', () => {
  it('CapColumn renders correctly', () => {
    const tree = renderer.create(<CapColumn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
