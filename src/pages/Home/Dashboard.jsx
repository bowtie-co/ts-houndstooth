import React, { useEffect } from 'react';
// import { A } from 'hookrouter';
// import {
//   Container, Row, Col
// } from 'reactstrap';
import { WithApp, WithGithub, WithGithubAuth, WithGithubUser } from '../../ecosystems';
import { DebugProps, AppDashboard } from '../../organisms';
import { auth } from '../../lib';

export const HomeDashboard = (props) => {
  console.debug('HomeDashboard', { props });

  return (
    <WithGithubAuth {...props}>
      <WithApp>
        <AppDashboard />
      </WithApp>
    </WithGithubAuth>
  );
};
