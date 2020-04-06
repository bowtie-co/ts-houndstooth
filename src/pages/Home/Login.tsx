import React, { useEffect } from 'react';
// import { A } from 'hookrouter';
// import {
//   Container, Row, Col
// } from 'reactstrap';
import { WithApp } from '../../ecosystems';
import { LoginGithub } from '../../organisms';
import { auth } from '../../lib';

export const HomeLogin = (props) => {
  console.debug('Home', { props });

  useEffect(() => {
    auth.handleCallback('BITBUCKET');
  }, []);

  return (
    <WithApp {...props}>
      <LoginGithub />
    </WithApp>
  );
};
