import React from 'react';
import PropertyTable from '../../helpers/PropertyTable';
import CapLogin from '../../components/CapLogin';

const api = [
  {
    key: 1,
    property: "apiEndPoint",
    description: "Authentication Endpoint",
    type: "string",
    default: null,
  },
  {
    key: 2,
    property: "onSuccess",
    description: "On Success, function supplied to onSuccess property will called with success response",
    type: "function",
    default: null,
  },
  {
    key: 3,
    property: "onFailure",
    description: "On Failure, function supplied to onFailure property will called with error response",
    type: "function",
    default: null,
  },
  {
    key: 4,
    property: "signInLabel",
    description: "Sign In message displayed on top",
    type: "string",
    default: null,
  },
  {
    key: 5,
    property: "userNameLabel",
    description: "User Name label displayed on top of input",
    type: "string",
    default: null,
  },
  {
    key: 6,
    property: "passwordLabel",
    description: "Password label displayed on top of input",
    type: "string",
    default: null,
  },
];

function CapLoginDoc() {
  return (
    <>
      <CapLogin
        apiEndPoint=""
        signInLabel="{signInLabel}"
        userNameLabel="{userNameLabel}"
        passwordLabel="{passwordLabel}"
      />
      <PropertyTable data={api} />
    </>
  );
}
export default CapLoginDoc;
