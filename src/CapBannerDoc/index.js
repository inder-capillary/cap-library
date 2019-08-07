/**
* CapBannerDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapBanner, CapLabel, CapIcon, CapLink } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "iconProps",
    description: "props that are to be passed to CapIcon. Check CapIcon for further details",
    type: "object",
    default: "",
  }, {
    key: 2,
    property: "bannerContent",
    description: "banner content that is to be shown",
    type: "string || element",
    default: "",
  }, {
    key: 3,
    property: "actionContent",
    description: "if you want to perform some action from the banner, you can pass it here",
    type: "string || element",
    default: "",
  },
];

export default class CapBannerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  handleClick = () => {
    window.open('#', '_blank');
  };

  render() {
    return (
      <div className="cap-banner-info">
        <div className="cap-banner-showcase">
          <CapBanner
            iconProps={{
              type: "survey",
              size: "m",
              svgProps: {
                fill: '#2466ea',
              },
              backgroundProps: {
                backgroundColor: '#E9F0FC',
              },
              withBackground: true,
            }}

            bannerContent={(
              <div>
                <CapLabel type="label1">
                  Experience the new Engage+ campaign manager below for all outbound communications.
                </CapLabel>
                <CapLabel type="label1">
                  For bounceback, referral, survey and timeline campaigns, please continue to use the old campaign manager.
                </CapLabel>
              </div>
            )}
            actionContent={(
              <CapLink
                title={(
                  <div style={{display: 'flex', flexGrow: 1, alignItems: 'center'}}>
                    <CapIcon
                      type="open-in-new-light"
                      size="m"
                      style={{ marginRight: 4 }}
                      svgProps={{
                        fill: '#2466ea',
                      }} />
                    <div>Open old campaign manager</div>
                  </div>
                )}
                onClick={this.handleClick}
                fontWeight="m"
              />
            )}
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
