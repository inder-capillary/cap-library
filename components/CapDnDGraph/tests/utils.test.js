import {
  computeJoinGraphNodesData,
  updateJoinOrJoinedGraphNodeProp
} from "../utils";
import { mockdata } from "../mockdata";

describe("Utils functions test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const {
    computeJoinGraphNodesDataInput,
    computeJoinGraphNodesDataOutput,
    updateJoinOrJoinedGraphNodePropInput1,
    updateJoinOrJoinedGraphNodePropInput2,
    updateJoinOrJoinedGraphNodePropOutput
  } = mockdata;

  it("computeJoinGraphNodesData should accept graphNodes and return joinGraphNodesData", () => {
    expect(computeJoinGraphNodesData(computeJoinGraphNodesDataInput)).toEqual(
      computeJoinGraphNodesDataOutput
    );
  });

  it("updateJoinOrJoinedGraphNodeProp should accept graphNodes, joinGraphNodesData and return updatedJoinOrJoinedGraphNodes", () => {
    expect(
      updateJoinOrJoinedGraphNodeProp(
        updateJoinOrJoinedGraphNodePropInput1,
        updateJoinOrJoinedGraphNodePropInput2
      )
    ).toEqual(updateJoinOrJoinedGraphNodePropOutput);
  });
});
