import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import CapCustomCard from '../index';

describe('<CapCustomCard />', () => {
  it('CapCustomCard renders correctly', () => {
    const tree = renderer.create(<CapCustomCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
