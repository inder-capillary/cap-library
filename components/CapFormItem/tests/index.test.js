import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
// import {mount} from 'enzyme';

import CapFormItem from '../index';

describe('<CapFormItem />', () => {
  it('CapFormItem renders correctly', () => {
    const tree = renderer.create(<CapFormItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
