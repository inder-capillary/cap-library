/**
 * CapHeaderDoc
 */
import React, { Component } from "react";
import styled from 'styled-components';
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeader } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: 'size',
    description: "Size can be `large` or `regular`. The difference is in title/description size and padding between title and description",
    type: "string",
    default: "large",
    required: "-",
  },
  {
    key: 2,
    property: "title",
    description: "main title",
    type: "sting | react node",
    default: "-",
    required: "true",
  },
  {
    key: 3,
    property: 'description',
    description: "sub description which will be shown below title by default",
    type: "string | react node",
    default: "-",
    required: "_",
  },
  {
    key: 4,
    property: "inline",
    description: "Wheather to show description inline to title",
    type: "string",
    default: "false",
    required: "_",
  },
  {
    key: 5,
    property: 'prefix',
    description: "A react node to show before title.",
    type: "react node",
    default: "-",
    required: "-",
  },
];

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  padding: 16px;
  border-right: 1px solid;
`;
export default class CapHeaderDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-header-info">
        <Flex className="cap-header-showcase">
          <Container>
            <div>With description position right</div>
            <CapHeader description="Description" title="Title" inline />
          </Container>
          <Container>
            <div>With default description position</div>
            <CapHeader description="Description" title="Title" />
          </Container>
          <Container>
            <div>With prefix component and description passed as react node</div>
            <CapHeader
              description={<span style={{ color: "#091e42" }}>This is a Description node</span>}
              title="Title"
              prefix={(
                <i className="material-icons">
                  keyboard_backspace
                </i>
              )} />
          </Container>
          <Container>
            <div>Without description</div>
            <CapHeader
              title="Title"
              prefix={(
                <i className="material-icons">
                  keyboard_backspace
                </i>
              )} />
          </Container>
          <Container>
            <div>Regular size header</div>
            <CapHeader
              description="Description"
              size="regular"
              title="Title"
              prefix={(
                <i className="material-icons">
                  keyboard_backspace
                </i>
              )} />


          </Container>
          <Container>
            <div>small size header</div>
            <CapHeader
              description="Description"
              size="small"
              title="Title"
              prefix={(
                <i className="material-icons">
                  keyboard_backspace
                </i>
              )} />
          </Container>
        </Flex>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
