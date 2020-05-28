/**
*
* CapReorderComponent
*
*/

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import cloneDeep from 'lodash/cloneDeep';
import sortBy from 'lodash/sortBy';
import PropTypes from 'prop-types';
import CapCard from '../CapCard';
import CapIcon from '../CapIcon';
import CapLabel from '../CapLabel';
import CapRow from '../CapRow';
import { CAP_SPACE_12 } from '../styled/variables';

import './_capReorderComponent.scss';
function CapReorderComponent(props) {
  const [panes, setPanes] = useState(props.panes);
  const CapCustomIcon = styled(CapIcon)`
    position: absolute;
    top: 39%;
    z-index: 10;
  `;

  useEffect(() => {
    setPanes(props.panes);
  }, [props.reset]);

  const changeOrder = (order, carousel) => {
    let clonedPane = cloneDeep(panes);
    let selectedOrder = order;
    if (carousel === 'left') {
      selectedOrder = order - 1;
    } else {
      selectedOrder = order + 1;
    }
    /* eslint-disable no-param-reassign */
    clonedPane.forEach((c) => {
      if (c.order === order) {
        c.order = selectedOrder;
        c.id = panes[selectedOrder - 1].id;
      } else if (c.order === selectedOrder) {
        c.order = order;
        c.id = panes[order - 1].id;
      }
      return c;
    });
    /* eslint-enable no-param-reassign */
    clonedPane = sortBy(clonedPane, ['order']);
    setPanes(clonedPane);
    props.reOrderChannel(clonedPane);
  };

  return (
    <div className="cap-reorder-component-v2">
      {panes.map(({ order, capIconClass, withBackground, backgroundProps, icon, channel }, index) => (
        <div style={{display: 'inline-block', paddingRight: CAP_SPACE_12}} key={`order${order}`}>
          {props.title && (
            <CapLabel
              type="label4"
              className="title-label">
              {props.title}
              {' '}
              {order}

            </CapLabel>
          )}
          <CapCard
            className="card-component">
            {index !== 0 && (
              <CapCustomIcon
                type="chevron-left"
                style={{left: CAP_SPACE_12}}
                onClick={() => changeOrder(order, 'left')}
              >
              </CapCustomIcon>
            )}
            <CapRow
              style={{
                display: 'inline-block',
              }}
            >
              <CapIcon
                type={icon}
                className={`component-icon ${capIconClass}`}
                withBackground={withBackground}
                backgroundProps={backgroundProps}
              />
              <CapLabel
                type="label1"
                className="component-channel"
              >
                {channel}
              </CapLabel>
            </CapRow>
            {index !== panes.length - 1 && (
              <CapCustomIcon
                type="chevron-right"
                style={{right: CAP_SPACE_12}}
                onClick={() => changeOrder(order, 'right')}
              >
              </CapCustomIcon>
            )}
          </CapCard>
        </div>
      ))}
    </div>
  );
}

CapReorderComponent.propTypes = {
  panes: PropTypes.array.isRequired,
  title: PropTypes.string,
  reOrderChannel: PropTypes.func,
  reset: PropTypes.bool,
};

export default CapReorderComponent;
