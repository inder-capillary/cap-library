import React from "react";

import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import CapBlock from "../index";

afterEach(() => {
  jest.clearAllMocks();
});

describe("CapBlock", () => {
  it("Should Render correctly", () => {
    const wrapper = shallow(<CapBlock>Test</CapBlock>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should hide contents when collapse button is clicked", () => {
    const wrapper = mount(
      <CapBlock isCollapseEnabled>Test 123</CapBlock>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find("i.cap-icon-v2-chevron-up").simulate("click");
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it("Should call delete callback when delete button is clicked", () => {
    const deleteCallback = jest.fn();
    const wrapper = mount(
      <CapBlock isDeleteEnabled deleteCallback={deleteCallback}>
        Test 123
      </CapBlock>
    );
    wrapper.find("i.cap-icon-v2-delete").simulate("click");
    expect(deleteCallback).toHaveBeenCalledTimes(1);
  });
});
