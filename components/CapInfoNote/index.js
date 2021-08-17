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
import CapColumn from '../CapColumn';
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
        <CapColumn span={2}>
          {/* eslint-disable-next-line */}
          <Note noteText={props.noteText} />:
        </CapColumn>
        <CapColumn span={22} style={{marginLeft: '-20px'}}>
          {props.message}
        </CapColumn>
      </CapRow>
    )}
    type="info"
    icon={(
      <CapIcon
        type="info"
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
};

export default LocaleHoc(InfoNote, { key: 'InfoNote' });
