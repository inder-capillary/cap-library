import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import CapSlideBox from '../index';

describe('<CapSlider />', () => {
  it('renders correctly', () => {
    const closeSlideBox = jest.fn();
    const tree = renderer.create(
      <CapSlideBox
        show
        size="size-r"
        header="Slide Box Example"
        content={<div>{}</div>}
        handleClose={closeSlideBox}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
