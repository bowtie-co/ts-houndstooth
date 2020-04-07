import React, { FC, useState, useEffect } from 'react';
import { auth } from '../../lib';
import { WithGithub, WithGithubUser, WithChildren } from '../';
import { LoginGithub } from '../../organisms';
import { IDefaultProps } from '../../types';

export const WithGithubAuth: FC<IDefaultProps> = ({ children, ...props }) => {
  const [token, setToken] = useState<string>('');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(auth.isAuthenticated());

  useEffect(() => {
    // auth.on('authorized', (authResult) => {
    //   console.error('AUTHORIZED!', authResult);
    //   setToken(authResult.access_token);
    //   setIsAuthorized(true);
    // });

    if (process.env.REACT_APP_API_AUTH_TOKEN) {
      setToken(process.env.REACT_APP_API_AUTH_TOKEN);
      setIsAuthorized(true);
    }
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
