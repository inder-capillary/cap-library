import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import CapCard from '../index';

describe('<CapCard />', () => {
  it('CapCard renders correctly', () => {
    const tree = renderer.create(<CapCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
