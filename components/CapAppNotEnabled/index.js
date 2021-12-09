import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CapHeading from '../CapHeading';
import CapHeader from '../CapHeader';
import CapLabel from '../CapLabel';
import appNotEnabledIllustration from "../assets/images/appNotEnabledIllustration.svg";

const EmptyStateContainer = styled.div`
  width: 450px;
  margin: 0 auto;
  margin-top: 75px;
  text-align: center;
`;

const CustomCapHeader = styled(CapHeader)`
  text-align: center;
`;
const CapAppNotEnabled = ({ headerText, title, description }) => (
    <>
      <CustomCapHeader title={headerText} />
      <EmptyStateContainer>
        <img src={appNotEnabledIllustration} alt="" />
        <CapHeading type="h3" className="margin-t-34">
          {title}
        </CapHeading>
        <CapLabel type="label15" className="margin-t-8">
          {description}
        </CapLabel>
      </EmptyStateContainer>
    </>
);

CapAppNotEnabled.propTypes = {
  headerText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CapAppNotEnabled;
