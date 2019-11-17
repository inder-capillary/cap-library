/**
*
* CapCustomCheckbox
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import './_capCustomCheckboxList.scss';
import CapCheckbox from '../CapCheckbox';
import CapHeading from '../CapHeading';
import CapIcon from '../CapIcon';
const classNames = require('classnames');

const { CapHeadingSpan } = CapHeading;
const clsPrefix = "cap-customCheckboxList-v2";
function CapCustomCheckboxList(props) {
  const {paneList, className, ...others} = props;
  return (
    <CapCheckbox.Group style={{ width: '100%', display: 'flex'}} {...others}>
      {paneList.map((data) => {
        const { inductiveText, iconProps, title, ...rest} = data;
        return (

          <div className={classNames(clsPrefix, className)}>
            <div className="div-icon">
              <CapIcon className="customCheckbox-icon" {...iconProps} />
            </div>
            <CapCheckbox {...rest} className="customCheckbox">
              <CapHeadingSpan type="h4">{title}</CapHeadingSpan>
              {inductiveText && <CapHeading className="customCheckbox-inductive-text" type="label4">{inductiveText}</CapHeading>}
            </CapCheckbox>
          </div>
        );
      })}
    </CapCheckbox.Group>

  );
}

CapCustomCheckboxList.propTypes = {
  className: PropTypes.string,
  paneList: PropTypes.array,
};

export default CapCustomCheckboxList;
