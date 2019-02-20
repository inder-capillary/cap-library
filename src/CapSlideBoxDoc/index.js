/**
* CapSlideBoxDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapSlideBox, CapButton } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "show",
    description: "flag to show / hide the slide box",
    type: "boolean",
    default: "false",
  },
  {
    key: 2,
    property: "size",
    description: "to specify the size of the slide box. value should be one of size-r, size-l",
    type: "string",
    default: "size-r",
  },
  {
    key: 3,
    property: "header",
    description: "string or component to be shown in header of slide box",
    type: "string | element",
    default: "",
  },
  {
    key: 4,
    property: "content",
    description: "string or component to be shown in content of slide box",
    type: "string | element",
    default: "",
  },
  {
    key: 5,
    property: "footer",
    description: "content or component to be shown in footer of slide box",
    type: "string | element",
    default: "",
  },
  {
    key: 6,
    property: "className",
    description: "className given to the component",
    type: "string",
    default: "",
  },
  {
    key: 7,
    property: "handleClose",
    description: "callback called when close is clicked",
    type: "function",
    default: "",
  },
];

const content = "The standard Lorem Ipsum passage, used since the 1500s\n"
  + "\n"
  + "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n"
  + "\n"
  + "Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\n"
  + "\n"
  + "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\n"
  + "\n"
  + "1914 translation by H. Rackham\n"
  + "\n"
  + "\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\n"
  + "\n"
  + "Section 1.10.33 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\n"
  + "\n"
  + "\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n"
  + "\n"
  + "1914 translation by H. Rackham\n"
  + "\n"
  + "\"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\"\n"
  + "\n";

export default class CapSlideBoxDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showSlideBox: false,
      showSlideBox1: false,
    };
  }

  showSlideBox = () => {
    this.setState({ showSlideBox: true });
  }

  showSlideBox1 = () => {
    this.setState({ showSlideBox1: true });
  }

  closeSlideBox = () => {
    this.setState({ showSlideBox: false });
  }

  closeSlideBox1 = () => {
    this.setState({ showSlideBox1: false });
  }

  render() {
    const { showSlideBox, showSlideBox1 } = this.state;
    return (
      <div className="cap-slide-box-info">
        <div className="cap-slide-box-showcase">
          <div>
            <CapButton onClick={this.showSlideBox}>Show SlideBox with default size</CapButton>
            <CapSlideBox
              showShadow
              show={showSlideBox}
              size="size-r"
              header="Slide Box Example"
              content={<div>{content}</div>}
              className="custom-class-name"
              handleClose={this.closeSlideBox}
              footer={<CapButton style={{ float: 'right' }}>Create custom dimension</CapButton>} />
          </div>
          <div style={{ marginTop: '16px' }}>
            <CapButton
              onClick={this.showSlideBox1}>
              {"Show SlideBox without footer and size-l"}
            </CapButton>
            <CapSlideBox
              show={showSlideBox1}
              size="size-l"
              header="Slide Box Example"
              content={<div>{content}</div>}
              handleClose={this.closeSlideBox1} />
          </div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
