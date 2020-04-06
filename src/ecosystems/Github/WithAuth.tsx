import React, { useState, useEffect } from 'react';
// import { navigate } from 'hookrouter';
import { GitHub } from '@bowtie/houndstooth-sdk';
import { auth, storage, github } from '../../lib';
import { WithGithub, WithGithubUser, WithChildren } from '../';
import { LoginGithub } from '../../organisms';
// import Api from '@bowtie/api';

export const WithGithubAuth = ({ children, ...props }) => {
  const [token, setToken] = useState(auth.token);
  const [isAuthorized, setIsAuthorized] = useState(auth.isAuthenticated());

  useEffect(() => {
    auth.on('authorized', (authResult) => {
      console.error('AUTHORIZED!', authResult);
      setToken(authResult.access_token);
      setIsAuthorized(true);
    });
  }, [setIsAuthorized]);

  return !isAuthorized ? (
    <LoginGithub {...props} />
  ) : (
    <WithGithub {...props} {...{ token, isAuthorized }}>
      <WithGithubUser>
        <WithChildren children={children} />
      </WithGithubUser>
    </WithGithub>
  );
};
