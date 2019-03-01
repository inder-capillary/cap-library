/**
* CapListLayout
*/
import React from "react";
import PropTypes from 'prop-types';
import "./_capListLayout.scss";
// import CapRow from "../CapRow";
import CapActionBar from "../CapActionBar";
import CapTable from "../CapTable";

export default class CapListLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={this.props.className ? `cap-list-view-layout-v2 ${this.props.className}` : "cap-list-view-layout-v2"}>
        {this.props.capActionBar
          && <CapActionBar {...this.props.capActionBar} />
        }
        {this.props.capTable
          && <CapTable className="cap-table-v2" {...this.props.capTable} />
        }
      </div>
    );
  }
}

CapListLayout.propTypes = {
  className: PropTypes.string,
  capActionBar: PropTypes.object,
  capTable: PropTypes.object,
};
