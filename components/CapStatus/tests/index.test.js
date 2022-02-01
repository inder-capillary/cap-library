import React from "react";
import { shallow } from "enzyme";
import CapStatus from "../index";

const MountComponent = () => shallow(<CapStatus type="approved" text="Approved" />);

describe("CapStatus", () => {
  it("Should render the component", () => {
    const wrapper = MountComponent();
    expect(wrapper).toMatchSnapshot();
  });
});
