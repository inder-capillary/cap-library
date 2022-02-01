import React from 'react';
import PropTypes from 'prop-types';
import {
  CAP_G01,
  CAP_SPACE_12,
  CAP_SPACE_24,
} from '../styled/variables';
import CapAlert from '../CapAlert';
import CapIcon from '../CapIcon';
import CapLabel from '../CapLabel';
import CapRow from '../CapRow';
import LocaleHoc from '../LocaleHoc';

const Note = ({ noteText }) => (
  <CapLabel.CapLabelInline type="label4" style={{ paddingLeft: CAP_SPACE_24 }}>{noteText}</CapLabel.CapLabelInline>
);

Note.propTypes = {
  noteText: PropTypes.string,
};

const InfoNote = (props) => (
  <CapAlert
    message={(
      <CapRow>
        {/* eslint-disable-next-line */}
          <Note noteText={props.noteText} />: {props.message}
      </CapRow>
    )}
    className={props.className}
    type="info"
    icon={(
      <CapIcon
        type={props.type}
        size="s"
        style={{
          color: `${CAP_G01}`,
          top: 9,
        }}
      />
    )}
    showIcon
    style={{
      marginTop: CAP_SPACE_12,
      marginBottom: CAP_SPACE_12,
      ...props.style,
    }}
  />
);

InfoNote.propTypes = {
  message: PropTypes.node,
  style: PropTypes.object,
  noteText: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

InfoNote.defaultProps = {
  type: 'info', //this will not break the existing flow, if any different icon required that can be specified.
};

export default LocaleHoc(InfoNote, { key: 'InfoNote' });
