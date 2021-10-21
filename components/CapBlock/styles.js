import styled from "styled-components";
import * as StyledVars from "../styled/variables";
const { CAP_G07, CAP_COLOR_05 } = StyledVars;
export const StyledDiv = styled.div`
  & {
    position: relative;
    border: 1px solid ${CAP_G07};
    border-left: ${(props) => `4px solid ${props.borderLeftColor}`};
    border-radius: 4px;
    padding: 26px 20px;
    width: ${(props) => props.width};

    [data-type="rounded-icon"] {
      height: 18px;
      width: 18px;
      padding: 2px;
      border-radius: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    [data-type-value="delete"] {
      position: absolute;
      top: 0;
      left: 90%;
      transform: translate(0%, -50%);
      background-color: ${CAP_COLOR_05};
    }

    [data-type-value="collapse"] {
      position: absolute;
      top: 0;
      left: 95%;
      transform: translate(0%, -50%);
      background-color: #d3d3d3;
    }
  }
`;
