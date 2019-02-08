import React from 'react';
import { shallow } from 'enzyme';
import { Collapse } from 'antd';

import CapSideBar from '../index';

describe('<CapSideBar />', () => {
  const defaultProps = {
    sidebarItems: [
      {
        title: 'Favourite Reports',
        key: 'favourite_reports',
        children: [
          {
            title: 'Segments',
            key: 'segments',
            children: [
              {
                title: 'Campaigns Long Long Name Test',
                key: 'campaigns',
                link: '/campaigns',
              },
              {
                title: 'Incentive',
                key: 'incentive',
                link: '/incentive',
              },
            ],
          },
        ],
      },
      {
        title: 'Data Exports',
        key: 'data_exports',
        children: [
          {
            title: 'Exports',
            key: 'exports',
            link: '/exports',
          },
        ],
      },
      {
        title: 'Creatives',
        key: 'creatives',
        link: '/creatives',
      },
    ],
    selectedMenuItem: "exports",
    defaultActiveKey: "data_exports",
    searchSupportPortalUrl: "http://support.capillarytech.com/support/search/solutions?term={{searchText}}",
  };

  const wrapper = shallow(<CapSideBar {...defaultProps} />);
  it('Should render Collapse component 4 times', () => {
    expect(wrapper.find(Collapse)).toHaveLength(4);
  });

  it('Should update search results when getSearchResults is called', () => {
    wrapper.setState({ showLoader: true });
    wrapper.instance().getSearchResults('test');
    expect(wrapper.state('showSearchLoader')).toEqual(false);
  });
});
