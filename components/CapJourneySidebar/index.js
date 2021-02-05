import React from 'react';
import PropTypes from 'prop-types';
import SideBarIconContainer from './SideBarIconContainer';
import CapHeading from '../CapHeading';
import CapLabel from '../CapLabel';
import CapTooltip from '../CapTooltip';
import CapIcon from '../CapIcon';
import LocaleHoc from '../LocaleHoc';
import './_capJourneySidebar.scss';


export const CapJourneySidebar = (props) => {
  const { nodes = {}, sidebarTitle, sidebarDescription, infoTooltipTitle, drag } = props;

  return (
    <div className="journey-sidebar-container">
      <div className="title-row">
        <CapHeading type="h3">
          {sidebarTitle}
        </CapHeading>
        <CapTooltip title={infoTooltipTitle}>
          <CapIcon type="info" className="info-icon" size="xs" />
        </CapTooltip>
      </div>
      <CapLabel type="label3">
        {sidebarDescription}
      </CapLabel>
      {SideBarIconContainer(nodes, drag)}
    </div>
  );
};

CapJourneySidebar.propTypes = {
  nodes: PropTypes.object,
  sidebarTitle: PropTypes.string,
  sidebarDescription: PropTypes.string,
  infoTooltipTitle: PropTypes.string,
  drag: PropTypes.bool,
};

export default LocaleHoc(CapJourneySidebar, { key: 'CapJourneySidebar' });
