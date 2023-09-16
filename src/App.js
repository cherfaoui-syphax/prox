import './App.css';
import React, { useState } from 'react';
import MainContainer  from'./components/MainContainer/MainContainer';
import { 
  Sidebar
} from './ui-components';
import { Paper, Input, Grid, TextField, Typography } from '@mui/material';
// import { Authenticator } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import { useAuthenticator, Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { withLDProvider, useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import CarehomeMainContainer from './components/CarehomeMainContainer/CarehomeMainContainer';

let context = {
  "kind": "category",
  "key": "anonymous",
  "name": "anonymous",
}

if (window.location.href.indexOf("carehome.canary.proxximos.com") > -1 ||
  window.location.href.indexOf("localhost") > -1) {
    context = {
      "kind": "category",
      "key": "carehome",
      "name": "carehome",
    }
  } else {
    context = {
        "kind": "category",
        "key": "nhs",
        "name": "nhs",
    }
}

function App() {
  return (
  //   <>
  //   {authStatus === 'configuring' && 'Loading...'}
  //   {authStatus !== 'authenticated' ? <>logged out</> : <>logged in</>}
  // </>
  <>
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <Authenticator hideDefault={true}>
      {({ signOut, user }) => {
        return (
        <>
          <div id="frame" className={context.key === "carehome" ? "carehome" : ""}>
            {context.key === "carehome" ? (
              <CarehomeMainContainer user={user} signOut={signOut} />
            ) : (
              <MainContainer user={user} signOut={signOut} />
            )}
          </div>
        </>
      )}}
    </Authenticator>
  </LocalizationProvider>
  </>
  );
}

export default withLDProvider({
  clientSideID: '64f7590ab8a60212a7a97400',
  context
})(withAuthenticator(App));
