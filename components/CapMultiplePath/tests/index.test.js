import React from "react";

import { mount } from "enzyme";

import { mockdata } from "../mockdata";
import CapMultiplePath from "../index";
const {
  pathList1,
  pathList1Add,
  pathList2,
  pathList3,
  pathList3Item1Up,
  pathList3Item1Down,
  pathList3Item1Delete,
  pathList1Item1Update,
} = mockdata;

const ContentsRenderer = ({ pathIndex, pathList }) => (
  <>{pathList[pathIndex].contents}</>
);

const setPathList = jest.fn();
jest.mock('nanoid', () => ({ nanoid: () => '1000' }));

afterEach(() => {
  jest.clearAllMocks();
});

const MountComponent = (pathList) => mount(
  <CapMultiplePath
    pathList={pathList}
    setPathList={setPathList}
    ContentsRenderer={ContentsRenderer}
    addPathDisabled={false}
    addPathDisabledMessage=""
    isToggleEnabled
    defaultContents="Hello World"
  />
);

describe("CapMultiplePath", () => {
  it("Should render the component", () => {
    const wrapper = MountComponent(pathList1);
    expect(wrapper).toMatchSnapshot();
  });
  it("should not display delete button when only one path exist", () => {
    const wrapper = MountComponent(pathList1);
    expect(wrapper.find("i.cap-icon-v2-delete").exists()).toBeFalsy();
  });
  it("Should display delete button in case of multiple paths", () => {
    const wrapper = MountComponent(pathList2);
    expect(wrapper.find("i.cap-icon-v2-delete").exists()).toBeTruthy();
  });
  it("Should display inputbox when pathname is clicked", () => {
    const wrapper = MountComponent(pathList1);
    expect(wrapper.find("textarea").exists()).toBeFalsy();
    wrapper
      .find('[path-name-edit="false"]')
      .at(0)
      .simulate("click");
    expect(wrapper.find("textarea").exists()).toBeTruthy();
  });

  it("Should call setPathList when add path button is clicked", () => {
    const wrapper = MountComponent(pathList1);
    wrapper.find("button").simulate("click");
    expect(setPathList).toHaveBeenCalledTimes(1);
    expect(setPathList).toHaveBeenCalledWith(pathList1Add);
  });

  it("Should call setPathList when up and down arrow is clicked", () => {
    const wrapper = MountComponent(pathList3);
    wrapper
      .find("i.cap-icon-v2-arrow-up")
      .at(1)
      .simulate("click");
    expect(setPathList).toHaveBeenCalledTimes(1);
    expect(setPathList).toHaveBeenCalledWith(pathList3Item1Up);
    wrapper
      .find("i.cap-icon-v2-arrow-down")
      .at(1)
      .simulate("click");
    expect(setPathList).toHaveBeenCalledTimes(2);
    expect(setPathList).toHaveBeenCalledWith(pathList3Item1Down);
  });

  it("Should call setPathList when delete button is clicked", () => {
    const wrapper = MountComponent(pathList3);
    wrapper
      .find("i.cap-icon-v2-delete")
      .at(1)
      .simulate("click");
    expect(setPathList).toHaveBeenCalledTimes(1);
    expect(setPathList).toHaveBeenCalledWith(pathList3Item1Delete);
  });

  it("Should call setPathList when pathname is being updated", () => {
    const wrapper = MountComponent(pathList1);
    wrapper
      .find('[path-name-edit="false"]')
      .at(1)
      .simulate("click");
    wrapper.update();
    const textarea = wrapper.find("textarea");
    textarea.simulate("change", { target: { value: "abc" } });
    textarea.props().onBlur({currentTarget: {value: "abc"}}); //click outside or onBlur
    wrapper.update();
    expect(setPathList).toHaveBeenCalledTimes(1);
    expect(setPathList).toHaveBeenCalledWith(pathList1Item1Update);
  });
});
