import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import CapCard from '../CapCard';
import CapImage from '../CapImage';
import CapHeading from '../CapHeading';
import CapInput from '../CapInput';
import CapButton from '../CapButton';
import CapSpin from '../CapSpin';
import CapillaryLogo from '../assets/icons/capillary_logo_v2.png';
import { request } from '../service/api';
import './_capLogin.scss';

function CapLogin(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginProgess, updateLoginProgress] = useState(false);

  const {
    signInLabel,
    userNameLabel,
    passwordLabel,
    apiEndPoint = '',
    onSuccess,
    onFailure,
  } = props;

  const handleNameChange = useCallback((event) => {
    setUserName(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleLoginProgess = useCallback(() => {
    updateLoginProgress((state) => !state);
  }, []);

  const authorize = useCallback(() => {
    const body = {
      username: userName,
      password,
    };

    const requestObj = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    };
    requestObj.body = JSON.stringify(body);
    return request(`${apiEndPoint}`, requestObj);
  }, [apiEndPoint, password, userName]);

  const handleLogin = useCallback(() => {
    if (apiEndPoint) {
      handleLoginProgess();
      authorize()
        .then((res) => {
          handleLoginProgess();
          if (!res.success) {
            onFailure(res);
            return;
          }
          if (onSuccess) onSuccess(res);
        })
        .catch((err) => {
          handleLoginProgess();
          if (onFailure) onFailure(err);
        });
    }
  }, [apiEndPoint, onFailure, onSuccess, authorize, handleLoginProgess]);

  return (
    <CapSpin spinning={loginProgess}>
      <section className="cap-login-container">
        <CapCard className="cap-login-card">
          <CapImage className="cap-login-logo" src={CapillaryLogo} />
          <CapHeading
            className="cap-login-heading"
            type="h2"
          >
            {signInLabel}
          </CapHeading>
          <CapInput
            className="cap-login-input"
            labelPosition="top"
            label={userNameLabel}
            value={userName}
            onChange={handleNameChange}
            isRequired
          />
          <CapInput
            type="password"
            className="cap-login-input"
            labelPosition="top"
            label={passwordLabel}
            value={password}
            onChange={handlePasswordChange}
            isRequired
          />
          <div className="cap-login-centeringDiv">
            <CapButton className="cap-login-button" onClick={handleLogin}>{signInLabel}</CapButton>
          </div>
        </CapCard>
      </section>
    </CapSpin>
  );
}

CapLogin.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  signInLabel: PropTypes.string,
  userNameLabel: PropTypes.string,
  passwordLabel: PropTypes.string,
  apiEndPoint: PropTypes.string.isRequired,
};

export default CapLogin;
